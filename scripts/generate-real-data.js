import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer archivos CSV
const factuData = fs.readFileSync(path.join(__dirname, '../Info/factu03052018.csv'), 'utf-8');
const moviFacData = fs.readFileSync(path.join(__dirname, '../Info/movi_fac03052018.csv'), 'utf-8');

// Parsear datos
const facturas = factuData.trim().split('\n').map(line => {
  const cols = line.split('\t');
  return {
    sucursal: cols[0],
    tipo: cols[1],
    subtipo: cols[2],
    numero: cols[3],
    fecha: cols[4],
    cliente: cols[5],
    fechaPedido: cols[6],
    numeroPedido: cols[7],
    condicionPago: cols[8],
    categoriaIVA: cols[9],
    totalGravado: parseFloat(cols[25]) || 0,
    totalExento: parseFloat(cols[26]) || 0,
    totalIVA: parseFloat(cols[33]) || 0,
    totalComprobante: parseFloat(cols[38]) || 0,
    nombreCliente: cols[74] || 'Sin Nombre',
    items: parseInt(cols[62]) || 0,
    cuit: cols[96] || ''
  };
});

const movimientos = moviFacData.trim().split('\n').map(line => {
  const cols = line.split('\t');
  return {
    factura: cols[3],
    articulo: cols[4],
    precio: parseFloat(cols[7]) || 0,
    costo: parseFloat(cols[8]) || 0,
    cantidad: parseFloat(cols[9]) || 0,
    unidad: cols[10],
    scan: parseInt(cols[15]) || 0,
    familia: parseInt(cols[43]) || 0,
    departamento: parseInt(cols[44]) || 0,
    seccion: parseInt(cols[45]) || 0,
    grupo: parseInt(cols[46]) || 0,
    proveedor: cols[53] || '0',
    codigoBarras: cols[51] || ''
  };
});

// Nombres de categorías basados en familias comunes de supermercado
const nombresCategorias = {
  1: 'Almacén', 2: 'Bebidas', 3: 'Lácteos', 4: 'Carnes y Fiambres',
  5: 'Panadería', 6: 'Limpieza', 7: 'Perfumería', 8: 'Bazar',
  9: 'Frutas y Verduras', 10: 'Congelados', 11: 'Despensa',
  12: 'Golosinas', 13: 'Snacks', 14: 'Mascotas', 15: 'Ferretería',
  16: 'Electro', 17: 'Otros'
};

// Nombres genéricos de productos por ID (primeros 100)
const nombresProductos = {
  1: 'Aceite Girasol', 13: 'Arroz Blanco', 27: 'Fideos Secos', 32: 'Polenta',
  41: 'Harina 000', 44: 'Azúcar Común', 56: 'Café Molido', 58: 'Té Negro',
  59: 'Té Verde', 60: 'Yerba Mate', 66: 'Sal Fina', 68: 'Sal Gruesa',
  106: 'Pan Lactal', 126: 'Leche Entera', 128: 'Leche Descremada',
  136: 'Yogur Natural', 162: 'Queso Cremoso', 176: 'Manteca', 179: 'Crema',
  183: 'Dulce de Leche', 184: 'Mermelada', 185: 'Miel', 190: 'Jamón Cocido',
  193: 'Salchichas', 195: 'Chorizo', 228: 'Milanesas', 229: 'Carne Molida',
  306: 'Agua Mineral', 540: 'Gaseosa Cola', 605: 'Jugo Naranja',
  614: 'Cerveza Lager', 900: 'Vino Tinto', 1017: 'Detergente', 1065: 'Lavandina',
  1132: 'Jabón Tocador', 1179: 'Shampoo', 1213: 'Papel Higiénico',
  1242: 'Servilletas', 1246: 'Bolsas Basura', 1254: 'Esponja', 1255: 'Trapo Piso',
  1309: 'Galletitas Dulces', 1319: 'Chocolate', 1336: 'Caramelos', 1339: 'Chicles',
  1340: 'Alfajores', 1365: 'Snacks Salados', 1366: 'Maní', 1375: 'Papas Fritas',
  1378: 'Pan Rallado', 1380: 'Rebozador', 1415: 'Desodorante', 1419: 'Pasta Dental',
  1420: 'Cepillo Dental', 1578: 'Pilas AA'
};

// ============================================
// GENERAR PRODUCTOS
// ============================================
const productosMap = new Map();

movimientos.forEach(mov => {
  const artId = mov.articulo;
  if (!productosMap.has(artId)) {
    productosMap.set(artId, {
      id: artId,
      ventas: [],
      precios: [],
      costos: [],
      unidad: mov.unidad || 'u',
      familia: mov.familia || 1,
      departamento: mov.departamento || 1,
      cantidadTotal: 0,
      codigoBarras: mov.codigoBarras || ''
    });
  }
  
  const prod = productosMap.get(artId);
  if (mov.precio > 0) prod.precios.push(mov.precio);
  if (mov.costo > 0) prod.costos.push(mov.costo);
  prod.cantidadTotal += mov.cantidad;
  prod.ventas.push(mov);
});

