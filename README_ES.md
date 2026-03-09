# 🎬 Letterboxd Unfollow - La Herramienta Definitiva para Dejar de Seguir en Letterboxd

<div align="center">
  
  [![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://github.com/Miabeyefendi/letterboxdunfollow)
  [![Letterboxd](https://img.shields.io/badge/Platform-Letterboxd-00e054?style=for-the-badge&logo=letterboxd&logoColor=white)](https://letterboxd.com)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

  <h3>
    <a href="README.md">English 🇬🇧</a> | <a href="README_TR.md">Türkçe 🇹🇷</a> | Español 🇪🇸
  </h3>

</div>

---

> **¿Cansado de perder horas dejando de seguir personas manualmente?** Letterboxd Unfollow es una herramienta JavaScript potente, segura e inteligente diseñada para limpiar tu lista de seguidos en Letterboxd directamente desde la consola de tu navegador.

## ⚡ ¿Por qué Letterboxd Unfollow?

La mayoría de las herramientas de automatización son sospechosas y requieren que entregues tus credenciales. **Letterboxd Unfollow es diferente.**
Funciona completamente en tu navegador: no se comparten contraseñas ni hay llamadas a terceros sospechosas. Imita el comportamiento de navegación natural con retrasos aleatorios, pausas de seguridad y escaneo inteligente para mantener tu cuenta segura.

### 🚀 Características Principales

*   **🛡️ Sistema Anti-Ban Avanzado:** Retrasos configurables (min/max) y mecanismos de pausa automática para mantener tu cuenta segura.
*   **🎯 Filtrado Inteligente:**
    *   Filtra por **No te siguen** (aquellos a quienes sigues pero que no te siguen de vuelta).
    *   Filtra por **Mutuos** (ambos se siguen mutuamente).
    *   Filtra por **Fans** (te siguen, pero tú no los sigues).
    *   Filtra por **Usuarios Bloqueados**.
*   **⚙️ Acciones en Masa:** Dejar de seguir, Bloquear o Seguir a los usuarios seleccionados de una sola vez.
*   **📤 Exportar Lista (TXT):** Guarda tu lista de usuarios filtrada como archivo de texto.
*   **🌍 Soporte Multi-Idioma:** Inglés 🇬🇧, Turco 🇹🇷, Español 🇪🇸.
*   **📊 Estadísticas en Tiempo Real:** Conteos en vivo de Siguiendo, Seguidores, No te siguen, Mutuos, Fans, Bloqueados, Seleccionados, Dejados de seguir y Bloqueados.
*   **⚡ Sin Instalación:** Funciona directamente en la consola de Google Chrome / Edge / Firefox.
*   **🔍 Detecta el Nombre de Usuario Automáticamente** desde la URL si ya estás en una página de perfil.

---

## 🛠️ Instalación y Uso

No necesitas descargar archivos `.exe` sospechosos ni extensiones de navegador. Solo usa la consola de tu navegador.

1.  **Abre Letterboxd:** Ve a [letterboxd.com](https://letterboxd.com/) en tu PC/Mac e inicia sesión.
2.  **Abre la Consola:**
    *   **Chrome/Edge:** Presiona `F12` o `Ctrl + Shift + J` (Cmd + Option + J en Mac).
    *   **Firefox:** Presiona `Ctrl + Shift + K`.
3.  **Pega el Script:** Copia todo el código de `letterboxd-unfollow-check.js` y pégalo en la consola.
4.  **Ejecuta:** Presiona `Enter`.
5.  **Disfruta:** El panel de control de Letterboxd Unfollow aparecerá en tu pantalla.

---

## ⚙️ Configuración (El Panel de Control)

Una vez que el script se está ejecutando, puedes personalizar todo:

| Ajuste | Descripción | Recomendado |
| :--- | :--- | :--- |
| **Usuario** | Tu nombre de usuario de Letterboxd (se detecta automáticamente cuando es posible). | Tu perfil |
| **Retraso Min/Max** | Tiempo de espera aleatorio entre acciones para parecer humano. | 3s - 10s |
| **Pausa Auto** | Toma un descanso después de X acciones. | Cada 50 usuarios |
| **Duración de Pausa** | Cuánto tiempo pausar cuando se activa la pausa automática. | 60s |
| **Tipo de Filtro** | Elige a quién listar (ej. Solo los que no te siguen). | Preferencia del usuario |
| **Orden** | Ordenar la lista de A→Z o Z→A. | Preferencia del usuario |
| **Exportar Lista (TXT)** | Descarga la lista de usuarios mostrada actualmente como archivo `.txt`. | — |

---

## ⚠️ Aviso Legal

**Usa esta herramienta con responsabilidad.**
Aunque Letterboxd Unfollow incluye características de seguridad (retrasos, pausas), Letterboxd puede tener límites de velocidad en las acciones de seguir/dejar de seguir/bloquear.
*   **No** realices acciones masivas sobre cientos de cuentas en poco tiempo.
*   **No** configures el retraso a 0 segundos.
*   Esta herramienta es solo para fines educativos. El creador no se hace responsable de ninguna restricción o bloqueo en la cuenta.

---

## 🌟 Soporte

Si esta herramienta te ayudó a limpiar tu Letterboxd, ¡por favor dale una **Estrella ⭐** al repositorio!

*Creado por [@miabeyefendi](https://github.com/Miabeyefendi) — [Perfil de Letterboxd](https://letterboxd.com/miabeyefendi/)*
