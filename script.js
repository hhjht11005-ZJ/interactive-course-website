// 檢查答案是否合理的輔助函數
function checkReasonableAnswer(selectedFunction, platformName) {
    const reasonableAnswers = {
        "智慧型手機": [
            "文書處理", "影片編輯", "電子書閱讀", "繪圖設計", "語音助理", 
            "天氣查詢", "新聞播報", "提醒", "通話", "串流影片", "線上會議"
        ],
        "筆記型電腦": [
            "打電話", "拍照", "導航", "音樂播放", "影片觀看", "社交媒體", 
            "購物", "語音助理", "天氣查詢", "電子書閱讀"
        ],
        "遊戲主機": [
            "上網", "文書處理", "線上會議", "學習", "工作", "創作", 
            "電子書閱讀", "繪圖設計", "教育學習"
        ],
        "伺服器": [
            "影片編輯", "程式設計", "線上會議", "遊戲娛樂", "串流影片", 
            "線上對戰", "VR體驗", "音樂播放"
        ],
        "平板電腦": [
            "打電話", "導航", "文書處理", "程式設計", "線上會議", 
            "語音助理", "天氣查詢", "智慧家居控制"
        ],
        "智慧音箱": [
            "上網", "影片觀看", "電子書閱讀", "遊戲", "工作", "創作", 
            "購物", "社交媒體", "學習"
        ]
    };
    
    return reasonableAnswers[platformName]?.includes(selectedFunction) || false;
}

// 添加缺失的活動函數
function startDefaultActivity(component) {
    const activityHTML = `
        <div class="default-activity">
            <h3>🎯 ${component} 活動</h3>
            <p>這是一個互動式學習活動，讓我們一起探索相關概念！</p>
            
            <div class="activity-content">
                <div class="concept-cards">
                    <div class="concept-card">
                        <h4>💡 學習重點</h4>
                        <p>透過實際操作和思考，加深對系統平臺概念的理解。</p>
                    </div>
                    
                    <div class="concept-card">
                        <h4>🎮 互動體驗</h4>
                        <p>結合遊戲化元素，讓學習變得更加有趣和有效。</p>
                    </div>
                    
                    <div class="concept-card">
                        <h4>🚀 實際應用</h4>
                        <p>將所學知識應用到日常生活中的科技使用情境。</p>
                    </div>
                </div>
            </div>
            
            <div class="activity-completion">
                <button onclick="completeActivity()" class="complete-button">完成活動</button>
            </div>
        </div>
    `;
    
    showActivityContent(activityHTML);
}

function startTechTimelineActivity() {
    const activityHTML = `
        <div class="tech-timeline-activity">
            <h3>⏰ 科技演進拼圖</h3>
            <p>拼湊科技發展的重要時刻，見證科技的驚人演變！</p>
            
            <div class="timeline-container">
                <div class="timeline-item" data-year="1940s">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h4>1940年代</h4>
                        <p>第一台電子計算機 ENIAC 誕生</p>
                    </div>
                </div>
                
                <div class="timeline-item" data-year="1970s">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h4>1970年代</h4>
                        <p>個人電腦概念開始萌芽</p>
                    </div>
                </div>
                
                <div class="timeline-item" data-year="1990s">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h4>1990年代</h4>
                        <p>網際網路普及，改變世界</p>
                    </div>
                </div>
                
                <div class="timeline-item" data-year="2000s">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h4>2000年代</h4>
                        <p>智慧型手機革命開始</p>
                    </div>
                </div>
                
                <div class="timeline-item" data-year="2010s">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h4>2010年代</h4>
                        <p>雲端運算與AI技術興起</p>
                    </div>
                </div>
            </div>
            
            <div class="activity-completion">
                <button onclick="completeActivity()" class="complete-button">完成時光之旅</button>
            </div>
        </div>
    `;
    
    showActivityContent(activityHTML);
}

