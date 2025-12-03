import type { Movimiento, Producto } from '../types';

export interface RotacionProducto {
  productoId: string;
  nombre: string;
  stockActual: number;
  cantidadVendida: number;
  diasConVentas: number;
  promedioVentaDiaria: number;
  diasDeStock: number; // Cuántos días durará el stock actual
  categoria: 'rapido' | 'normal' | 'lento' | 'sin-movimiento';
  ultimaVenta: string;
  totalValorVendido: number;
}

export interface AnalisisRotacion {
  productosRapidos: RotacionProducto[];
  productosLentos: RotacionProducto[];
  productosSinMovimiento: RotacionProducto[];
  promedioRotacion: number;
  totalProductosAnalizados: number;
}

/**
 * Calcula los días entre dos fechas en formato DD/MM/YY
 */
function calcularDiasEntreFechas(fechaInicio: string, fechaFin: string): number {
  const parseDate = (fecha: string): Date => {
    const [dia, mes, anio] = fecha.split('/').map(Number);
    const anioCompleto = anio < 100 ? 2000 + anio : anio;
    return new Date(anioCompleto, mes - 1, dia);
  };

  const inicio = parseDate(fechaInicio);
  const fin = parseDate(fechaFin);
  const diffTime = Math.abs(fin.getTime() - inicio.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

/**
 * Obtiene la fecha más reciente de un array de fechas en formato DD/MM/YY
 */
function obtenerFechaMasReciente(fechas: string[]): string {
  if (fechas.length === 0) return '';
  
  const parseDate = (fecha: string): number => {
    const [dia, mes, anio] = fecha.split('/').map(Number);
    const anioCompleto = anio < 100 ? 2000 + anio : anio;
    return new Date(anioCompleto, mes - 1, dia).getTime();
  };

  return fechas.reduce((masReciente, fecha) => {
    return parseDate(fecha) > parseDate(masReciente) ? fecha : masReciente;
  });
}

/**
 * Obtiene la fecha más antigua de un array de fechas en formato DD/MM/YY
 */
function obtenerFechaMasAntigua(fechas: string[]): string {
  if (fechas.length === 0) return '';
  
  const parseDate = (fecha: string): number => {
    const [dia, mes, anio] = fecha.split('/').map(Number);
    const anioCompleto = anio < 100 ? 2000 + anio : anio;
    return new Date(anioCompleto, mes - 1, dia).getTime();
  };

  return fechas.reduce((masAntigua, fecha) => {
    return parseDate(fecha) < parseDate(masAntigua) ? fecha : masAntigua;
  });
}

/**
 * Categoriza la rotación del producto según días de stock
 */
function categorizarRotacion(diasDeStock: number, sinMovimiento: boolean): 'rapido' | 'normal' | 'lento' | 'sin-movimiento' {
  if (sinMovimiento) return 'sin-movimiento';
  if (diasDeStock < 15) return 'rapido'; // Menos de 15 días de stock
  if (diasDeStock < 45) return 'normal'; // Entre 15 y 45 días
  return 'lento'; // Más de 45 días
}

/**
 * Analiza la rotación de un producto específico
 */
export function analizarRotacionProducto(
  producto: Producto,
  movimientos: Movimiento[]
): RotacionProducto {
  // Filtrar movimientos de SALIDA y VENTA del producto
  const movimientosProducto = movimientos.filter(mov => {
    if (!mov.fecha) return false;
    
    const esVentaOSalida = mov.tipo === 'VENTA' || mov.tipo === 'SALIDA';
    
    if (mov.items) {
      return esVentaOSalida && mov.items.some(item => item.productoId === producto.id);
    } else if (mov.productoId) {
      return esVentaOSalida && mov.productoId === producto.id;
    }
    return false;
  });

  // Si no hay movimientos, el producto no tiene rotación
  if (movimientosProducto.length === 0) {
    return {
      productoId: producto.id,
      nombre: producto.nombre,
      stockActual: producto.stockActual,
      cantidadVendida: 0,
      diasConVentas: 0,
      promedioVentaDiaria: 0,
      diasDeStock: Infinity,
      categoria: 'sin-movimiento',
      ultimaVenta: 'Nunca',
      totalValorVendido: 0
    };
  }

  // Calcular total vendido
  let cantidadVendida = 0;
  let totalValorVendido = 0;

  movimientosProducto.forEach(mov => {
    if (mov.items) {
      mov.items.forEach(item => {
        if (item.productoId === producto.id) {
          cantidadVendida += item.cantidad;
          totalValorVendido += item.subtotal || (item.cantidad * item.precioUnitario);
        }
      });
    } else if (mov.productoId === producto.id) {
      cantidadVendida += mov.cantidad || 0;
      totalValorVendido += mov.totalValor || 0;
    }
  });

  // Obtener fechas de movimientos
  const fechasMovimientos = movimientosProducto
    .map(mov => mov.fecha)
    .filter((fecha): fecha is string => !!fecha);

  const fechaPrimeraVenta = obtenerFechaMasAntigua(fechasMovimientos);
  const fechaUltimaVenta = obtenerFechaMasReciente(fechasMovimientos);
  
  // Calcular días con ventas
  const diasConVentas = fechaPrimeraVenta && fechaUltimaVenta 
    ? calcularDiasEntreFechas(fechaPrimeraVenta, fechaUltimaVenta) + 1
    : 1;

  // Calcular promedio de venta diaria
  const promedioVentaDiaria = diasConVentas > 0 ? cantidadVendida / diasConVentas : 0;

  // Calcular días de stock disponible
  const diasDeStock = promedioVentaDiaria > 0 
    ? producto.stockActual / promedioVentaDiaria 
    : Infinity;

  const categoria = categorizarRotacion(diasDeStock, false);

  return {
    productoId: producto.id,
    nombre: producto.nombre,
    stockActual: producto.stockActual,
    cantidadVendida,
    diasConVentas,
    promedioVentaDiaria,
    diasDeStock,
    categoria,
    ultimaVenta: fechaUltimaVenta,
    totalValorVendido
  };
}

/**
 * Analiza todos los productos y genera un reporte de rotación
 */
export function analizarRotacionInventario(
  productos: Producto[],
  movimientos: Movimiento[]
): AnalisisRotacion {
  const analisisProductos = productos.map(producto => 
    analizarRotacionProducto(producto, movimientos)
  );

  // Filtrar productos con stock y categorizarlos
  const productosConStock = analisisProductos.filter(p => p.stockActual > 0);

  const productosRapidos = productosConStock
    .filter(p => p.categoria === 'rapido')
    .sort((a, b) => a.diasDeStock - b.diasDeStock)
    .slice(0, 20);

  const productosLentos = productosConStock
    .filter(p => p.categoria === 'lento')
    .sort((a, b) => b.diasDeStock - a.diasDeStock)
    .slice(0, 20);

  const productosSinMovimiento = productosConStock
    .filter(p => p.categoria === 'sin-movimiento')
    .sort((a, b) => b.stockActual - a.stockActual)
    .slice(0, 20);

  // Calcular promedio de rotación (excluyendo productos sin movimiento y con días infinitos)
  const productosConRotacion = analisisProductos.filter(
    p => p.diasDeStock !== Infinity && p.diasDeStock > 0
  );
  
  const promedioRotacion = productosConRotacion.length > 0
    ? productosConRotacion.reduce((sum, p) => sum + p.diasDeStock, 0) / productosConRotacion.length
    : 0;

  return {
    productosRapidos,
    productosLentos,
    productosSinMovimiento,
    promedioRotacion,
    totalProductosAnalizados: productos.length
  };
}

/**
 * Identifica productos que necesitan reabastecimiento urgente
 */
export function identificarProductosParaReorden(
  productos: Producto[],
  movimientos: Movimiento[],
  diasUmbral: number = 7 // Días de stock crítico
): RotacionProducto[] {
  const analisisProductos = productos.map(producto => 
    analizarRotacionProducto(producto, movimientos)
  );

  return analisisProductos
    .filter(p => 
      p.diasDeStock < diasUmbral && 
      p.diasDeStock > 0 && 
      p.promedioVentaDiaria > 0 &&
      p.stockActual > 0
    )
    .sort((a, b) => a.diasDeStock - b.diasDeStock)
    .slice(0, 20);
}

/**
 * Calcula la cantidad sugerida de reorden basada en la rotación
 */
export function calcularCantidadReorden(
  rotacion: RotacionProducto,
  diasCobertura: number = 30 // Días de cobertura deseada
): number {
  if (rotacion.promedioVentaDiaria <= 0) return 0;
  
  // Cantidad necesaria para cubrir los días deseados menos el stock actual
  const cantidadNecesaria = rotacion.promedioVentaDiaria * diasCobertura;
  const cantidadReorden = Math.max(0, cantidadNecesaria - rotacion.stockActual);
  
  return Math.ceil(cantidadReorden);
}
