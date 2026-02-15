#!/bin/bash
# Build static website and prepare for Google Drive upload

GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo "Starting static website build..."

rm -rf out
rm -f static-site.zip

npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}Build completed successfully${NC}"

    node scripts/rewrite-asset-paths.js

    cd out && zip -r ../static-site.zip . && cd ..

    echo -e "${GREEN}Created static-site.zip${NC}"
    echo ""
    echo "Your static website is ready!"
    echo "Location: ./out folder"
    echo "Zip file: ./static-site.zip"
    echo ""
    echo "Next steps:"
    echo "   1. Upload the contents of 'out' folder OR 'static-site.zip' to Google Drive"
    echo "   2. Share the folder with 'Anyone with the link'"
    echo "   3. Access via: https://drive.google.com/drive/folders/YOUR_FOLDER_ID"
else
    echo -e "${RED}Build failed${NC}"
    exit 1
fi
