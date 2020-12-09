echo "[APPLICATION] Installing database on Docker instance"
docker-compose up --build -d
echo "[APPLICATION] Instaling backend libs"
cd ../backend
npm --version
npm install
echo "[APPLICATION] Installing mobile libs"
cd ../app/mobile
npm install
echo "[APPLICATION] Backend -> To run backend npm run dev on /backend path"
echo "[APPLICATION] App -> To run on android execute npm run android on /app/mobile path"
