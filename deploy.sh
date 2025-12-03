#!/bin/bash

# Script de deployment para Google App Engine
# Proyecto: tupac-478123

set -e

echo "🚀 Iniciando deployment a Google App Engine..."
echo "📦 Proyecto: tupac-478123"
echo "🔢 Número: 725736977470"
echo ""

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Verificar que gcloud esté instalado
echo -e "${BLUE}Verificando Google Cloud SDK...${NC}"
if ! command -v gcloud &> /dev/null; then
    echo "❌ Error: Google Cloud SDK no está instalado"
    echo "Instala desde: https://cloud.google.com/sdk/docs/install"
    exit 1
fi
echo -e "${GREEN}✓ Google Cloud SDK instalado${NC}"
echo ""

# 2. Configurar proyecto
echo -e "${BLUE}Configurando proyecto...${NC}"
gcloud config set project tupac-478123
echo -e "${GREEN}✓ Proyecto configurado${NC}"
echo ""

# 3. Limpiar build anterior
echo -e "${BLUE}Limpiando builds anteriores...${NC}"
rm -rf dist
rm -rf node_modules/.vite
echo -e "${GREEN}✓ Cache limpiado${NC}"
echo ""

# 4. Instalar dependencias (si es necesario)
if [ ! -d "node_modules" ]; then
    echo -e "${BLUE}Instalando dependencias...${NC}"
    npm install
    echo -e "${GREEN}✓ Dependencias instaladas${NC}"
    echo ""
fi

# 5. Build de producción
echo -e "${BLUE}Construyendo aplicación para producción...${NC}"
npm run build
echo -e "${GREEN}✓ Build completado${NC}"
echo ""

# 6. Verificar que dist existe
if [ ! -d "dist" ]; then
    echo "❌ Error: Carpeta dist no se generó"
    exit 1
fi

# 7. Mostrar tamaño del build
echo -e "${BLUE}Tamaño del build:${NC}"
du -sh dist
echo ""

# 8. Deploy a App Engine
echo -e "${YELLOW}Desplegando a Google App Engine...${NC}"
gcloud app deploy --quiet --project=tupac-478123

echo ""
echo -e "${GREEN}✅ Deployment completado!${NC}"
echo ""
echo -e "${BLUE}Tu aplicación está disponible en:${NC}"
gcloud app browse --project=tupac-478123
echo ""
echo -e "${BLUE}Para ver los logs:${NC}"
echo "npm run logs"
echo ""
