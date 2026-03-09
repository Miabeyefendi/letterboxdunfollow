# 🎬 Letterboxd Unfollow - En Gelişmiş Letterboxd Toplu Takip Bırakma Aracı

<div align="center">
  
  [![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://github.com/Miabeyefendi/letterboxdunfollow)
  [![Letterboxd](https://img.shields.io/badge/Platform-Letterboxd-00e054?style=for-the-badge&logo=letterboxd&logoColor=white)](https://letterboxd.com)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

  <h3>
    <a href="README.md">English 🇬🇧</a> | Türkçe 🇹🇷 | <a href="README_ES.md">Español 🇪🇸</a>
  </h3>

</div>

---

> **Saatlerce elle takip bırakmaktan sıkıldınız mı?** Letterboxd Unfollow, Letterboxd takip listenizi doğrudan tarayıcı konsolunuzdan temizlemek için tasarlanmış güçlü, güvenli ve akıllı bir JavaScript aracıdır.

## ⚡ Neden Letterboxd Unfollow?

Çoğu otomasyon aracı şüphelidir ve sizden kimlik bilgilerinizi ister. **Letterboxd Unfollow farklıdır.**
Tamamen tarayıcınızda çalışır; şifre paylaşımı yok, şüpheli üçüncü taraf istekleri yok. Hesabınızı güvende tutmak için rastgele gecikmeler, güvenlik molaları ve akıllı tarama ile doğal gezinme davranışını taklit eder.

### 🚀 Temel Özellikler

*   **🛡️ Gelişmiş Anti-Ban Sistemi:** Hesabınızı güvende tutmak için ayarlanabilir min/max gecikmeler ve otomatik mola mekanizmaları.
*   **🎯 Akıllı Filtreleme:**
    *   **Geri Takip Etmeyenler** (Takip ettiğiniz ama sizi takip etmeyenler).
    *   **Karşılıklı Takip** (İkiniz de birbirinizi takip ediyorsunuz).
    *   **Hayranlar** (Sizi takip ediyor ama siz takip etmiyorsunuz).
    *   **Engellenen Kullanıcılar**.
*   **⚙️ Toplu İşlemler:** Seçilenleri Takipten Çık, Seçilenleri Engelle veya Seçilenleri Takip Et işlemlerini tek seferde yapın.
*   **📤 Listeyi Dışa Aktar (TXT):** Filtrelenmiş kullanıcı listenizi metin dosyası olarak kaydedin.
*   **🌍 Çoklu Dil Desteği:** İngilizce 🇬🇧, Türkçe 🇹🇷, İspanyolca 🇪🇸.
*   **📊 Canlı İstatistikler:** Takip Edilen, Takipçiler, Geri Takip Etmeyenler, Karşılıklı, Hayranlar, Engellenen, Seçilen, Takipten Çıkılan ve Engellenen sayıları anlık olarak görün.
*   **⚡ Kurulum Gerektirmez:** Doğrudan Google Chrome / Edge / Firefox konsolunda çalışır.
*   **🔍 Kullanıcı Adını Otomatik Algılar** — Bir profil sayfasındaysanız URL'den kullanıcı adınızı otomatik olarak algılar.

---

## 🛠️ Kurulum ve Kullanım

Şüpheli `.exe` dosyaları veya tarayıcı eklentisi indirmenize gerek yok. Sadece tarayıcı konsolunuzu kullanın.

1.  **Letterboxd'u Açın:** Bilgisayarınızdan [letterboxd.com](https://letterboxd.com/) adresine gidin ve giriş yapın.
2.  **Konsolu Açın:**
    *   **Chrome/Edge:** `F12` tuşuna veya `Ctrl + Shift + J` (Mac'te Cmd + Option + J) tuşlarına basın.
    *   **Firefox:** `Ctrl + Shift + K` tuşlarına basın.
3.  **Scripti Yapıştırın:** `letterboxd-unfollow-check.js` dosyasındaki tüm kodu kopyalayın ve konsola yapıştırın.
4.  **Çalıştırın:** `Enter` tuşuna basın.
5.  **Keyfini Çıkarın:** Letterboxd Unfollow kontrol paneli ekranınızda belirecektir.

---

## ⚙️ Yapılandırma (Kontrol Paneli)

Script çalıştıktan sonra her şeyi özelleştirebilirsiniz:

| Ayar | Açıklama | Önerilen |
| :--- | :--- | :--- |
| **Kullanıcı Adı** | Letterboxd kullanıcı adınız (mümkün olduğunda otomatik algılanır). | Profiliniz |
| **Min/Max Gecikme** | İnsan gibi görünmek için işlemler arası rastgele bekleme süresi. | 3sn - 10sn |
| **Otomatik Mola** | X işlem sonra otomatik mola verir. | Her 50 kullanıcıda bir |
| **Mola Süresi** | Otomatik mola tetiklendiğinde ne kadar süre bekleneceği. | 60sn |
| **Filtre Türü** | Listede kimlerin görüneceğini seçin (Örn: Sadece Geri Takip Etmeyenler). | Kullanıcı tercihi |
| **Sıralama** | Listeyi A→Z veya Z→A olarak sıralayın. | Kullanıcı tercihi |
| **Listeyi Dışa Aktar (TXT)** | Görüntülenen kullanıcı listesini `.txt` dosyası olarak indirin. | — |

---

## ⚠️ Sorumluluk Reddi

**Bu aracı sorumlu bir şekilde kullanın.**
Letterboxd Unfollow güvenlik özellikleri (gecikmeler, molalar) içerse de, Letterboxd'un takip/takipten çıkma/engelleme işlemlerinde hız sınırları olabilir.
*   Kısa sürede yüzlerce hesap üzerinde toplu işlem **yapmayın**.
*   Gecikme süresini 0 saniye **yapmayın**.
*   Bu araç yalnızca eğitim amaçlıdır. Hesabınızda oluşabilecek kısıtlamalardan veya engellemelerden geliştirici sorumlu değildir.

---

## 🌟 Destek

Bu araç Letterboxd hesabınızı temizlemenize yardımcı olduysa, lütfen repoya bir **Star ⭐** verin!

*Geliştirici: [@miabeyefendi](https://github.com/Miabeyefendi) — [Letterboxd Profili](https://letterboxd.com/miabeyefendi/)*