function startInterfaceEvolutionActivity() {
    const activityHTML = `
        <div class="interface-evolution-activity">
            <h3>🖥️ 從命令列到觸控螢幕</h3>
            <p>體驗不同時代的操作介面，感受科技進步的軌跡！</p>
            
            <div class="interface-showcase">
                <div class="interface-card">
                    <h4>命令列介面 (CLI)</h4>
                    <div class="interface-demo cli-demo">
                        <div class="terminal">
                            <div class="terminal-header">C:\></div>
                            <div class="terminal-content">
                                dir<br>
                                copy file.txt backup.txt<br>
                                del temp.txt
                            </div>
                        </div>
                    </div>
                    <p>需要記憶指令，但功能強大</p>
                </div>
                
                <div class="interface-card">
                    <h4>圖形使用者介面 (GUI)</h4>
                    <div class="interface-demo gui-demo">
                        <div class="desktop">
                            <div class="window">
                                <div class="window-header">我的電腦</div>
                                <div class="window-content">
                                    📁 文件<br>
                                    📁 圖片<br>
                                    📄 檔案.txt
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>直觀易用，滑鼠點擊操作</p>
                </div>
                
                <div class="interface-card">
                    <h4>觸控介面</h4>
                    <div class="interface-demo touch-demo">
                        <div class="mobile-screen">
                            <div class="app-grid">
                                📱 電話<br>
                                📷 相機<br>
                                🌐 瀏覽器<br>
                                🎵 音樂
                            </div>
                        </div>
                    </div>
                    <p>手指觸控，自然直覺</p>
                </div>
            </div>
            
            <div class="activity-completion">
                <button onclick="completeActivity()" class="complete-button">完成介面探索</button>
            </div>
        </div>
    `;
    
    showActivityContent(activityHTML);
}

function startResourceManagerActivity() {
    startDefaultActivity("資源管理小劇場");
}

function startCloudExplorerActivity() {
    startDefaultActivity("雲端探險之旅");
}

function startSecurityGuardActivity() {
    startDefaultActivity("資安守護者");
}

function startNetworkExplorerActivity() {
    startDefaultActivity("網路探險家");
}

function startFutureTechActivity() {
    startDefaultActivity("未來科技展望");
}

// 通用的任務完成函數
function completeTask(button) {
    button.textContent = "✅ 已完成";
    button.disabled = true;
    button.style.background = "#10b981";
}

// 通用的活動完成函數
function completeActivity() {
    alert("🎉 恭喜完成活動！你學到了很多有用的知識。");
    hideActivityContent();
}


// 開啟章節詳情頁面
function openChapter(chapterId) {
    // 隱藏首頁
    const homePage = document.getElementById('home-page');
    if (homePage) {
        homePage.style.display = 'none';
    }
    
    // 顯示章節詳情頁面
    const chapterPage = document.getElementById('chapter-page');
    if (chapterPage) {
        chapterPage.style.display = 'block';
    } else {
        // 如果章節頁面不存在，創建一個
        createChapterPage();
    }
    
    // 根據章節ID載入對應內容
    loadChapterContent(chapterId);
}

// 載入章節內容
function loadChapterContent(chapterId) {
    const chapter = chaptersData.find(c => c.id === chapterId);
    if (!chapter) return;
    
    // 更新章節標題和描述
    document.getElementById('chapter-title').textContent = chapter.title;
    document.getElementById('chapter-subtitle').textContent = chapter.subtitle;
    document.getElementById('chapter-description').textContent = chapter.description;
    
    // 更新章節圖標
    const chapterIcon = document.getElementById('chapter-icon');
    chapterIcon.className = `chapter-icon ${chapter.gradient}`;
    chapterIcon.innerHTML = `<i class="${chapter.icon}"></i>`;
    
    // 載入重點概念
    const conceptsList = document.getElementById('concepts-list');
    conceptsList.innerHTML = chapter.keyPoints.map(point => 
        `<li class="concept-item">${point}</li>`
    ).join('');
    
    // 載入互動活動
    const activitiesList = document.getElementById('activities-list');
    activitiesList.innerHTML = chapter.activities.map(activity => `
        <div class="activity-item">
            <div class="activity-info">
                <h4 class="activity-name">${activity.name}</h4>
                <p class="activity-description">${activity.description}</p>
                <span class="activity-type">${getActivityTypeText(activity.type)}</span>
            </div>
            <button class="activity-button" onclick="startGenericActivity('${activity.component}')">
                開始活動
            </button>
        </div>
    `).join('');
    
    // 設置當前章節ID
    currentChapter = chapterId;
}

