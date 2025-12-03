#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para convertir cmovsto03052018.csv y dmovsto03052018.csv a TypeScript
Genera movimientos-reales.ts con datos reales de movimientos de stock
"""

import csv
import json
from collections import defaultdict

# Archivos de entrada
CMOVSTO_FILE = 'Info/cmovsto03052018.csv'
DMOVSTO_FILE = 'Info/dmovsto03052018.csv'
OUTPUT_FILE = 'src/data/movimientos-reales.ts'

def parse_cmovsto():
    """Parsear cmovsto - cabecera de movimientos"""
    movimientos_cabecera = {}
    
    with open(CMOVSTO_FILE, 'r', encoding='latin-1') as f:
        reader = csv.reader(f, delimiter='\t')
        
        for row in reader:
            if len(row) < 27:
                continue
                
            # cmovsto columns:
            # 0: suc, 1: tip, 2: stip, 3: nro, 4: fecha, 5: hora, 6: obs
            # 7: tsuc, 8: sig, 9: ope, 10: sec, 11: mimp, 12: tra
            # 17: enti (entidad: cliente o proveedor)
            
            try:
                nro_comprobante = row[3].strip()
                tipo_comp = row[1].strip()  # FC, IM, etc.
                sig = row[8].strip()  # -1 = salida, 1 = entrada
                
                movimientos_cabecera[nro_comprobante] = {
                    'sucursal': row[0].strip(),
                    'tipo': tipo_comp,
                    'subtipo': row[2].strip(),
                    'numero': nro_comprobante,
                    'fecha': row[4].strip(),
                    'hora': row[5].strip() if row[5].strip() else '00:00',
                    'observaciones': row[6].strip() if len(row) > 6 else '',
                    'signo': int(sig) if sig else -1,
                    'entidad': row[17].strip() if len(row) > 17 and row[17].strip() else '',
                }
            except (ValueError, IndexError) as e:
                continue
    
    return movimientos_cabecera

def parse_dmovsto(movimientos_cabecera):
    """Parsear dmovsto - detalle de movimientos"""
    movimientos = []
    items_por_movimiento = defaultdict(list)
    
    with open(DMOVSTO_FILE, 'r', encoding='latin-1') as f:
        reader = csv.reader(f, delimiter='\t')
        
        for row in reader:
            if len(row) < 27:
                continue
                
            # dmovsto columns:
            # 0: suc, 1: tip, 2: stip, 3: nro, 4: est (estado), 5: art (articulo)
            # 6: udad (unidad), 7: cant (cantidad), 8: pco (precio/costo)
            # 9: val (valorización), 10: scant, 11: cpie, 12: ite (item)
            # 13: tra, 14: fec, 15: timov (tipo movimiento)
            
            try:
                nro_comprobante = row[3].strip()
                
                # Buscar info de cabecera
                cabecera = movimientos_cabecera.get(nro_comprobante)
                if not cabecera:
                    continue
                
                codigo_producto = row[5].strip()
                cantidad_str = row[7].strip()
                precio_str = row[8].strip()
                val_str = row[9].strip()
                
                if not codigo_producto or not cantidad_str:
                    continue
                
                cantidad = float(cantidad_str)
                precio = float(precio_str) if precio_str else 0
                valorizacion = float(val_str) if val_str else 0
                
                # Determinar tipo de movimiento
                tipo_movimiento = 'SALIDA' if cabecera['signo'] == -1 else 'ENTRADA'
                if cabecera['tipo'] == 'FC':
                    tipo_movimiento = 'VENTA'
                elif cabecera['tipo'] == 'IM':
                    tipo_movimiento = 'COMPRA'
                
                item = {
                    'productoId': codigo_producto,
                    'cantidad': abs(cantidad),
                    'unidad': row[6].strip() if len(row) > 6 else 'u',
                    'precio': abs(precio),
                    'valorizacion': abs(valorizacion),
                }
                
                items_por_movimiento[nro_comprobante].append(item)
                
            except (ValueError, IndexError) as e:
                continue
    
    # Crear movimientos completos
    mov_id = 1
    for nro_comp, items in items_por_movimiento.items():
        cabecera = movimientos_cabecera.get(nro_comp)
        if not cabecera or not items:
            continue
        
        # Determinar tipo
        tipo_mov = 'SALIDA'
        if cabecera['signo'] == 1:
            tipo_mov = 'ENTRADA'
        if cabecera['tipo'] == 'FC':
            tipo_mov = 'VENTA'
        elif cabecera['tipo'] == 'IM':
            tipo_mov = 'COMPRA'
        
        # Calcular totales
        total_cantidad = sum(item['cantidad'] for item in items)
        total_valorizacion = sum(item['valorizacion'] for item in items)
        
        movimiento = {
            'id': f'MOV{mov_id:06d}',
            'tipo': tipo_mov,
            'fecha': cabecera['fecha'],
            'hora': cabecera['hora'],
            'numeroComprobante': nro_comp,
            'tipoComprobante': cabecera['tipo'],
            'entidad': cabecera['entidad'],
            'items': items,
            'totalCantidad': total_cantidad,
            'totalValor': total_valorizacion,
            'observaciones': cabecera['observaciones'],
        }
        
        movimientos.append(movimiento)
        mov_id += 1
    
    return movimientos

def generar_typescript(movimientos):
    """Generar archivo TypeScript con los movimientos"""
    
    # Ordenar por fecha y hora
    movimientos_sorted = sorted(movimientos, key=lambda x: (x['fecha'], x['hora']))
    
    # Estadísticas
    tipos_count = defaultdict(int)
    for mov in movimientos_sorted:
        tipos_count[mov['tipo']] += 1
    
    productos_unicos = set()
    for mov in movimientos_sorted:
        for item in mov['items']:
            productos_unicos.add(item['productoId'])
    
    # Generar contenido TypeScript
    ts_content = f'''// Movimientos de stock reales generados desde CSV
// Fecha: 03/05/2018
// Total movimientos: {len(movimientos_sorted)}
// Productos únicos: {len(productos_unicos)}
// VENTAS: {tipos_count['VENTA']}, COMPRAS: {tipos_count['COMPRA']}, ENTRADAS: {tipos_count['ENTRADA']}, SALIDAS: {tipos_count['SALIDA']}

export interface ItemMovimiento {{
  productoId: string;
  cantidad: number;
  unidad: string;
  precio: number;
  valorizacion: number;
}}

export interface MovimientoReal {{
  id: string;
  tipo: 'ENTRADA' | 'SALIDA' | 'VENTA' | 'COMPRA';
  fecha: string;
  hora: string;
  numeroComprobante: string;
  tipoComprobante: string;
  entidad: string;
  items: ItemMovimiento[];
  totalCantidad: number;
  totalValor: number;
  observaciones: string;
}}

export const movimientosReales: MovimientoReal[] = '''
    
    # Convertir a JSON con formato bonito
    json_str = json.dumps(movimientos_sorted, indent=2, ensure_ascii=False)
    
    ts_content += json_str + ';\n'
    
    # Escribir archivo
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    return len(movimientos_sorted), len(productos_unicos), tipos_count

def main():
    print("🔄 Parseando cmovsto03052018.csv...")
    movimientos_cabecera = parse_cmovsto()
    print(f"✓ {len(movimientos_cabecera)} cabeceras de movimientos cargadas")
    
    print("\n🔄 Parseando dmovsto03052018.csv...")
    movimientos = parse_dmovsto(movimientos_cabecera)
    print(f"✓ {len(movimientos)} movimientos detallados generados")
    
    print("\n🔄 Generando archivo TypeScript...")
    total_mov, productos_unicos, tipos = generar_typescript(movimientos)
    
    print(f"\n✅ Archivo generado: {OUTPUT_FILE}")
    print(f"\n📊 ESTADÍSTICAS:")
    print(f"   • Total movimientos: {total_mov}")
    print(f"   • Productos únicos: {productos_unicos}")
    print(f"   • VENTAS: {tipos['VENTA']}")
    print(f"   • COMPRAS: {tipos['COMPRA']}")
    print(f"   • ENTRADAS: {tipos['ENTRADA']}")
    print(f"   • SALIDAS: {tipos['SALIDA']}")
    
    # Calcular valorización total
    with open(OUTPUT_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
        lines = len(content.split('\n'))
        print(f"   • Líneas generadas: {lines:,}")

if __name__ == '__main__':
    main()
