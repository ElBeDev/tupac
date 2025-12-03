#!/usr/bin/env python3
"""
Script para generar lotes-reales.ts desde el CSV dmovsto con fechas de vencimiento
"""

import csv
from datetime import datetime
from collections import defaultdict

def parse_fecha(fecha_str):
    """Convertir fecha del formato DD/MM/YY a DD/MM/YYYY"""
    try:
        if len(fecha_str) == 8:  # DD/MM/YY
            fecha = datetime.strptime(fecha_str, '%d/%m/%y')
            return fecha.strptime('%d/%m/%Y')
        return fecha_str
    except:
        return fecha_str

def calcular_estado_lote(fecha_venc_str, fecha_actual='03/05/2018'):
    """Calcular estado del lote según fecha de vencimiento"""
    try:
        fecha_actual_dt = datetime.strptime(fecha_actual, '%d/%m/%Y')
        
        if len(fecha_venc_str) == 8:
            fecha_venc_dt = datetime.strptime(fecha_venc_str, '%d/%m/%y')
        else:
            fecha_venc_dt = datetime.strptime(fecha_venc_str, '%d/%m/%Y')
        
        dias_diff = (fecha_venc_dt - fecha_actual_dt).days
        
        if dias_diff < 0:
            return 'VENCIDO'
        elif dias_diff <= 30:
            return 'PROXIMO_VENCER'
        else:
            return 'ACTIVO'
    except:
        return 'ACTIVO'

def parse_dmovsto():
    """Parsear CSV dmovsto y extraer lotes con fechas de vencimiento"""
    lotes = []
    lote_id = 1
    
    with open('Info/dmovsto03052018.csv', 'r', encoding='latin1') as f:
        reader = csv.reader(f, delimiter='\t')
        
        for row in reader:
            if len(row) >= 25:
                fecha_vencimiento = row[24].strip()
                
                # Solo procesar si tiene fecha de vencimiento
                if fecha_vencimiento and fecha_vencimiento != '':
                    tipo_mov = row[1].strip()  # FC, IM
                    comprobante = row[3].strip()
                    producto_id = row[5].strip()
                    cantidad_str = row[7].strip()
                    
                    try:
                        cantidad = abs(int(float(cantidad_str)))
                    except:
                        cantidad = 0
                    
                    # Generar número de lote basado en producto + comprobante
                    numero_lote = f"LOTE-{producto_id}-{comprobante[-6:]}"
                    
                    # Fecha de ingreso es 03/05/2018
                    fecha_ingreso = "03/05/2018"
                    
                    # Calcular estado
                    estado = calcular_estado_lote(fecha_vencimiento)
                    
                    lote = {
                        'id': f'LOTE-REAL-{lote_id}',
                        'productoId': producto_id,
                        'numeroLote': numero_lote,
                        'fechaIngreso': fecha_ingreso,
                        'fechaVencimiento': fecha_vencimiento,
                        'cantidadInicial': cantidad,
                        'cantidadActual': cantidad,
                        'estado': estado,
                        'tipoMovimiento': 'COMPRA' if tipo_mov == 'IM' else 'VENTA',
                        'comprobante': comprobante
                    }
                    
                    lotes.append(lote)
                    lote_id += 1
    
    return lotes

def generar_typescript(lotes):
    """Generar archivo TypeScript con los lotes"""
    
    # Estadísticas
    activos = len([l for l in lotes if l['estado'] == 'ACTIVO'])
    proximos = len([l for l in lotes if l['estado'] == 'PROXIMO_VENCER'])
    vencidos = len([l for l in lotes if l['estado'] == 'VENCIDO'])
    productos_unicos = len(set(l['productoId'] for l in lotes))
    
    print(f"\n✓ {len(lotes)} lotes generados")
    print(f"  • {activos} ACTIVOS")
    print(f"  • {proximos} PRÓXIMOS A VENCER")
    print(f"  • {vencidos} VENCIDOS")
    print(f"  • {productos_unicos} productos únicos con vencimiento")
    
    # Generar TypeScript
    ts_content = f"""// ARCHIVO GENERADO AUTOMÁTICAMENTE - NO EDITAR
// Fecha de generación: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
// Fuente: Info/dmovsto03052018.csv (columna 24 = fecha_vencimiento)
// 
// Estadísticas:
// - Total lotes: {len(lotes)}
// - Lotes ACTIVOS: {activos}
// - Lotes PRÓXIMOS A VENCER: {proximos}
// - Lotes VENCIDOS: {vencidos}
// - Productos únicos: {productos_unicos}

import {{ Lote }} from '../types';

export const lotesReales: Lote[] = [
"""
    
    for lote in lotes:
        ts_content += f"""  {{
    id: '{lote['id']}',
    productoId: '{lote['productoId']}',
    productoNombre: 'Producto {lote['productoId']}',  // Nombre por defecto
    numeroLote: '{lote['numeroLote']}',
    fechaIngreso: '{lote['fechaIngreso']}',
    fechaVencimiento: '{lote['fechaVencimiento']}',
    cantidadInicial: {lote['cantidadInicial']},
    cantidadActual: {lote['cantidadActual']},
    estado: '{lote['estado']}',
  }},
"""
    
    ts_content += "];\n"
    
    # Escribir archivo
    with open('src/data/lotes-reales.ts', 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"\n✓ Archivo src/data/lotes-reales.ts generado correctamente")
    print(f"  Total líneas: {ts_content.count(chr(10))}")

if __name__ == '__main__':
    print("=" * 80)
    print("GENERANDO LOTES DESDE CSV DMOVSTO")
    print("=" * 80)
    
    lotes = parse_dmovsto()
    generar_typescript(lotes)
    
    print("\n" + "=" * 80)
    print("✓ PROCESO COMPLETADO")
    print("=" * 80)
