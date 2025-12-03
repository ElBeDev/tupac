import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { EstadoStock, Producto } from '../types';
import type { Cliente } from '../types/cliente';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper para obtener el precio de venta de un producto (con fallbacks)
export function getPrecioVenta(producto: Producto): number {
  return producto.precioVenta || producto.precioVentaMayorista || producto.precioVentaMinorista || 0;
}

// Helper para obtener el precio de costo de un producto (con fallbacks)
export function getPrecioCosto(producto: Producto): number {
  return producto.precioCosto || producto.precioCompra || 0;
}

// Helper para obtener el saldo de deuda de un cliente (con fallbacks)
export function getSaldoDeuda(cliente: Cliente): number {
  return cliente.saldoDeuda || cliente.saldoActual || 0;
}

// Helper para obtener el nombre de un cliente (con fallbacks)
export function getNombreCliente(cliente: Cliente): string {
  return cliente.razonSocial || 'Sin nombre';
}

// Helper para obtener el descuento de un cliente (con fallbacks)
export function getDescuentoCliente(cliente: Cliente): number {
  return cliente.descuentoGeneral || cliente.descuento || 0;
}

export function getEstadoStock(stockActual: number, stockMinimo: number): EstadoStock {
  if (stockActual === 0) return 'CRITICO';
  if (stockActual <= stockMinimo) return 'BAJO';
  return 'OK';
}

export function getColorEstado(estado: EstadoStock): string {
  const colores = {
    OK: 'text-green-600 bg-green-50',
    BAJO: 'text-yellow-600 bg-yellow-50',
    CRITICO: 'text-red-600 bg-red-50',
  };
  return colores[estado];
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(amount);
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

export function formatDateTime(date: string): string {
  return new Date(date).toLocaleString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function getDiasHastaVencimiento(fechaVencimiento: string): number {
  const hoy = new Date();
  const vencimiento = new Date(fechaVencimiento);
  const diferencia = vencimiento.getTime() - hoy.getTime();
  return Math.ceil(diferencia / (1000 * 60 * 60 * 24));
}
