import type { MetodoPago } from '../../types/venta';
import { CreditCard, Banknote, Building2, Smartphone, Calendar, FileText } from 'lucide-react';

interface MetodoPagoSelectorProps {
  metodoPago: MetodoPago;
  onSeleccionar: (metodo: MetodoPago) => void;
  creditoDisponible?: number;
}

export function MetodoPagoSelector({ metodoPago, onSeleccionar, creditoDisponible }: MetodoPagoSelectorProps) {
  const metodos: Array<{ id: MetodoPago; nombre: string; icono: React.ReactNode; descripcion: string; requiereCredito?: boolean }> = [
    {
      id: 'Efectivo',
      nombre: 'Efectivo',
      icono: <Banknote className="w-5 h-5" />,
      descripcion: 'Pago en efectivo',
    },
    {
      id: 'Transferencia',
      nombre: 'Transferencia',
      icono: <Building2 className="w-5 h-5" />,
      descripcion: 'Transferencia bancaria',
    },
    {
      id: 'Tarjeta Débito',
      nombre: 'Débito',
      icono: <CreditCard className="w-5 h-5" />,
      descripcion: 'Tarjeta de débito',
    },
    {
      id: 'Tarjeta Crédito',
      nombre: 'Crédito',
      icono: <CreditCard className="w-5 h-5" />,
      descripcion: 'Tarjeta de crédito',
    },
    {
      id: 'Mercado Pago',
      nombre: 'Mercado Pago',
      icono: <Smartphone className="w-5 h-5" />,
      descripcion: 'QR o link de pago',
    },
    {
      id: 'Cheque Propio',
      nombre: 'Cheque Propio',
      icono: <FileText className="w-5 h-5" />,
      descripcion: 'Cheque del cliente',
    },
    {
      id: 'Cheque Tercero',
      nombre: 'Cheque 3ro',
      icono: <FileText className="w-5 h-5" />,
      descripcion: 'Cheque de terceros',
    },
    {
      id: 'Cuenta Corriente',
      nombre: 'Cuenta Corriente',
      icono: <Calendar className="w-5 h-5" />,
      descripcion: 'A pagar según condiciones',
      requiereCredito: true,
    },
  ];

  return (
    <div className="space-y-3">
      <label className="block text-sm font-semibold text-gray-700">
        Método de Pago
      </label>
      <div className="grid grid-cols-2 gap-2">
        {metodos.map((metodo) => {
          const deshabilitado = metodo.requiereCredito && (creditoDisponible === undefined || creditoDisponible <= 0);
          const seleccionado = metodoPago === metodo.id;

          return (
            <button
              key={metodo.id}
              onClick={() => !deshabilitado && onSeleccionar(metodo.id)}
              disabled={deshabilitado}
              className={`
                p-3 rounded-lg border-2 text-left transition-all
                ${seleccionado 
                  ? 'border-orange-500 bg-orange-50 shadow-sm' 
                  : 'border-gray-200 bg-white hover:border-gray-300'
                }
                ${deshabilitado 
                  ? 'opacity-40 cursor-not-allowed' 
                  : 'cursor-pointer'
                }
              `}
              title={deshabilitado ? 'Crédito no disponible' : metodo.descripcion}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className={seleccionado ? 'text-orange-600' : 'text-gray-600'}>
                  {metodo.icono}
                </div>
                <span className={`font-medium text-sm ${seleccionado ? 'text-orange-900' : 'text-gray-900'}`}>
                  {metodo.nombre}
                </span>
              </div>
              <p className="text-xs text-gray-500 truncate">{metodo.descripcion}</p>
              {metodo.requiereCredito && creditoDisponible !== undefined && creditoDisponible > 0 && (
                <p className="text-xs text-green-600 mt-1">
                  Disponible: ${creditoDisponible.toLocaleString()}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