// 獲取活動類型文字
function getActivityTypeText(type) {
    const typeMap = {
        'discussion': '討論活動',
        'game': '遊戲活動',
        'interactive': '互動體驗',
        'exploration': '探索活動',
        'timeline': '時間軸活動',
        'comparison': '比較活動',
        'prediction': '預測活動'
    };
    return typeMap[type] || '學習活動';
}

// 返回主頁面
function goBackToHome() {
    const chapterPage = document.getElementById('chapter-page');
    if (chapterPage) {
        chapterPage.style.display = 'none';
    }
    
    const homePage = document.getElementById('home-page');
    if (homePage) {
        homePage.style.display = 'block';
    }
    
    hideActivityContent();
}

// 切換標籤頁
function switchTab(tabName) {
    // 隱藏所有標籤內容
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // 移除所有標籤的 active 狀態
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // 顯示選中的標籤內容
    document.getElementById(`${tabName}-content`).classList.add('active');
    
    // 設置選中的標籤為 active
    document.querySelector(`[onclick="switchTab('${tabName}')"]`).classList.add('active');
}

// 全域變數
let currentChapter = 1;


// 創建章節詳情頁面
function createChapterPage() {
    const chapterPageHTML = `
        <div id="chapter-page" class="page" style="display: none;">
            <div class="chapter-header">
                <button class="back-button" onclick="goBackToHome()">
                    <i class="fas fa-arrow-left"></i>
                    返回首頁
                </button>
                
                <div class="chapter-info">
                    <div id="chapter-icon" class="chapter-icon blue-gradient">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="chapter-text">
                        <h1 id="chapter-title">章節標題</h1>
                        <p id="chapter-subtitle">章節副標題</p>
                        <p id="chapter-description">章節描述</p>
                    </div>
                </div>
            </div>

            <!-- 標籤導航 -->
            <div class="tabs-container">
                <div class="tabs-nav">
                    <button class="tab-button active" onclick="switchTab('overview')">
                        <i class="fas fa-info-circle"></i>
                        概覽
                    </button>
                    <button class="tab-button" onclick="switchTab('activities')">
                        <i class="fas fa-gamepad"></i>
                        互動活動
                    </button>
                    <button class="tab-button" onclick="switchTab('concepts')">
                        <i class="fas fa-lightbulb"></i>
                        重點概念
                    </button>
                </div>

                <!-- 標籤頁內容 -->
                <div class="tab-content">
                    <!-- 概覽標籤 -->
                    <div id="overview-content" class="tab-panel active">
                        <div class="overview-section">
                            <h2>章節介紹</h2>
                            <p id="chapter-description-full">章節詳細描述</p>
                            
                            <div class="learning-objectives">
                                <h3><i class="fas fa-target"></i> 學習目標</h3>
                                <ul id="concepts-list">
                                    <!-- 動態生成 -->
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- 互動活動標籤 -->
                    <div id="activities-content" class="tab-panel">
                        <div class="activities-section">
                            <h2><i class="fas fa-gamepad"></i> 互動活動</h2>
                            <div id="activities-list">
                                <!-- 動態生成活動內容 -->
                            </div>
                        </div>
                        
                        <!-- 活動內容容器 -->
                        <div id="activity-content" style="display: none;">
                            <!-- 具體活動內容將在這裡顯示 -->
                        </div>
                    </div>

                    <!-- 重點概念標籤 -->
                    <div id="concepts-content" class="tab-panel">
                        <div class="concepts-section">
                            <h2><i class="fas fa-lightbulb"></i> 重點概念</h2>
                            <div id="key-points-list">
                                <!-- 動態生成 -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // 將章節頁面添加到 app-container 中
    const appContainer = document.querySelector('.app-container');
    appContainer.insertAdjacentHTML('beforeend', chapterPageHTML);
}
