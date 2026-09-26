ollama serve &
ollama run llama3.2:1b
pkg install -y termux-api flite
termux-change-repo
pkg install -y espeak
nano jarvis.sh
chmod +x jarvis.sh
ollama serve &
sleep 3
./jarvis.sh
fg
bg
nano index.html
python3 -m http.server 8080
pkg update && pkg upgrade -y
git config --global user.name "Darlin" && git config --global user.email "darlincaraballo3@gmail.com" && git config --global init.defaultBranch main
git config --list
cd ~
git init
git add index.html jarvis.sh
git commit -m "Respaldo: Jarvis con voz y pantalla web"
git remote add origin https://github.com/darlincar/Jarvis.git
git branch -M main
git push -u origin main
git remote set-url origin https://darlincar@github.com/darlincar/Jarvis.git
git push -u origin main
git push https://darlincar:ghp_5ZAcXkKvvvxDoPrYM7p4pHrvoaePq2Mrern@github.com/darlincar/Jarvis.git main
git push https://darlincar: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@github.com/darlincar/Jarvis.git main
git push https://darlincar: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@github.com/darlincar/Jarvis-App.git main
git push https://darlincaraballo3-beep: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@github.com/darlincaraballo3-beep/Jarvis-App.git main
cd Jarvis
nano index.html
nano estilos.css
nano app.js
git add .
git commit -m "Jarvis Inteligente"
nano index.html
nano estilos.css
ls
git add .
git commit -m "Jarvis Inteligente y Rápida"
git push -u origin main
git remote set-url origin https://darlincaraballo3-beep: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@github.com/darlincaraballo3-beep/Jarvis-App.git
git add -A
git commit --allow-empty -m "Jarvis completa"
git push -u origin main
nano .gitignore
.ollama/
.ssh/
.termux/
jarvis.sh
rm -rf .git
git init
git remote add origin https://darlincaraballo3-beep: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@github.com/darlincaraballo3-beep/Jarvis-App.git
cat > .gitignore << 'EOF'
.ollama/
.ssh/
.termux/
jarvis.sh
EOF

cat .gitignore
git add index.html estilos.css app.js .gitignore
git commit -m "Jarvis - Archivos limpios"
git push -u origin main --force