const productos = [];
let productoIndex = 1;

productosMap.forEach((data, artId) => {
  const precioPromedio = data.precios.length > 0 
    ? data.precios.reduce((a, b) => a + b, 0) / data.precios.length 
    : 100;
  
  const costoPromedio = data.costos.length > 0
    ? data.costos.reduce((a, b) => a + b, 0) / data.costos.length
    : precioPromedio * 0.6;

  const stockActual = Math.floor(Math.random() * 200) + 50;
  const stockMinimo = Math.floor(stockActual * 0.3);
  const stockMaximo = Math.floor(stockActual * 3);

  const nombreBase = nombresProductos[artId] || `Producto ${artId}`;
  const categoria = nombresCategorias[data.familia] || 'Almacén';

  productos.push({
    id: artId,
    codigo: `ART${String(artId).padStart(6, '0')}`,
    nombre: nombreBase,
    descripcion: `${nombreBase} - Código ${artId}`,
    categoria,
    marca: 'Genérica',
    unidadMedida: data.unidad === 'g' ? 'kg' : (data.unidad === 'b' ? 'bulto' : 'unidad'),
    precioCompra: Math.round(costoPromedio * 100) / 100,
    precioVenta: Math.round(precioPromedio * 100) / 100,
    stockActual,
    stockMinimo,
    stockMaximo,
    codigoBarras: data.codigoBarras || `78${String(artId).padStart(11, '0')}`,
    proveedor: 'Varios',
    ubicacion: `Depósito ${Math.ceil(productoIndex / 50)}`,
    activo: true,
    imagen: `/productos/placeholder-product.jpg`
  });

  productoIndex++;
});

// Ordenar por ID
productos.sort((a, b) => parseInt(a.id) - parseInt(b.id));

// ============================================
// GENERAR CLIENTES
// ============================================
const clientesMap = new Map();

facturas.forEach(fac => {
  const cliId = fac.cliente;
  if (!clientesMap.has(cliId)) {
    clientesMap.set(cliId, {
      id: cliId,
      nombre: fac.nombreCliente,
      facturas: [],
      totalComprado: 0,
      cuit: fac.cuit
    });
  }
  
  const cli = clientesMap.get(cliId);
  cli.facturas.push(fac);
  cli.totalComprado += fac.totalComprobante;
});

const clientes = [];
let clienteIndex = 1;

clientesMap.forEach((data, cliId) => {
  const promedioCompra = data.totalComprado / data.facturas.length;
  const limiteCredito = Math.round(promedioCompra * 10);

  clientes.push({
    id: `CLI${String(clienteIndex).padStart(4, '0')}`,
    razonSocial: data.nombre === 'Cliente Mostrador' ? `Cliente ${clienteIndex}` : data.nombre,
    nombreFantasia: data.nombre === 'Cliente Mostrador' ? `Comercio ${clienteIndex}` : data.nombre,
    cuit: data.cuit || `20${String(20000000 + clienteIndex).padStart(8, '0')}9`,
    condicionIVA: 'Consumidor Final',
    direccion: `Calle ${clienteIndex * 100}`,
    localidad: 'Buenos Aires',
    provincia: 'Buenos Aires',
    codigoPostal: `1400`,
    telefono: `011-4000-${String(clienteIndex).padStart(4, '0')}`,
    email: `cliente${clienteIndex}@email.com`,
    contacto: data.nombre,
    limiteCredito,
    saldoActual: Math.round(Math.random() * limiteCredito * 0.3),
    descuentoGeneral: clienteIndex <= 5 ? 15 : (clienteIndex <= 10 ? 10 : 5),
    activo: true,
    fechaAlta: '2024-01-15',
    observaciones: `Cliente real del sistema - ID original: ${cliId}`
  });

  clienteIndex++;
});

// ============================================
// GENERAR PROVEEDORES
// ============================================
const proveedoresReales = [
  { nombre: 'Arcor S.A.I.C.', productos: ['1309', '1340', '1336', '1319'] },
  { nombre: 'Molinos Río de la Plata', productos: ['41', '1', '13', '27'] },
  { nombre: 'Coca-Cola FEMSA', productos: ['540'] },
  { nombre: 'Quilmes', productos: ['614'] },
  { nombre: 'Mastellone Hnos.', productos: ['126', '128', '136', '162'] },
  { nombre: 'La Serenísima', productos: ['176', '179', '183'] },
  { nombre: 'Unilever', productos: ['1179', '1132', '1017'] },
  { nombre: 'Procter & Gamble', productos: ['1213', '1242', '1415'] },
  { nombre: 'Kimberly Clark', productos: ['1246', '1254', '1255'] }
];

