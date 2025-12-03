import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import type { Movimiento } from '../../types';

interface StockChartProps {
  movimientos: Movimiento[];
}

export default function StockChart({ movimientos }: StockChartProps) {
  // Agrupar movimientos por día (últimos 7 días)
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return date.toISOString().split('T')[0];
  });

  const data = last7Days.map(date => {
    const dayMovimientos = movimientos.filter(m => 
      m.fechaMovimiento?.startsWith(date)
    );
    
    const entradas = dayMovimientos
      .filter(m => m.tipo === 'ENTRADA')
      .reduce((sum, m) => sum + (m.cantidad || 0), 0);
    
    const salidas = dayMovimientos
      .filter(m => m.tipo === 'SALIDA')
      .reduce((sum, m) => sum + (m.cantidad || 0), 0);

    const fecha = new Date(date);
    const dia = fecha.toLocaleDateString('es-AR', { weekday: 'short', day: '2-digit', month: '2-digit' });

    return {
      fecha: dia,
      Entradas: entradas,
      Salidas: salidas,
    };
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Movimientos Últimos 7 Días</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Entradas" fill="#10b981" />
            <Bar dataKey="Salidas" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
