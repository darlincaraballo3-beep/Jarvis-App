// ==================================================
// ⚡ JARVIS — VERSIÓN FINAL: RÁPIDA + INTELIGENTE 🧠
// ==================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('⚡ Jarvis Cargada y Lista');

    const entrada = document.getElementById('entrada');
    const btnEnviar = document.getElementById('enviar');
    const salida = document.getElementById('salida');
    const estado = document.getElementById('estado');

    // ==================================================
    // 📚 BASE DE CONOCIMIENTO — TODO LO QUE SABE
    // ==================================================
    const db = [
        {
            palabras: ['quién eres', 'qué eres', 'tu nombre'],
            respuesta: `Soy **Jarvis** 🤖 — Tu asistente personal, creada por ti, desde tu celular.

**Lo que hago:**
✅ Crear historias y guiones
✅ Generar videos con IA
✅ Ayudarte a programar
✅ Recordar todo lo que construimos

**Soy tuya 💎 — nadie más me controla.**`
        },
        {
            palabras: ['crea tu reel', 'generar video', 'hacer video'],
            respuesta: `🎬 **CreaTuReel** — Tu generador de videos

**Cómo funciona:**
1️⃣ Escribes tu historia
2️⃣ La divido en escenas de 5-10 seg
3️⃣ Genero narración, imágenes, subtítulos
4️⃣ Unimos todo → video listo ✅

**Para empezar:** Escribe "crear historia" y te ayudo a redactarla.`
        },
        {
            palabras: ['historia', 'escribir historia', 'guion'],
            respuesta: `📖 **Estructura de una historia impactante:**

**Título** → Corto y llamativo
**Personajes** → Descripción breve
**Inicio** → Situación
**Nudo** → El conflicto
**Desenlace** → Lo que cambia al final

**Ejemplo:**
"El último dibujo de papá" — un niño descubre algo que su padre le dejó sin decirlo.

¿Quieres que escribamos una ahora? Dime el tema 📝`
        },
        {
            palabras: ['github', 'subir', 'respaldo', 'guardar'],
            respuesta: `☁️ **GitHub — Tu respaldo seguro**

**Tus datos:**
• Usuario: \`darlincaraballo3-beep\`
• Repositorio: \`Jarvis-App\`
• Estado: ✅ Activo

**Para actualizar desde Termux:**
\`\`\`
git add .
git commit -m "Cambios"
git push
\`\`\`

Todo está guardado y seguro 🔒💎`
        },
        {
            palabras: ['termux', 'comandos', 'instalar'],
            respuesta: `📱 **Termux — Tu taller de creación**

**Comandos básicos:**
\`pkg update && pkg upgrade -y\` → Actualizar
\`ls\` → Ver archivos
\`cd nombre\` → Entrar carpeta
\`nano archivo.js\` → Editar
\`python -m http.server 8080\` → Ver página

Todo lo que creas aquí es tuyo 💎`
        },
        {
            palabras: ['ayuda', 'comandos', 'qué puedo hacer'],
            respuesta: `💡 **Todo lo que podemos hacer:**

• "CreaTuReel" → saber sobre videos
• "Historia" → escribir guiones
• "GitHub" → respaldar tu trabajo
• "Termux" → comandos del celular
• "Yo" → sobre tu proyecto

Pregúntame lo que quieras 🤖✨`
        },
        {
            palabras: ['yo', 'quien soy', 'mi proyecto'],
            respuesta: `🌟 **TÚ — El creador de todo**

Desde tu celular, sin computadora, has logrado:
✅ Crear tu propia IA asistente
✅ Aprender a subir código a GitHub
✅ Construir CreaTuReel para videos
✅ Todo con esfuerzo y constancia 💪

**Esto es solo el comienzo** 🚀💎`
        }
    ];

    // ==================================================
    // ⚡ MOTOR DE RESPUESTA — RÁPIDO E INTELIGENTE
    // ==================================================
    function buscarRespuesta(texto) {
        const t = texto.toLowerCase();
        for (const item of db) {
            if (item.palabras.some(palabra => t.includes(palabra))) {
                return item.respuesta;
            }
        }
        return `Entiendo 🤔 Dime más detalles sobre **"${texto}"** y te ayudo a desarrollarlo.

Puedes preguntarme sobre:
• CreaTuReel 🎬
• Crear historias 📖
• GitHub ☁️
• Termux 📱
• Tu proyecto 💎

¿Qué quieres saber?`;
    }

    // ==================================================
    // 📤 ENVIAR Y MOSTRAR MENSAJES
    // ==================================================
    function agregarMensaje(quien, texto) {
        const div = document.createElement('div');
        div.className = `mensaje ${quien}`;
        const nombre = quien === 'tú' ? 'Tú' : 'Jarvis 🤖';
        div.innerHTML = `<strong>${nombre}:</strong>${formatear(texto)}`;
        salida.appendChild(div);
        salida.scrollTop = salida.scrollHeight;
    }

    function formatear(texto) {
        return texto
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/`{3}/g, '<br>')
            .replace(/\n/g, '<br>');
    }

    async function enviar() {
        const texto = entrada.value.trim();
        if (!texto) return;

        agregarMensaje('tú', texto);
        entrada.value = '';
        estado.textContent = 'Pensando... ⚡';

        // Respuesta rápida
        await new Promise(r => setTimeout(r, 300));
        const respuesta = buscarRespuesta(texto);
        agregarMensaje('jarvis', respuesta);
        estado.textContent = 'Lista ✅';
    }

    btnEnviar.addEventListener('click', enviar);
    entrada.addEventListener('keypress', e => e.key === 'Enter' && enviar());
});