const proveedores = proveedoresReales.map((prov, idx) => ({
  id: `PROV${String(idx + 1).padStart(3, '0')}`,
  nombre: prov.nombre,
  razonSocial: prov.nombre,
  nombreFantasia: prov.nombre,
  cuit: `30${String(70000000 + idx * 100000).padStart(8, '0')}${idx % 10}`,
  condicionIVA: 'Responsable Inscripto',
  direccion: `Av. Industrial ${(idx + 1) * 1000}`,
  localidad: 'Buenos Aires',
  provincia: 'Buenos Aires',
  codigoPostal: '1416',
  telefono: `011-5000-${String(idx + 1).padStart(4, '0')}`,
  email: `ventas@${prov.nombre.toLowerCase().replace(/\s/g, '')}.com.ar`,
  contacto: 'Departamento de Ventas',
  productos: prov.productos,
  condicionesPago: '30 días fecha de factura',
  descuentoVolumen: 5,
  activo: true,
  calificacion: 4 + Math.random(),
  tiempoEntrega: `${3 + idx % 5}-${5 + idx % 5} días`
}));

// ============================================
// GENERAR VENTAS
// ============================================
const ventas = [];
let ventaId = 1;

facturas.slice(0, 50).forEach(fac => {
  const itemsFactura = movimientos.filter(m => m.factura === fac.numero);
  const clienteIndex = clientes.findIndex(c => c.observaciones?.includes(fac.cliente));
  
  if (itemsFactura.length > 0 && clienteIndex >= 0) {
    const items = itemsFactura.map(item => {
      const prod = productos.find(p => p.id === item.articulo);
      return prod ? {
        productoId: prod.id,
        cantidad: item.cantidad,
        precioUnitario: item.precio,
        subtotal: item.cantidad * item.precio,
        descuento: 0
      } : null;
    }).filter(Boolean);

    if (items.length > 0) {
      const subtotal = items.reduce((sum, i) => sum + i.subtotal, 0);
      const descuento = subtotal * (clientes[clienteIndex].descuentoGeneral / 100);
      const iva = (subtotal - descuento) * 0.21;

      ventas.push({
        id: `V${String(ventaId).padStart(6, '0')}`,
        fecha: fac.fecha,
        clienteId: clientes[clienteIndex].id,
        items,
        subtotal,
        descuento,
        iva,
        total: subtotal - descuento + iva,
        metodoPago: fac.condicionPago === '0' ? 'Efectivo' : 'Cuenta Corriente',
        estado: 'completada',
        observaciones: `Factura original ${fac.tipo}-${fac.numero}`
      });

      ventaId++;
    }
  }
});

// ============================================
// ESCRIBIR ARCHIVOS
// ============================================

// productos.ts
const productosTS = `// Productos reales del sistema - Generado automáticamente
import { Producto } from '../types';

export const productos: Producto[] = ${JSON.stringify(productos, null, 2)};
`;

fs.writeFileSync(
  path.join(__dirname, '../src/data/productos.ts'),
  productosTS
);

// clientes.ts
const clientesTS = `// Clientes reales del sistema - Generado automáticamente
import { Cliente } from '../types/cliente';

export const clientes: Cliente[] = ${JSON.stringify(clientes, null, 2)};
`;

fs.writeFileSync(
  path.join(__dirname, '../src/data/clientes.ts'),
  clientesTS
);

// proveedores.ts
const proveedoresTS = `// Proveedores reales del sistema - Generado automáticamente
import { Proveedor } from '../types/proveedor';

// Relación productos-proveedores
export const proveedorProductosIniciales = ${JSON.stringify(
  proveedores.flatMap(prov => 
    prov.productos.map(prodId => ({
      proveedorId: prov.id,
      productoId: prodId,
      precioCompra: productos.find(p => p.id === prodId)?.precioCompra || 100,
      esPrincipal: true
    }))
  ),
  null,
  2
)};

export const proveedores: Proveedor[] = ${JSON.stringify(
  proveedores.map(p => {
    const { productos, ...rest } = p;
    return rest;
  }),
  null,
  2
)};
`;

fs.writeFileSync(
  path.join(__dirname, '../src/data/proveedores.ts'),
  proveedoresTS
);

// Actualizar ventas en el store (sample)
const ventasData = {
  ventas: ventas,
  metadata: {
    totalVentas: ventas.length,
    totalFacturado: ventas.reduce((sum, v) => sum + v.total, 0),
    fecha: '2018-05-03'
  }
};

fs.writeFileSync(
  path.join(__dirname, '../Info/ventas-generadas.json'),
  JSON.stringify(ventasData, null, 2)
);

console.log('\n✅ ARCHIVOS GENERADOS EXITOSAMENTE:\n');
console.log(`   📦 Productos: ${productos.length} items → src/data/productos.ts`);
console.log(`   👥 Clientes: ${clientes.length} items → src/data/clientes.ts`);
console.log(`   🏢 Proveedores: ${proveedores.length} items → src/data/proveedores.ts`);
console.log(`   💰 Ventas: ${ventas.length} items → Info/ventas-generadas.json`);
console.log('\n');
