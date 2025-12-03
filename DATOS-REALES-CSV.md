# DATOS REALES DE LOS CSV

Fecha: 03/05/2018

## Cliente 100001
**Código del CSV:** CLI100001

**Facturas del CSV:** 348 (NO 47)

**Total acumulado:** $792,438.01

### Primeras 10 facturas que DEBERÍAN mostrarse:

| Factura | Fecha | Total | Productos |
|---------|-------|-------|-----------|
| 130045360 | 03/05/18 | $3,263.41 | 6 |
| 130045361 | 03/05/18 | $912.81 | 4 |
| 120034934 | 03/05/18 | $1,715.37 | 8 |
| 120034935 | 03/05/18 | $749.15 | 8 |
| 130045362 | 03/05/18 | $3,933.47 | 15 |
| 120034936 | 03/05/18 | $1,310.37 | 10 |
| 130045363 | 03/05/18 | $1,825.15 | 12 |
| 120034937 | 03/05/18 | $751.92 | 2 |
| 120034938 | 03/05/18 | $1,218.27 | 4 |
| 130045365 | 03/05/18 | $2,816.37 | 16 |

---

## Cliente 100103
**Código del CSV:** CLI100103

**Facturas del CSV:** 1 (NO 0)

**Total acumulado:** $42,548.25

### Facturas:

| Factura | Fecha | Total | Productos |
|---------|-------|-------|-----------|
| 160001859 | 03/05/18 | $42,548.25 | 5 |

---

## RESUMEN DE TODOS LOS CLIENTES EN EL CSV

| Cliente | Código | Facturas | Total Acumulado |
|---------|--------|----------|-----------------|
| 100001 | CLI100001 | 348 | $792,438.01 |
| 100103 | CLI100103 | 1 | $42,548.25 |
| 100108 | CLI100108 | 3 | $48,266.23 |
| 100118 | CLI100118 | 1 | $3,785.61 |
| 100120 | CLI100120 | 1 | $2,255.02 |
| 100124 | CLI100124 | 1 | $406.03 |
| 100126 | CLI100126 | 1 | $2,302.89 |
| 100138 | CLI100138 | 2 | $14,754.02 |
| 100152 | CLI100152 | 1 | $1,065.92 |
| 100156 | CLI100156 | 9 | $53,867.34 |
| 100177 | CLI100177 | 1 | $2,236.33 |
| 100195 | CLI100195 | 1 | $4,181.56 |

---

## COLUMNAS IMPORTANTES EN LOS CSV

### factu03052018.csv
- **Columna 4:** fac_nro (Número de factura)
- **Columna 5:** fac_fec (Fecha)
- **Columna 6:** fac_clie (Cliente) ⚠️ **Esta es la clave para filtrar**
- **Columna 44:** fac_itot (Total del comprobante)
- **Columna 52:** fac_it (Cantidad de items - pero cuenta mal)

### movi_fac03052018.csv
- **Columna 1:** mof_suc (Sucursal)
- **Columna 2:** mof_tip (Tipo)
- **Columna 3:** mof_stip (Subtipo)
- **Columna 4:** mof_fac (Número de factura) ⚠️ **Relacionar con factu columna 4**
- **Columna 5:** mof_art (Código de artículo)
- **Columna 6:** mof_ite (Número de item)

### Para contar productos correctamente:
Contar las líneas en `movi_fac03052018.csv` donde columna 4 = número de factura

---

## COMANDOS PARA VERIFICAR

### Cliente 100001:
```bash
awk -F'\t' '$6==100001' /Users/bener/GitHub/tupacsupermayorista/Info/factu03052018.csv | wc -l
```
**Resultado:** 348 facturas

### Cliente 100103:
```bash
awk -F'\t' '$6==100103' /Users/bener/GitHub/tupacsupermayorista/Info/factu03052018.csv
```
**Resultado:** 1 factura (160001859, $42,548.25)

### Productos por factura 130045360:
```bash
awk -F'\t' '$4==130045360' /Users/bener/GitHub/tupacsupermayorista/Info/movi_fac03052018.csv | wc -l
```
**Resultado:** 6 productos
