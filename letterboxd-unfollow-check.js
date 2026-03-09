/**
 * Letterboxd Unfollow - Mutual Check & Mass Unfollow/Block
 * Creator: https://github.com/Miabeyefendi/letterboxdunfollow
 * Version: 2.0.0 (Multi-language, Filters, Unfollow, Block, Follow, Anti-Ban)
 */
(function () {
    if (!['letterboxd.com','www.letterboxd.com'].includes(window.location.hostname)) {
        alert('This tool only works on Letterboxd!\nPlease go to https://letterboxd.com');
        window.location.href = 'https://letterboxd.com/';
        return;
    }

    const dict = {
        en: {
            appTitle:"Letterboxd Unfollow",appDesc:"Unfollow & block those who don't follow you back!",
            scanBtn:"Start Scan",rescanBtn:"Rescan",scanning:"Scanning...",
            statsGroup:"Statistics",statFollowing:"Following",statFollowers:"Followers",
            statNonFollowers:"Not Following Back",statMutuals:"Mutuals",
            statFansOnly:"Fans (Only Follow You)",statBlocked:"Blocked",statSelected:"Selected",
            statSuccessUnfollow:"Unfollowed",statSuccessBlock:"Blocked",
            filtersGroup:"Filters & Sorting",filterLabel:"Filter Type",sortLabel:"Sort Direction",
            fAll:"All Following",fNonFollowers:"Not Following Back",fMutuals:"Mutuals",
            fFansOnly:"Fans (Only Follow You)",fBlocked:"Blocked Users",sAZ:"A → Z",sZA:"Z → A",
            userList:"User List",selectAll:"Select All",
            emptyList:"Start scanning to see the list here.",
            devLink:"Creator @miabeyefendi",githubLink:"Github: Letterboxd Unfollow",
            usernamePrompt:"Enter Letterboxd username:",
            errorFetch:"Error fetching data. Check your connection or try again.",
            scanComplete:"Scan complete!",exportBtn:"Export List (TXT)",
            settingsGroup:"Settings",usernameLabel:"Username",
            antiBanGroup:"Anti-Ban Settings",minDelay:"Min Delay (s)",maxDelay:"Max Delay (s)",
            pauseCount:"Auto Pause (Actions)",pauseDuration:"Pause Duration (s)",
            unfollowBtn:"Unfollow Selected",blockBtn:"Block Selected",followBtn:"Follow Selected",
            processing:"Processing...",pauseStatus:"Paused...",
            confirmUnfollow:"Are you sure you want to UNFOLLOW the selected users?\n\nDo not close the page during the process.",
            confirmBlock:"Are you sure you want to BLOCK the selected users?\n\nThis action is harder to reverse. Do not close the page.",
            confirmFollow:"Are you sure you want to FOLLOW the selected users?\n\nDo not close the page during the process.",
            processDone:"Process completed!\nSuccessful: ",
            actionsGroup:"Actions"
        },
        tr: {
            appTitle:"Letterboxd Unfollow",appDesc:"Seni takip etmeyenleri takipten çık ve engelle!",
            scanBtn:"Taramayı Başlat",rescanBtn:"Yeniden Tara",scanning:"Taranıyor...",
            statsGroup:"İstatistikler",statFollowing:"Takip Edilen",statFollowers:"Takipçiler",
            statNonFollowers:"Geri Takip Etmeyenler",statMutuals:"Karşılıklı",
            statFansOnly:"Hayranlar (Sadece Seni Takip Eden)",statBlocked:"Engellenen",statSelected:"Seçilen",
            statSuccessUnfollow:"Takipten Çıkılan",statSuccessBlock:"Engellenen",
            filtersGroup:"Filtreleme & Sıralama",filterLabel:"Filtre Türü",sortLabel:"Sıralama",
            fAll:"Tüm Takip Edilenler",fNonFollowers:"Geri Takip Etmeyenler",fMutuals:"Karşılıklı Takip",
            fFansOnly:"Hayranlar (Sadece Seni Takip Eden)",fBlocked:"Engellenen Kullanıcılar",sAZ:"A → Z",sZA:"Z → A",
            userList:"Kullanıcı Listesi",selectAll:"Tümünü Seç",
            emptyList:"Taramayı başlattığınızda kullanıcılar burada listelenecektir.",
            devLink:"Yaratıcı @miabeyefendi",githubLink:"Github: Letterboxd Unfollow",
            usernamePrompt:"Letterboxd kullanıcı adını girin:",
            errorFetch:"Veri çekilirken hata oluştu. Bağlantınızı kontrol edin.",
            scanComplete:"Tarama tamamlandı!",exportBtn:"Listeyi Dışa Aktar (TXT)",
            settingsGroup:"Ayarlar",usernameLabel:"Kullanıcı Adı",
            antiBanGroup:"Anti-Ban Ayarları",minDelay:"Min Bekleme (sn)",maxDelay:"Maks Bekleme (sn)",
            pauseCount:"Otomatik Mola (İşlem)",pauseDuration:"Mola Süresi (sn)",
            unfollowBtn:"Seçilenleri Takipten Çık",blockBtn:"Seçilenleri Engelle",followBtn:"Seçilenleri Takip Et",
            processing:"Devam Ediyor...",pauseStatus:"Mola Verildi...",
            confirmUnfollow:"Seçilen kişileri takipten çıkmak istediğinize emin misiniz?\n\nİşlem sırasında sayfayı kapatmayın.",
            confirmBlock:"Seçilen kişileri ENGELLEMEK istediğinize emin misiniz?\n\nBu işlem geri alması daha zordur. Sayfayı kapatmayın.",
            confirmFollow:"Seçilen kişileri TAKİP ETMEK istediğinize emin misiniz?\n\nİşlem sırasında sayfayı kapatmayın.",
            processDone:"İşlem tamamlandı!\nBaşarılı: ",
            actionsGroup:"İşlemler"
        },
        es: {
            appTitle:"Letterboxd Unfollow",appDesc:"¡Deja de seguir y bloquea a los que no te siguen!",
            scanBtn:"Iniciar Escaneo",rescanBtn:"Re-escanear",scanning:"Escaneando...",
            statsGroup:"Estadísticas",statFollowing:"Siguiendo",statFollowers:"Seguidores",
            statNonFollowers:"No te siguen",statMutuals:"Mutuos",
            statFansOnly:"Fans (Solo te siguen)",statBlocked:"Bloqueados",statSelected:"Seleccionados",
            statSuccessUnfollow:"Dejados de seguir",statSuccessBlock:"Bloqueados",
            filtersGroup:"Filtros y Orden",filterLabel:"Tipo de Filtro",sortLabel:"Orden",
            fAll:"Todos",fNonFollowers:"No te siguen",fMutuals:"Mutuos",
            fFansOnly:"Fans",fBlocked:"Bloqueados",sAZ:"A → Z",sZA:"Z → A",
            userList:"Lista de Usuarios",selectAll:"Seleccionar Todo",
            emptyList:"Empieza a escanear para ver la lista aquí.",
            devLink:"Creador @miabeyefendi",githubLink:"Github: Letterboxd Unfollow",
            usernamePrompt:"Introduce el nombre de usuario:",
            errorFetch:"Error al obtener datos.",scanComplete:"¡Escaneo completado!",
            exportBtn:"Exportar Lista (TXT)",settingsGroup:"Configuración",usernameLabel:"Usuario",
            antiBanGroup:"Ajustes Anti-Ban",minDelay:"Retraso Min (s)",maxDelay:"Retraso Max (s)",
            pauseCount:"Pausa Auto (Acciones)",pauseDuration:"Duración de Pausa (s)",
            unfollowBtn:"Dejar de seguir",blockBtn:"Bloquear Seleccionados",followBtn:"Seguir Seleccionados",
            processing:"Procesando...",pauseStatus:"Pausado...",
            confirmUnfollow:"¿Dejar de seguir a los seleccionados?\n\nNo cierres la página.",
            confirmBlock:"¿BLOQUEAR a los seleccionados?\n\nNo cierres la página.",
            confirmFollow:"¿SEGUIR a los seleccionados?\n\nNo cierres la página.",
            processDone:"¡Completado!\nÉxitos: ",
            actionsGroup:"Acciones"
        }
    };

    let lang = 'en';
    const t = k => dict[lang][k] || k;

    function detectUsername() {
        const m = window.location.pathname.match(/^\/([a-zA-Z0-9_]+)\/?/);
        if (m && !['films','lists','members','journal','about','pro','activity','search','settings'].includes(m[1])) return m[1];
        return null;
    }

    let currentUsername = detectUsername() || '';
    let followingList=[], followersList=[], blockedList=[], nonFollowers=[], mutuals=[], fansOnly=[], displayedUsers=[];
    let isScanning=false, isProcessing=false, stopRequested=false, selectedUsernames=new Set();
    let successUnfollowCount=0, successBlockCount=0;
    const els = {};

    // Capture CSRF token BEFORE clearing the page (it lives in the original page's JS)
    const savedCSRF = window.supermodelCSRF || '';
    const savedCSRFInput = document.querySelector('input[name="__csrf"]');
    const savedCSRFValue = savedCSRFInput ? savedCSRFInput.value : savedCSRF;

    document.body.innerHTML = '';
    document.title = 'Letterboxd Unfollow';

    const style = document.createElement('style');
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', system-ui, sans-serif; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #18181b; }
        ::-webkit-scrollbar-thumb { background: #3f3f46; border-radius: 4px; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        @keyframes slideIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        .scanning-pulse { animation: pulse 2s ease-in-out infinite; }
        .user-card { animation: slideIn 0.3s ease-out forwards; }
    `;
    document.head.appendChild(style);

    const app = document.createElement('div');
    app.style.cssText = 'min-height:100vh;background:#09090b;color:#fafafa;font-family:"Inter",system-ui,sans-serif;display:flex;flex-direction:column;';
    document.body.appendChild(app);

    // === HEADER ===
    const header = document.createElement('header');
    header.style.cssText = 'background:linear-gradient(180deg,#18181b,#09090b);border-bottom:1px solid #27272a;padding:16px 32px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;';
    app.appendChild(header);

    const logoContainer = document.createElement('div');
    logoContainer.style.cssText = 'display:flex;align-items:center;gap:16px;';
    header.appendChild(logoContainer);

    const logoIcon = document.createElement('div');
    logoIcon.style.cssText = 'display:flex;gap:3px;';
    logoIcon.innerHTML = '<div style="width:12px;height:12px;border-radius:50%;background:#00e054;opacity:0.9;"></div><div style="width:12px;height:12px;border-radius:50%;background:#40bcf4;opacity:0.9;"></div><div style="width:12px;height:12px;border-radius:50%;background:#ff8000;opacity:0.9;"></div>';
    logoContainer.appendChild(logoIcon);

    const logoText = document.createElement('div');
    logoContainer.appendChild(logoText);

    els.appTitle = document.createElement('h1');
    els.appTitle.style.cssText = 'margin:0;font-size:22px;font-weight:800;background:linear-gradient(135deg,#00e054,#40bcf4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;';
    logoText.appendChild(els.appTitle);

    els.appDesc = document.createElement('span');
    els.appDesc.style.cssText = 'font-size:13px;color:#71717a;font-weight:500;display:block;margin-top:2px;';
    logoText.appendChild(els.appDesc);

    const headerRight = document.createElement('div');
    headerRight.style.cssText = 'display:flex;align-items:center;gap:12px;flex-wrap:wrap;';
    header.appendChild(headerRight);

    // Language selector
    const langContainer = document.createElement('div');
    langContainer.style.cssText = 'display:flex;gap:6px;font-size:20px;background:#18181b;border:1px solid #27272a;border-radius:8px;padding:4px 8px;';
    [{id:'en',flag:'🇬🇧'},{id:'tr',flag:'🇹🇷'},{id:'es',flag:'🇪🇸'}].forEach(l => {
        const fs = document.createElement('span');
        fs.textContent = l.flag;
        fs.style.cssText = 'cursor:pointer;opacity:0.5;transition:all 0.2s;padding:2px 4px;border-radius:4px;';
        fs.addEventListener('mouseenter', () => { fs.style.opacity='1'; fs.style.transform='scale(1.15)'; });
        fs.addEventListener('mouseleave', () => { if(lang!==l.id){fs.style.opacity='0.5';fs.style.transform='scale(1)';} });
        fs.addEventListener('click', () => {
            lang=l.id;
            Array.from(langContainer.children).forEach(c=>{c.style.opacity='0.5';c.style.transform='scale(1)';});
            fs.style.opacity='1'; fs.style.transform='scale(1.15)';
            updateTranslations();
        });
        if(l.id===lang){fs.style.opacity='1';fs.style.transform='scale(1.15)';}
        langContainer.appendChild(fs);
    });
    headerRight.appendChild(langContainer);

    els.devLink = document.createElement('a');
    els.devLink.href = 'https://letterboxd.com/miabeyefendi/';
    els.devLink.target = '_blank';
    els.devLink.style.cssText = 'color:#00e054;text-decoration:none;font-size:13px;font-weight:600;padding:8px 14px;background:rgba(0,224,84,0.08);border:1px solid rgba(0,224,84,0.15);border-radius:8px;transition:all 0.2s;';
    headerRight.appendChild(els.devLink);

    els.githubLink = document.createElement('a');
    els.githubLink.href = 'https://github.com/Miabeyefendi/letterboxdunfollow';
    els.githubLink.target = '_blank';
    els.githubLink.style.cssText = 'color:#e4e4e7;text-decoration:none;font-size:13px;font-weight:600;padding:8px 14px;background:#27272a;border:1px solid #3f3f46;border-radius:8px;transition:all 0.2s;display:flex;align-items:center;gap:8px;';
    els.githubLink.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> <span class="gh-text"></span>';
    els.githubText = els.githubLink.querySelector('.gh-text');
    headerRight.appendChild(els.githubLink);

    // === MAIN ===
    const main = document.createElement('main');
    main.style.cssText = 'flex:1;display:flex;padding:24px;gap:24px;max-width:1440px;margin:0 auto;width:100%;box-sizing:border-box;flex-wrap:wrap;';
    app.appendChild(main);

    // === SIDEBAR ===
    const sidebar = document.createElement('aside');
    sidebar.style.cssText = 'width:320px;display:flex;flex-direction:column;gap:16px;flex-shrink:0;';
    main.appendChild(sidebar);

    function mkPanel() {
        const p = document.createElement('div');
        p.style.cssText = 'background:linear-gradient(135deg,#18181b,#1c1c20);border:1px solid #27272a;border-radius:12px;padding:20px;';
        return p;
    }
    function mkH2(text) {
        const h = document.createElement('h2');
        h.style.cssText = 'margin:0 0 14px 0;font-size:15px;font-weight:700;color:#e4e4e7;letter-spacing:0.3px;';
        h.textContent = text;
        return h;
    }
    function mkLabel() {
        const l = document.createElement('label');
        l.style.cssText = 'display:block;font-size:12px;color:#a1a1aa;margin-bottom:6px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;';
        return l;
    }
    function mkInput(defaultVal) {
        const i = document.createElement('input');
        i.type = 'number'; i.value = defaultVal;
        i.style.cssText = 'width:100%;padding:10px 14px;background:#09090b;border:1px solid #3f3f46;border-radius:8px;color:#fff;font-size:14px;box-sizing:border-box;outline:none;transition:border-color 0.2s;';
        i.addEventListener('focus',()=>i.style.borderColor='#00e054');
        i.addEventListener('blur',()=>i.style.borderColor='#3f3f46');
        return i;
    }
    function mkSelect(values) {
        const s = document.createElement('select');
        s.style.cssText = 'width:100%;padding:10px 14px;background:#09090b;border:1px solid #3f3f46;border-radius:8px;color:#fff;font-size:14px;outline:none;cursor:pointer;transition:border-color 0.2s;';
        values.forEach(v => { const o=document.createElement('option'); o.value=v; s.appendChild(o); });
        return s;
    }
    function mkBtn(bg, color, borderColor) {
        const b = document.createElement('button');
        b.style.cssText = `width:100%;padding:12px;background:${bg};color:${color};border:${borderColor?'1px solid '+borderColor:'none'};border-radius:8px;font-weight:700;font-size:14px;cursor:pointer;transition:all 0.2s;letter-spacing:0.3px;margin-top:8px;`;
        b.disabled = true; b.style.opacity = '0.5'; b.style.cursor = 'not-allowed';
        return b;
    }

    // --- Settings Panel ---
    const settingsPanel = mkPanel();
    sidebar.appendChild(settingsPanel);
    els.settingsGroup = mkH2('');
    settingsPanel.appendChild(els.settingsGroup);

    const uw = document.createElement('div'); uw.style.marginBottom = '14px';
    els.usernameLabel = mkLabel(); uw.appendChild(els.usernameLabel);
    const usernameInput = document.createElement('input');
    usernameInput.type='text'; usernameInput.value=currentUsername; usernameInput.placeholder='e.g. miabeyefendi';
    usernameInput.style.cssText='width:100%;padding:10px 14px;background:#09090b;border:1px solid #3f3f46;border-radius:8px;color:#fff;font-size:14px;box-sizing:border-box;outline:none;font-family:"Inter",monospace;transition:border-color 0.2s;';
    usernameInput.addEventListener('focus',()=>usernameInput.style.borderColor='#00e054');
    usernameInput.addEventListener('blur',()=>usernameInput.style.borderColor='#3f3f46');
    uw.appendChild(usernameInput);
    settingsPanel.appendChild(uw);

    els.scanBtn = document.createElement('button');
    els.scanBtn.style.cssText='width:100%;padding:12px;background:linear-gradient(135deg,#00e054,#00c94b);color:#000;border:none;border-radius:8px;font-weight:700;font-size:14px;cursor:pointer;transition:all 0.2s;';
    settingsPanel.appendChild(els.scanBtn);

    // --- Anti-Ban Panel ---
    const antiBanPanel = mkPanel();
    sidebar.appendChild(antiBanPanel);
    els.antiBanGroup = mkH2('');
    antiBanPanel.appendChild(els.antiBanGroup);

    function addSettingRow(panel, labelEl, input) {
        const w = document.createElement('div'); w.style.marginBottom='12px';
        w.appendChild(labelEl); w.appendChild(input); panel.appendChild(w);
    }
    els.minDelayL = mkLabel(); const minDelayInput = mkInput(3);
    els.maxDelayL = mkLabel(); const maxDelayInput = mkInput(8);
    els.pauseCountL = mkLabel(); const pauseCountInput = mkInput(50);
    els.pauseDurationL = mkLabel(); const pauseDurationInput = mkInput(300);
    addSettingRow(antiBanPanel, els.minDelayL, minDelayInput);
    addSettingRow(antiBanPanel, els.maxDelayL, maxDelayInput);
    addSettingRow(antiBanPanel, els.pauseCountL, pauseCountInput);
    addSettingRow(antiBanPanel, els.pauseDurationL, pauseDurationInput);

    // --- Filters Panel ---
    const filtersPanel = mkPanel();
    sidebar.appendChild(filtersPanel);
    els.filtersGroup = mkH2('');
    filtersPanel.appendChild(els.filtersGroup);

    const fw = document.createElement('div'); fw.style.marginBottom='12px';
    els.filterLabel = mkLabel(); fw.appendChild(els.filterLabel);
    const filterSelect = mkSelect(['ALL','NON_FOLLOWERS','MUTUALS','FANS_ONLY','BLOCKED']);
    fw.appendChild(filterSelect); filtersPanel.appendChild(fw);

    const sw = document.createElement('div'); sw.style.marginBottom='14px';
    els.sortLabel = mkLabel(); sw.appendChild(els.sortLabel);
    const sortSelect = mkSelect(['AZ','ZA']);
    sw.appendChild(sortSelect); filtersPanel.appendChild(sw);

    els.exportBtn = mkBtn('#27272a','#a1a1aa','#3f3f46');
    filtersPanel.appendChild(els.exportBtn);

    // --- Stats Panel ---
    const statsPanel = mkPanel();
    sidebar.appendChild(statsPanel);
    els.statsGroup = mkH2('');
    statsPanel.appendChild(els.statsGroup);

    const statsContent = document.createElement('div');
    statsContent.style.cssText='display:flex;flex-direction:column;gap:8px;font-size:13px;';
    function mkStatRow(lblEl, color, icon) {
        const r=document.createElement('div');
        r.style.cssText='display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px solid rgba(39,39,42,0.5);';
        const ls=document.createElement('span');
        ls.style.cssText='display:flex;align-items:center;gap:8px;color:#a1a1aa;';
        if(icon){const i=document.createElement('span');i.textContent=icon;i.style.fontSize='13px';ls.appendChild(i);}
        ls.appendChild(lblEl);
        const v=document.createElement('strong');
        v.style.cssText=`color:${color};font-variant-numeric:tabular-nums;font-size:15px;`;
        v.textContent='0';
        r.appendChild(ls);r.appendChild(v);statsContent.appendChild(r);
        return v;
    }
    els.statFollowingL=document.createElement('span');
    els.statFollowersL=document.createElement('span');
    els.statNonFollowersL=document.createElement('span');
    els.statMutualsL=document.createElement('span');
    els.statFansOnlyL=document.createElement('span');
    els.statBlockedL=document.createElement('span');
    els.statSelectedL=document.createElement('span');
    els.statSuccessUnfollowL=document.createElement('span');
    els.statSuccessBlockL=document.createElement('span');

    const vFollowing=mkStatRow(els.statFollowingL,'#40bcf4','👤');
    const vFollowers=mkStatRow(els.statFollowersL,'#40bcf4','👥');
    const vNonFollowers=mkStatRow(els.statNonFollowersL,'#f43f5e','💔');
    const vMutuals=mkStatRow(els.statMutualsL,'#00e054','🤝');
    const vFansOnly=mkStatRow(els.statFansOnlyL,'#ff8000','⭐');
    const vBlocked=mkStatRow(els.statBlockedL,'#ef4444','🚫');
    const vSelected=mkStatRow(els.statSelectedL,'#22d3ee','☑️');
    const vSuccessUnfollow=mkStatRow(els.statSuccessUnfollowL,'#f97316','🔓');
    const vSuccessBlock=mkStatRow(els.statSuccessBlockL,'#ef4444','🛑');
    statsPanel.appendChild(statsContent);

    // --- Actions Panel ---
    const actionsPanel = document.createElement('div');
    actionsPanel.style.cssText='background:linear-gradient(135deg,#18181b,#1c1c20);border:1px solid #ef4444;border-radius:12px;padding:20px;';
    sidebar.appendChild(actionsPanel);
    els.actionsGroup = mkH2('');
    actionsPanel.appendChild(els.actionsGroup);

    els.unfollowBtn = mkBtn('#e11d48','#fff',null);
    els.unfollowBtn.style.marginTop='0';
    actionsPanel.appendChild(els.unfollowBtn);

    els.blockBtn = mkBtn('#1c1917','#ef4444','#ef4444');
    actionsPanel.appendChild(els.blockBtn);

    els.followBtn = mkBtn('linear-gradient(135deg,#00e054,#00c94b)','#000',null);
    actionsPanel.appendChild(els.followBtn);

    // Stop button - hidden until processing
    els.stopBtn = document.createElement('button');
    els.stopBtn.style.cssText='width:100%;padding:12px;background:#fbbf24;color:#000;border:2px solid #f59e0b;border-radius:8px;font-weight:800;font-size:14px;cursor:pointer;transition:all 0.2s;margin-top:10px;display:none;letter-spacing:0.5px;';
    els.stopBtn.textContent='⏹ STOP';
    els.stopBtn.addEventListener('click',()=>{ stopRequested=true; els.stopBtn.textContent='Stopping...'; els.stopBtn.style.opacity='0.6'; });
    els.stopBtn.addEventListener('mouseenter',()=>{ els.stopBtn.style.background='#f59e0b'; });
    els.stopBtn.addEventListener('mouseleave',()=>{ els.stopBtn.style.background='#fbbf24'; });
    actionsPanel.appendChild(els.stopBtn);

    // === CONTENT AREA ===
    const contentArea = document.createElement('div');
    contentArea.style.cssText='flex:1;min-width:400px;display:flex;flex-direction:column;background:linear-gradient(135deg,#18181b,#1c1c20);border:1px solid #27272a;border-radius:12px;overflow:hidden;';
    main.appendChild(contentArea);

    const contentHeader = document.createElement('div');
    contentHeader.style.cssText='padding:14px 24px;border-bottom:1px solid #27272a;display:flex;justify-content:space-between;align-items:center;background:rgba(9,9,11,0.5);';
    contentArea.appendChild(contentHeader);

    els.userListTitle = document.createElement('h2');
    els.userListTitle.style.cssText='margin:0;font-size:15px;font-weight:700;color:#e4e4e7;';
    contentHeader.appendChild(els.userListTitle);

    const contentHeaderRight = document.createElement('div');
    contentHeaderRight.style.cssText='display:flex;align-items:center;gap:16px;';
    contentHeader.appendChild(contentHeaderRight);

    els.listCount = document.createElement('span');
    els.listCount.style.cssText='font-size:13px;color:#71717a;font-weight:500;';
    els.listCount.textContent='0 users';
    contentHeaderRight.appendChild(els.listCount);

    const selectAllLabel = document.createElement('label');
    selectAllLabel.style.cssText='display:flex;align-items:center;gap:8px;font-size:13px;color:#a1a1aa;cursor:pointer;user-select:none;';
    const selectAllCheckbox = document.createElement('input');
    selectAllCheckbox.type='checkbox'; selectAllCheckbox.disabled=true;
    selectAllCheckbox.style.cssText='width:16px;height:16px;cursor:pointer;accent-color:#00e054;';
    selectAllLabel.appendChild(selectAllCheckbox);
    els.selectAllText = document.createTextNode('');
    selectAllLabel.appendChild(els.selectAllText);
    contentHeaderRight.appendChild(selectAllLabel);

    const progressContainer = document.createElement('div');
    progressContainer.style.cssText='height:3px;background:#27272a;width:100%;display:none;';
    const progressBar = document.createElement('div');
    progressBar.style.cssText='height:100%;width:0%;background:linear-gradient(90deg,#00e054,#40bcf4);transition:width 0.4s ease;border-radius:0 2px 2px 0;';
    progressContainer.appendChild(progressBar);
    contentArea.appendChild(progressContainer);

    const statusBar = document.createElement('div');
    statusBar.style.cssText='padding:8px 24px;background:rgba(0,224,84,0.05);border-bottom:1px solid #27272a;font-size:12px;color:#00e054;font-weight:500;display:none;';
    contentArea.appendChild(statusBar);

    const listContainer = document.createElement('div');
    listContainer.style.cssText='flex:1;overflow-y:auto;padding:16px 24px;display:flex;flex-direction:column;gap:8px;';
    contentArea.appendChild(listContainer);

    els.emptyState = document.createElement('div');
    els.emptyState.style.cssText='text-align:center;color:#52525b;margin-top:100px;font-size:14px;padding:0 20px;line-height:1.6;';

    // === HELPERS ===
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const randomDelay = (min, max) => sleep(Math.floor(Math.random()*(max-min+1)+min)*1000);
    const setStatus = text => { statusBar.style.display=text?'block':'none'; statusBar.textContent=text; };

    function getCSRFToken() {
        // Use the token we saved before clearing the page
        if (savedCSRFValue) return savedCSRFValue;
        // Letterboxd stores CSRF in window.supermodelCSRF
        if (window.supermodelCSRF) return window.supermodelCSRF;
        // Fallback: try hidden input fields
        const inp = document.querySelector('input[name="__csrf"]');
        if (inp) return inp.value;
        // Fallback: try cookie
        const c = document.cookie.split(';').find(c => c.trim().startsWith('csrf'));
        if (c) return c.split('=')[1];
        // Try meta tag
        const m = document.querySelector('meta[name="csrf-token"]');
        if (m) return m.content;
        return '';
    }

    function enableBtn(btn) { btn.disabled=false; btn.style.opacity='1'; btn.style.cursor='pointer'; }
    function disableBtn(btn) { btn.disabled=true; btn.style.opacity='0.5'; btn.style.cursor='not-allowed'; }

    function updateStats() {
        vFollowing.textContent=followingList.length;
        vFollowers.textContent=followersList.length;
        vNonFollowers.textContent=nonFollowers.length;
        vMutuals.textContent=mutuals.length;
        vFansOnly.textContent=fansOnly.length;
        vBlocked.textContent=blockedList.length;
        vSelected.textContent=selectedUsernames.size;
        vSuccessUnfollow.textContent=successUnfollowCount;
        vSuccessBlock.textContent=successBlockCount;
        els.listCount.textContent=`${displayedUsers.length} users`;

        if(selectedUsernames.size>0 && !isScanning && !isProcessing) {
            enableBtn(els.unfollowBtn); enableBtn(els.blockBtn); enableBtn(els.followBtn);
        } else {
            disableBtn(els.unfollowBtn); disableBtn(els.blockBtn); disableBtn(els.followBtn);
        }
    }

    // === TRANSLATIONS ===
    function updateTranslations() {
        els.appTitle.textContent=t('appTitle'); els.appDesc.textContent=t('appDesc');
        els.settingsGroup.textContent=t('settingsGroup'); els.usernameLabel.textContent=t('usernameLabel');
        els.antiBanGroup.textContent=t('antiBanGroup');
        els.minDelayL.textContent=t('minDelay'); els.maxDelayL.textContent=t('maxDelay');
        els.pauseCountL.textContent=t('pauseCount'); els.pauseDurationL.textContent=t('pauseDuration');
        if(isScanning) els.scanBtn.textContent=t('scanning');
        else if(followingList.length>0) els.scanBtn.textContent=t('rescanBtn');
        else els.scanBtn.textContent=t('scanBtn');
        els.statsGroup.textContent=t('statsGroup');
        els.statFollowingL.textContent=t('statFollowing'); els.statFollowersL.textContent=t('statFollowers');
        els.statNonFollowersL.textContent=t('statNonFollowers'); els.statMutualsL.textContent=t('statMutuals');
        els.statFansOnlyL.textContent=t('statFansOnly'); els.statBlockedL.textContent=t('statBlocked');
        els.statSelectedL.textContent=t('statSelected');
        els.statSuccessUnfollowL.textContent=t('statSuccessUnfollow');
        els.statSuccessBlockL.textContent=t('statSuccessBlock');
        els.filtersGroup.textContent=t('filtersGroup'); els.filterLabel.textContent=t('filterLabel');
        els.sortLabel.textContent=t('sortLabel');
        filterSelect.options[0].text=t('fAll'); filterSelect.options[1].text=t('fNonFollowers');
        filterSelect.options[2].text=t('fMutuals'); filterSelect.options[3].text=t('fFansOnly');
        filterSelect.options[4].text=t('fBlocked');
        sortSelect.options[0].text=t('sAZ'); sortSelect.options[1].text=t('sZA');
        els.selectAllText.textContent=t('selectAll'); els.userListTitle.textContent=t('userList');
        els.devLink.textContent=t('devLink'); els.githubText.textContent=t('githubLink');
        els.exportBtn.textContent=t('exportBtn');
        els.actionsGroup.textContent=t('actionsGroup');
        if(isProcessing) { els.unfollowBtn.textContent=t('processing'); els.blockBtn.textContent=t('processing'); }
        else { els.unfollowBtn.textContent=t('unfollowBtn'); els.blockBtn.textContent=t('blockBtn'); els.followBtn.textContent=t('followBtn'); }
        if(followingList.length===0&&followersList.length===0&&!isScanning) {
            els.emptyState.innerHTML=`<div style="font-size:40px;margin-bottom:16px;">🎬</div><p>${t('emptyList')}</p><br><a href="https://letterboxd.com/miabeyefendi/" target="_blank" style="color:#00e054;text-decoration:none;font-weight:600;">${t('devLink')}</a>`;
        }
    }
    updateTranslations();

    // === SCRAPING ===
    async function fetchPageUsernames(baseUrl, pageNum=1) {
        const url = pageNum>1 ? `${baseUrl}page/${pageNum}/` : baseUrl;
        try {
            const res = await fetch(url);
            if(!res.ok) return {usernames:[],hasNext:false};
            const html = await res.text();
            const doc = new DOMParser().parseFromString(html,'text/html');
            const usernames = [];
            doc.querySelectorAll('table.person-table a.name, table.member-table a.name, a.name').forEach(link => {
                const href = link.getAttribute('href');
                if(href) { const m=href.match(/^\/([a-zA-Z0-9_]+)\/?$/); if(m) usernames.push(m[1].trim()); }
            });
            let hasNext = false;
            const nextBtn = doc.querySelector('.paginate-nextprev a.next, a.paginate-next, .pagination a[rel="next"]');
            if(nextBtn) hasNext=true;
            if(!hasNext) {
                doc.querySelectorAll('.paginate-pages a, .pagination a').forEach(link => {
                    const pm = (link.getAttribute('href')||'').match(/page\/(\d+)/);
                    if(pm && parseInt(pm[1])>pageNum) hasNext=true;
                });
            }
            return {usernames:[...new Set(usernames)],hasNext};
        } catch(err) { console.error(err); return {usernames:[],hasNext:false}; }
    }

    async function fetchAllUsernames(baseUrl, label) {
        let all=[], page=1, hasNext=true;
        while(hasNext) {
            setStatus(`${label} - Page ${page}...`);
            const r = await fetchPageUsernames(baseUrl, page);
            all = all.concat(r.usernames); hasNext=r.hasNext;
            if(hasNext) { page++; await sleep(800+Math.random()*700); }
        }
        return [...new Set(all)];
    }

    // === AJAX ACTIONS ===
    async function doAjaxAction(actionUrl) {
        try {
            const csrf = getCSRFToken();
            const res = await fetch(actionUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: '__csrf=' + encodeURIComponent(csrf),
                credentials: 'same-origin'
            });
            if (res.ok) {
                try { const j = await res.json(); return j.result === true || j.result === 'true'; }
                catch(e) { return true; } // If not JSON but status OK, still success
            }
            return false;
        } catch(e) { console.error('Action error:', actionUrl, e); return false; }
    }

    async function doUnfollow(username) { return doAjaxAction(`/${username}/unfollow/`); }
    async function doFollow(username) { return doAjaxAction(`/${username}/follow/`); }
    async function doBlock(username) { return doAjaxAction(`/${username}/block/`); }

    // === BULK ACTION PROCESSOR ===
    async function processBulkAction(actionFn, confirmMsg, successCounter) {
        if(isProcessing || selectedUsernames.size===0) return;
        if(!confirm(confirmMsg)) return;

        isProcessing=true; stopRequested=false;
        disableBtn(els.unfollowBtn); disableBtn(els.blockBtn); disableBtn(els.followBtn);
        disableBtn(els.scanBtn); selectAllCheckbox.disabled=true;
        enableBtn(els.stopBtn); els.stopBtn.style.display='block';
        updateTranslations();

        const minD=parseInt(minDelayInput.value)||3;
        const maxD=parseInt(maxDelayInput.value)||8;
        const pCount=parseInt(pauseCountInput.value)||50;
        const pDuration=parseInt(pauseDurationInput.value)||300;
        const users=Array.from(selectedUsernames);
        let processed=0, success=0;

        progressContainer.style.display='block';
        progressBar.style.width='0%';
        progressBar.style.background='linear-gradient(90deg,#e11d48,#f43f5e)';

        for(let i=0;i<users.length;i++) {
            if(stopRequested) {
                setStatus(`🛑 Stopped! Processed ${processed}/${users.length}, Success: ${success}`);
                break;
            }
            const u=users[i];
            setStatus(`⚡ Processing ${u} (${i+1}/${users.length})...`);

            const ok = await actionFn(u);
            if(ok) {
                success++;
                if(successCounter==='unfollow') successUnfollowCount++;
                if(successCounter==='block') successBlockCount++;
                selectedUsernames.delete(u);
                followingList=followingList.filter(x=>x!==u);
                nonFollowers=nonFollowers.filter(x=>x!==u);
                mutuals=mutuals.filter(x=>x!==u);
                fansOnly=fansOnly.filter(x=>x!==u);
            } else {
                console.warn(`Failed action on ${u}`);
            }

            processed++;
            progressBar.style.width=`${(processed/users.length)*100}%`;
            updateStats();

            if(i<users.length-1 && !stopRequested) {
                if((i+1)%pCount===0) {
                    setStatus(`⏸️ ${t('pauseStatus')} (${pDuration}s)`);
                    // Interruptible pause
                    for(let s=0;s<pDuration&&!stopRequested;s++) await sleep(1000);
                } else {
                    await randomDelay(minD, maxD);
                }
            }
        }

        isProcessing=false; stopRequested=false;
        els.stopBtn.style.display='none'; disableBtn(els.stopBtn);
        enableBtn(els.scanBtn); selectAllCheckbox.disabled=false;
        progressBar.style.background='linear-gradient(90deg,#00e054,#40bcf4)';
        updateTranslations();
        applyFilterAndSort();
        setTimeout(()=>alert(t('processDone')+success),500);
    }

    // === FILTER & SORT ===
    function applyFilterAndSort() {
        const f=filterSelect.value, s=sortSelect.value;
        let filtered=[];
        if(f==='ALL') filtered=followingList.map(u=>({username:u,type:mutuals.includes(u)?'mutual':'non_follower'}));
        else if(f==='NON_FOLLOWERS') filtered=nonFollowers.map(u=>({username:u,type:'non_follower'}));
        else if(f==='MUTUALS') filtered=mutuals.map(u=>({username:u,type:'mutual'}));
        else if(f==='FANS_ONLY') filtered=fansOnly.map(u=>({username:u,type:'fan'}));
        else if(f==='BLOCKED') filtered=blockedList.map(u=>({username:u,type:'blocked'}));
        if(s==='AZ') filtered.sort((a,b)=>a.username.localeCompare(b.username));
        else filtered.sort((a,b)=>b.username.localeCompare(a.username));
        displayedUsers=filtered;
        renderList(); updateStats();
    }
    filterSelect.addEventListener('change',applyFilterAndSort);
    sortSelect.addEventListener('change',applyFilterAndSort);

    // === RENDER LIST ===
    function renderList() {
        listContainer.innerHTML='';
        if(followingList.length===0&&followersList.length===0&&!isScanning) {
            updateTranslations(); listContainer.appendChild(els.emptyState); return;
        }
        if(displayedUsers.length===0) {
            const m=document.createElement('div');
            m.style.cssText='text-align:center;color:#52525b;margin-top:60px;font-size:14px;';
            m.textContent='No users match the current filter.';
            listContainer.appendChild(m); return;
        }
        const colors={mutual:'linear-gradient(135deg,#00e054,#40bcf4)',non_follower:'linear-gradient(135deg,#f43f5e,#e11d48)',fan:'linear-gradient(135deg,#ff8000,#f59e0b)',blocked:'linear-gradient(135deg,#ef4444,#dc2626)'};
        const badges={mutual:{text:'🤝 Mutual',bg:'rgba(0,224,84,0.1)',col:'#00e054',bdr:'rgba(0,224,84,0.2)'},non_follower:{text:'💔 Not Following',bg:'rgba(244,63,94,0.1)',col:'#f43f5e',bdr:'rgba(244,63,94,0.2)'},fan:{text:'⭐ Fan',bg:'rgba(255,128,0,0.1)',col:'#ff8000',bdr:'rgba(255,128,0,0.2)'},blocked:{text:'🚫 Blocked',bg:'rgba(239,68,68,0.1)',col:'#ef4444',bdr:'rgba(239,68,68,0.2)'}};

        displayedUsers.forEach((user,i) => {
            const item=document.createElement('div');
            item.className='user-card';
            item.style.cssText=`display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:rgba(9,9,11,0.6);border:1px solid #27272a;border-radius:10px;transition:all 0.2s;animation-delay:${Math.min(i*0.02,0.5)}s;`;
            item.addEventListener('mouseenter',()=>{item.style.borderColor='#3f3f46';item.style.background='rgba(39,39,42,0.3)';});
            item.addEventListener('mouseleave',()=>{item.style.borderColor='#27272a';item.style.background='rgba(9,9,11,0.6)';});

            const left=document.createElement('div');
            left.style.cssText='display:flex;align-items:center;gap:14px;';
            const av=document.createElement('div');
            av.style.cssText=`width:40px;height:40px;border-radius:50%;background:${colors[user.type]||colors.non_follower};display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;color:#fff;text-transform:uppercase;flex-shrink:0;`;
            av.textContent=user.username.charAt(0).toUpperCase();
            left.appendChild(av);

            const un=document.createElement('a');
            un.href=`https://letterboxd.com/${user.username}/`; un.target='_blank';
            un.textContent=user.username;
            un.style.cssText='color:#fff;font-weight:600;font-size:14px;text-decoration:none;transition:color 0.2s;';
            un.addEventListener('mouseenter',()=>un.style.color='#00e054');
            un.addEventListener('mouseleave',()=>un.style.color='#fff');
            left.appendChild(un);
            item.appendChild(left);

            const right=document.createElement('div');
            right.style.cssText='display:flex;align-items:center;gap:10px;';
            const b=badges[user.type]||badges.non_follower;
            const badge=document.createElement('span');
            badge.style.cssText=`font-size:11px;padding:4px 10px;border-radius:6px;font-weight:600;white-space:nowrap;background:${b.bg};color:${b.col};border:1px solid ${b.bdr};`;
            badge.textContent=b.text;
            right.appendChild(badge);

            const cb=document.createElement('input');
            cb.type='checkbox'; cb.checked=selectedUsernames.has(user.username);
            cb.style.cssText='width:16px;height:16px;cursor:pointer;accent-color:#00e054;';
            cb.addEventListener('change',e=>{if(e.target.checked)selectedUsernames.add(user.username);else selectedUsernames.delete(user.username);updateStats();});
            right.appendChild(cb);
            item.appendChild(right);
            listContainer.appendChild(item);
        });
    }

    selectAllCheckbox.addEventListener('change',e=>{
        if(e.target.checked) displayedUsers.forEach(u=>selectedUsernames.add(u.username));
        else displayedUsers.forEach(u=>selectedUsernames.delete(u.username));
        renderList(); updateStats();
    });

    // === EXPORT ===
    els.exportBtn.addEventListener('click',()=>{
        if(displayedUsers.length===0)return;
        let text=`Letterboxd Unfollow - ${filterSelect.options[filterSelect.selectedIndex].text}\nUsername: ${currentUsername}\nDate: ${new Date().toLocaleString()}\n${'='.repeat(40)}\n\n`;
        displayedUsers.forEach(u=>{
            const l=u.type==='mutual'?'[MUTUAL]':u.type==='non_follower'?'[NOT FOLLOWING BACK]':u.type==='fan'?'[FAN]':'[BLOCKED]';
            text+=`${l} ${u.username}\n`;
        });
        text+=`\n${'='.repeat(40)}\nTotal: ${displayedUsers.length}\n\nGenerated by Letterboxd Unfollow - github.com/Miabeyefendi/letterboxdunfollow`;
        const blob=new Blob([text],{type:'text/plain'});
        const a=document.createElement('a');
        a.href=URL.createObjectURL(blob);
        a.download=`letterboxd-${currentUsername}-${filterSelect.value.toLowerCase()}.txt`;
        a.click(); URL.revokeObjectURL(a.href);
    });

    // === SCAN ===
    els.scanBtn.addEventListener('click', async()=>{
        const username=usernameInput.value.trim();
        if(!username){alert(t('usernamePrompt'));usernameInput.focus();return;}
        if(isScanning)return;
        currentUsername=username; isScanning=true;
        els.scanBtn.disabled=true; els.scanBtn.classList.add('scanning-pulse');
        els.scanBtn.style.opacity='0.7'; els.scanBtn.style.cursor='not-allowed';
        updateTranslations();
        followingList=[];followersList=[];blockedList=[];nonFollowers=[];mutuals=[];fansOnly=[];displayedUsers=[];
        selectedUsernames.clear();successUnfollowCount=0;successBlockCount=0;updateStats();
        progressContainer.style.display='block';progressBar.style.width='0%';
        progressBar.style.background='linear-gradient(90deg,#00e054,#40bcf4)';
        listContainer.innerHTML='';

        try {
            setStatus(`📡 Fetching following list for @${username}...`);
            progressBar.style.width='10%';
            followingList=await fetchAllUsernames(`https://letterboxd.com/${username}/following/`,`Following @${username}`);
            progressBar.style.width='40%';

            setStatus(`📡 Fetching followers list for @${username}...`);
            followersList=await fetchAllUsernames(`https://letterboxd.com/${username}/followers/`,`Followers of @${username}`);
            progressBar.style.width='70%';

            setStatus(`📡 Fetching blocked list for @${username}...`);
            try{blockedList=await fetchAllUsernames(`https://letterboxd.com/${username}/blocked/`,`Blocked by @${username}`);}
            catch(e){blockedList=[];}
            progressBar.style.width='85%';

            setStatus('🔍 Comparing lists...');
            const followersSet=new Set(followersList), followingSet=new Set(followingList);
            nonFollowers=followingList.filter(u=>!followersSet.has(u));
            mutuals=followingList.filter(u=>followersSet.has(u));
            fansOnly=followersList.filter(u=>!followingSet.has(u));
            progressBar.style.width='100%';
            setStatus(`✅ ${t('scanComplete')} — Following: ${followingList.length} | Followers: ${followersList.length} | Mutuals: ${mutuals.length} | Not Following Back: ${nonFollowers.length}`);
        } catch(err) { console.error(err); setStatus(`❌ ${t('errorFetch')}`); }

        isScanning=false; els.scanBtn.disabled=false;
        els.scanBtn.classList.remove('scanning-pulse');
        els.scanBtn.style.opacity='1'; els.scanBtn.style.cursor='pointer';
        selectAllCheckbox.disabled=false;
        enableBtn(els.exportBtn); els.exportBtn.style.color='#e4e4e7';
        updateTranslations(); applyFilterAndSort();
    });

    // === ACTION BUTTON EVENTS ===
    els.unfollowBtn.addEventListener('click',()=>processBulkAction(doUnfollow,t('confirmUnfollow'),'unfollow'));
    els.blockBtn.addEventListener('click',()=>processBulkAction(doBlock,t('confirmBlock'),'block'));
    els.followBtn.addEventListener('click',()=>processBulkAction(doFollow,t('confirmFollow'),'follow'));

    // Initial render
    listContainer.appendChild(els.emptyState);
    updateTranslations();
    console.log('%c🎬 Letterboxd Unfollow loaded!','color:#00e054;font-size:16px;font-weight:bold;');
    console.log('%cPaste this script on letterboxd.com and enter a username to start.','color:#a1a1aa;');
})();
