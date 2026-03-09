# 🎬 Letterboxd Unfollow - Ultimate Letterboxd Mass Unfollow Tool

<div align="center">
  
  [![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://github.com/Miabeyefendi/letterboxdunfollow)
  [![Letterboxd](https://img.shields.io/badge/Platform-Letterboxd-00e054?style=for-the-badge&logo=letterboxd&logoColor=white)](https://letterboxd.com)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
  
  <h3>
    English 🇬🇧 | <a href="README_TR.md">Türkçe 🇹🇷</a> | <a href="README_ES.md">Español 🇪🇸</a>
  </h3>

</div>

---

> **Stop wasting hours manually unfollowing people.** Letterboxd Unfollow is a powerful, safe, and intelligent JavaScript tool designed to clean up your Letterboxd following list directly from your browser console.

## ⚡ Why Letterboxd Unfollow?

Most automation tools are sketchy and require you to hand over your credentials. **Letterboxd Unfollow is different.**
It runs entirely in your browser — no passwords shared, no suspicious third-party calls. It mimics natural browsing behaviour with randomized delays, safety pauses, and intelligent scanning to keep your account safe.

### 🚀 Key Features

*   **🛡️ Advanced Anti-Ban System:** Configurable min/max delays and auto-pause mechanisms to keep your account safe.
*   **🎯 Smart Filtering:**
    *   Filter by **Not Following Back** (those you follow but who don't follow you).
    *   Filter by **Mutuals** (you both follow each other).
    *   Filter by **Fans** (they follow you, but you don't follow them back).
    *   Filter by **Blocked Users**.
*   **⚙️ Bulk Actions:** Unfollow Selected, Block Selected, or Follow Selected users in one go.
*   **📤 Export List (TXT):** Save your filtered user list as a text file.
*   **🌍 Multi-Language Support:** English 🇬🇧, Turkish 🇹🇷, Spanish 🇪🇸.
*   **📊 Real-Time Statistics:** Live counts for Following, Followers, Not Following Back, Mutuals, Fans, Blocked, Selected, Unfollowed, and Blocked actions.
*   **⚡ No Installation:** Works directly in Google Chrome / Edge / Firefox console.
*   **🔍 Auto-Detects Username** from the URL if you're already on a profile page.

---

## 🛠️ Installation & Usage

You don't need to download any sketchy `.exe` files or browser extensions. Just use your browser console.

1.  **Open Letterboxd:** Go to [letterboxd.com](https://letterboxd.com/) on your PC/Mac and log in.
2.  **Open Console:**
    *   **Chrome/Edge:** Press `F12` or `Ctrl + Shift + J` (Cmd + Option + J on Mac).
    *   **Firefox:** Press `Ctrl + Shift + K`.
3.  **Paste the Script:** Copy the entire code from `letterboxd-unfollow-check.js` and paste it into the console.
4.  **Run:** Press `Enter`.
5.  **Enjoy:** The Letterboxd Unfollow control panel will appear on your screen.

---

## ⚙️ Configuration (The Control Panel)

Once the script is running, you can customise everything:

| Setting | Description | Recommended |
| :--- | :--- | :--- |
| **Username** | Your Letterboxd username (auto-detected when possible). | Your profile |
| **Min/Max Delay** | Random wait time between actions to look human. | 3s - 10s |
| **Auto Pause** | Takes a break after X actions. | Every 50 users |
| **Pause Duration** | How long to pause when the auto-pause triggers. | 60s |
| **Filter Type** | Choose who to list (e.g., Not Following Back only). | User preference |
| **Sort Direction** | Sort the list A→Z or Z→A. | User preference |
| **Export List (TXT)** | Download the currently displayed user list as a `.txt` file. | — |

---

## ⚠️ Disclaimer

**Use this tool responsibly.**
While Letterboxd Unfollow includes safety features (delays, pauses), Letterboxd may have rate limits on follow/unfollow/block actions.
*   **Do not** perform bulk actions on hundreds of accounts in a short period.
*   **Do not** set the delay to 0 seconds.
*   This tool is for educational purposes only. The creator is not responsible for any account restrictions or bans.

---

## 🌟 Support

If this tool helped you clean up your Letterboxd, please give it a **Star ⭐**!

*Created by [@miabeyefendi](https://github.com/Miabeyefendi) — [Letterboxd Profile](https://letterboxd.com/miabeyefendi/)*
