// 課程數據
const chaptersData = [
    {
        id: 1,
        title: "系統平臺的「科技夥伴」",
        subtitle: "概念初探",
        description: "從日常使用的科技設備開始，探索系統平臺的奧秘！",
        icon: "fas fa-mobile-alt",
        gradient: "blue-gradient",
        activities: [
            { 
                name: "我的科技夥伴", 
                type: "discussion", 
                description: "分組討論日常使用的科技設備",
                component: "TechPartner"
            },
            { 
                name: "平臺大富翁", 
                type: "game", 
                description: "透過遊戲認識不同系統平臺",
                component: "PlatformMonopoly"
            }
        ],
        concepts: ["系統", "平臺", "資訊科技系統平臺", "主機類型"],
        keyPoints: [
            "系統平臺是讓各種功能運作的基礎環境",
            "不同設備有不同的系統平臺特性",
            "智慧型手機、電腦、遊戲機都是常見的系統平臺"
        ]
    },
    {
        id: 2,
        title: "揭秘「科技大腦」與「記憶寶庫」",
        subtitle: "系統平臺的內部世界",
        description: "深入電腦內部，認識CPU、記憶體和作業系統的運作！",
        icon: "fas fa-brain",
        gradient: "green-gradient",
        activities: [
            { 
                name: "電腦解剖課", 
                type: "interactive", 
                description: "視覺化認識電腦內部結構",
                component: "ComputerAnatomy"
            },
            { 
                name: "記憶體大作戰", 
                type: "game", 
                description: "角色扮演不同記憶體類型",
                component: "MemoryBattle"
            },
            { 
                name: "作業系統的超級任務", 
                type: "exploration", 
                description: "探索不同作業系統的特色",
                component: "OSMission"
            }
        ],
        concepts: ["CPU", "記憶體", "RAM", "ROM", "硬碟", "作業系統", "函式庫"],
        keyPoints: [
            "CPU是電腦的大腦，負責處理和計算",
            "記憶體分為短期記憶(RAM)和長期記憶(ROM/硬碟)",
            "作業系統是電腦的管家，協調各項工作"
        ]
    },
    {
        id: 3,
        title: "穿越「科技時光隧道」",
        subtitle: "系統平臺的演進之旅",
        description: "搭乘時光機，見證科技從大型電腦到智慧手機的驚人演變！",
        icon: "fas fa-bolt",
        gradient: "yellow-gradient",
        activities: [
            { 
                name: "科技演進拼圖", 
                type: "timeline", 
                description: "拼湊科技發展的重要時刻",
                component: "TechTimeline"
            },
            { 
                name: "從命令列到觸控螢幕", 
                type: "comparison", 
                description: "體驗不同時代的操作介面",
                component: "InterfaceEvolution"
            },
            { 
                name: "雲端與AI的未來想像", 
                type: "prediction", 
                description: "預測未來科技發展趨勢",
                component: "FutureTech"
            }
        ],
        concepts: ["科技發展史", "個人電腦", "圖形介面", "多工處理", "雲端運算", "人工智慧"],
        keyPoints: [
            "電腦從大型機房發展到個人設備",
            "介面從複雜的命令列進化到直觀的圖形介面",
            "雲端運算和AI正在改變我們的生活方式"
        ]
    },
    {
        id: 4,
        title: "探索「電腦心臟」的秘密",
        subtitle: "系統平臺的運作原理",
        description: "化身電腦工廠的工人，體驗資料在電腦內部的奇妙旅程！",
        icon: "fas fa-microchip",
        gradient: "red-gradient",
        activities: [
            { 
                name: "電腦工廠模擬", 
                type: "game", 
                description: "模擬電腦五大單元的協同運作",
                component: "ComputerFactory"
            },
            { 
                name: "試算表任務", 
                type: "practice", 
                description: "實際操作體驗電腦運作流程",
                component: "SpreadsheetTask"
            }
        ],
        concepts: ["五大單元", "輸入單元", "輸出單元", "記憶單元", "算術邏輯單元", "控制單元"],
        keyPoints: [
            "電腦由五大單元協同工作",
            "資料在各單元間有序流動",
            "控制單元負責協調整個處理流程"
        ]
    },
    {
        id: 5,
        title: "「電腦健康檢查」大師",
        subtitle: "資源管理與效能優化",
        description: "成為電腦醫生，學會診斷和優化電腦效能！",
        icon: "fas fa-desktop",
        gradient: "purple-gradient",
        activities: [
            { 
                name: "我是電腦偵探", 
                type: "investigation", 
                description: "檢視電腦資源使用情況",
                component: "ComputerDetective"
            },
            { 
                name: "資源管理小劇場", 
                type: "roleplay", 
                description: "扮演電腦醫生診斷問題",
                component: "ResourceManager"
            }
        ],
        concepts: ["資源管理", "CPU使用率", "記憶體使用量", "硬碟空間", "工作管理員"],
        keyPoints: [
            "定期檢查電腦資源使用狀況很重要",
            "工作管理員是診斷電腦問題的好工具",
            "合理管理資源可以提升電腦效能"
        ]
    }
];

// 全域變數
let currentChapter = null;
let completedChapters = new Set();
let currentTab = 'overview';

// 遊戲狀態
let gameStates = {
    monopoly: {
        currentPosition: 0,
        score: 0,
        gameStarted: false,
        answeredCorrectly: new Set()
    },
    memoryBattle: {
        gameState: 'waiting',
        currentTask: null,
        score: 0,
        timeLeft: 30,
        completedTasks: []
    },
    computerFactory: {
        simulation: null,
        currentStep: 0,
        isRunning: false
    }
};

// 初始化應用程式
document.addEventListener('DOMContentLoaded', function() {
    updateProgress();
    initializeEventListeners();
});

// 更新進度
function updateProgress() {
    const totalChapters = chaptersData.length;
    const completed = completedChapters.size;
    const percentage = (completed / totalChapters) * 100;
    
    const progressFill = document.getElementById('overall-progress');
    const completedCount = document.getElementById('completed-count');
    
    if (progressFill) {
        progressFill.style.width = percentage + '%';
    }
    
    if (completedCount) {
        completedCount.textContent = completed;
    }
}

// 初始化事件監聽器
function initializeEventListeners() {
    // 為所有章節卡片添加完成狀態檢查
    chaptersData.forEach(chapter => {
        const card = document.querySelector(`[data-chapter="${chapter.id}"]`);
        if (card && completedChapters.has(chapter.id)) {
            card.classList.add('completed');
        }
    });
}

// 開啟章節
function openChapter(chapterId) {
    currentChapter = chaptersData.find(chapter => chapter.id === chapterId);
    if (!currentChapter) return;
    
    // 隱藏首頁，顯示章節頁面
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('chapter-page').classList.add('active');
    
    // 更新章節資訊
    updateChapterInfo();
    
    // 切換到概覽標籤
    switchTab('overview');
}

// 返回首頁
function goHome() {
    document.getElementById('chapter-page').classList.remove('active');
    document.getElementById('home-page').classList.add('active');
    currentChapter = null;
}

// 更新章節資訊
function updateChapterInfo() {
    if (!currentChapter) return;
    
    // 更新標題和圖標
    const iconLarge = document.getElementById('chapter-icon-large');
    const titleLarge = document.getElementById('chapter-title-large');
    const subtitleLarge = document.getElementById('chapter-subtitle-large');
    
    iconLarge.innerHTML = `<i class="${currentChapter.icon}"></i>`;
    iconLarge.className = `chapter-icon-large ${currentChapter.gradient}`;
    titleLarge.textContent = currentChapter.title;
    subtitleLarge.textContent = currentChapter.subtitle;
    
    // 更新概覽內容
    updateOverviewContent();
    
    // 更新活動內容
    updateActivitiesContent();
    
    // 更新概念內容
    updateConceptsContent();
}

// 更新概覽內容
function updateOverviewContent() {
    const descriptionFull = document.getElementById('chapter-description-full');
    const objectivesList = document.getElementById('learning-objectives-list');
    const activityOverviewList = document.getElementById('activity-overview-list');
    
    descriptionFull.textContent = currentChapter.description;
    
    // 學習目標
    objectivesList.innerHTML = '';
    currentChapter.keyPoints.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        objectivesList.appendChild(li);
    });
    
    // 活動預覽
    activityOverviewList.innerHTML = '';
    currentChapter.activities.forEach((activity, index) => {
        const activityDiv = document.createElement('div');
        activityDiv.className = 'activity-preview-item';
        activityDiv.innerHTML = `
            <div class="activity-preview-card">
                <h4>${index + 1}. ${activity.name}</h4>
                <p>${activity.description}</p>
                <span class="activity-type-badge">${activity.type}</span>
            </div>
        `;
        activityOverviewList.appendChild(activityDiv);
    });
}

// 更新活動內容
function updateActivitiesContent() {
    const activitiesContent = document.getElementById('activities-content');
    activitiesContent.innerHTML = '';
    
    currentChapter.activities.forEach((activity, index) => {
        const activityDiv = document.createElement('div');
        activityDiv.className = 'activity-section';
        
        if (activity.component === 'PlatformMonopoly') {
            activityDiv.innerHTML = createPlatformMonopolyHTML();
        } else if (activity.component === 'MemoryBattle') {
            activityDiv.innerHTML = createMemoryBattleHTML();
        } else if (activity.component === 'ComputerFactory') {
            activityDiv.innerHTML = createComputerFactoryHTML();
        } else {
            activityDiv.innerHTML = createGenericActivityHTML(activity);
        }
        
        activitiesContent.appendChild(activityDiv);
    });
    
    // 初始化遊戲事件監聽器
    initializeGameEventListeners();
}

// 更新概念內容
function updateConceptsContent() {
    const conceptsList = document.getElementById('concepts-list');
    const keyPointsList = document.getElementById('key-points-list');
    
    // 重點概念
    conceptsList.innerHTML = '';
    currentChapter.concepts.forEach(concept => {
        const conceptDiv = document.createElement('div');
        conceptDiv.className = 'concept-item';
        conceptDiv.innerHTML = `<div class="concept-name">${concept}</div>`;
        conceptsList.appendChild(conceptDiv);
    });
    
    // 關鍵要點
    keyPointsList.innerHTML = '';
    currentChapter.keyPoints.forEach(point => {
        const pointDiv = document.createElement('div');
        pointDiv.className = 'key-point-item';
        pointDiv.textContent = point;
        keyPointsList.appendChild(pointDiv);
    });
}

// 切換標籤
function switchTab(tabName) {
    // 更新標籤按鈕狀態
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // 更新標籤內容
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.getElementById(`${tabName}-tab`).classList.add('active');
    
    currentTab = tabName;
}

// 創建平臺大富翁HTML
function createPlatformMonopolyHTML() {
    return `
        <div class="game-container">
            <div class="game-header">
                <h2 class="game-title">
                    <i class="fas fa-gamepad"></i>
                    平臺大富翁
                </h2>
                <p class="game-description">擲骰子移動，回答關於不同系統平臺功能的問題來獲得分數！</p>
            </div>
            
            <div class="game-controls">
                <div class="game-stats">
                    <div class="stat-badge">分數: <span id="monopoly-score">0</span></div>
                    <div class="stat-badge">位置: <span id="monopoly-position">1</span></div>
                </div>
                <div class="game-buttons">
                    <button id="monopoly-start" class="game-button">
                        <i class="fas fa-play"></i>
                        開始遊戲
                    </button>
                    <button id="monopoly-reset" class="game-button" style="display: none;">
                        <i class="fas fa-redo"></i>
                        重新開始
                    </button>
                </div>
            </div>
            
            <div id="monopoly-dice-container" class="dice-container" style="display: none;">
                <button id="monopoly-dice" class="dice-button">
                    <i class="fas fa-dice-one"></i>
                </button>
                <p class="dice-instruction">點擊骰子來移動</p>
            </div>
            
            <div class="monopoly-board">
                <div class="platform-cell" data-platform="0">
                    <div class="platform-icon blue-gradient">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="platform-name">智慧型手機</div>
                </div>
                <div class="platform-cell" data-platform="1">
                    <div class="platform-icon green-gradient">
                        <i class="fas fa-laptop"></i>
                    </div>
                    <div class="platform-name">筆記型電腦</div>
                </div>
                <div class="platform-cell" data-platform="2">
                    <div class="platform-icon purple-gradient">
                        <i class="fas fa-gamepad"></i>
                    </div>
                    <div class="platform-name">遊戲主機</div>
                </div>
                <div class="platform-cell" data-platform="3">
                    <div class="platform-icon red-gradient">
                        <i class="fas fa-server"></i>
                    </div>
                    <div class="platform-name">伺服器</div>
                </div>
                <div class="platform-cell" data-platform="4">
                    <div class="platform-icon yellow-gradient">
                        <i class="fas fa-tablet-alt"></i>
                    </div>
                    <div class="platform-name">平板電腦</div>
                </div>
                <div class="platform-cell" data-platform="5">
                    <div class="platform-icon blue-gradient">
                        <i class="fas fa-volume-up"></i>
                    </div>
                    <div class="platform-name">智慧音箱</div>
                </div>
            </div>
            
            <div id="monopoly-question" style="display: none;"></div>
        </div>
    `;
}

// 創建記憶體大作戰HTML
function createMemoryBattleHTML() {
    return `
        <div class="game-container">
            <div class="game-header">
                <h2 class="game-title">
                    <i class="fas fa-brain"></i>
                    記憶體大作戰
                </h2>
                <p class="game-description">扮演不同的記憶體角色，正確處理各種資料任務！</p>
            </div>
            
            <div class="game-controls">
                <div class="game-stats">
                    <div class="stat-badge">分數: <span id="memory-score">0</span></div>
                    <div class="stat-badge" id="memory-timer" style="display: none;">時間: <span id="memory-time">30</span>s</div>
                </div>
                <div class="game-buttons">
                    <button id="memory-start" class="game-button">
                        <i class="fas fa-play"></i>
                        開始挑戰
                    </button>
                    <button id="memory-reset" class="game-button" style="display: none;">
                        <i class="fas fa-redo"></i>
                        重新開始
                    </button>
                </div>
            </div>
            
            <div class="memory-types">
                <div class="memory-card">
                    <div class="memory-icon blue-gradient">
                        <i class="fas fa-memory"></i>
                    </div>
                    <div class="memory-name">RAM</div>
                    <div class="memory-role">短期記憶快手</div>
                    <div class="characteristics">
                        <span class="characteristic-tag">快速讀寫</span>
                        <span class="characteristic-tag">斷電消失</span>
                        <span class="characteristic-tag">暫存資料</span>
                        <span class="characteristic-tag">執行程式</span>
                    </div>
                </div>
                <div class="memory-card">
                    <div class="memory-icon green-gradient">
                        <i class="fas fa-microchip"></i>
                    </div>
                    <div class="memory-name">ROM</div>
                    <div class="memory-role">長期記憶守護者</div>
                    <div class="characteristics">
                        <span class="characteristic-tag">只能讀取</span>
                        <span class="characteristic-tag">斷電不消失</span>
                        <span class="characteristic-tag">儲存BIOS</span>
                        <span class="characteristic-tag">開機程式</span>
                    </div>
                </div>
                <div class="memory-card">
                    <div class="memory-icon purple-gradient">
                        <i class="fas fa-hdd"></i>
                    </div>
                    <div class="memory-name">硬碟</div>
                    <div class="memory-role">大型倉庫管理員</div>
                    <div class="characteristics">
                        <span class="characteristic-tag">大容量</span>
                        <span class="characteristic-tag">永久儲存</span>
                        <span class="characteristic-tag">儲存檔案</span>
                        <span class="characteristic-tag">作業系統</span>
                    </div>
                </div>
            </div>
            
            <div id="memory-task" style="display: none;"></div>
            <div id="memory-progress" style="display: none;"></div>
            <div id="memory-completion" style="display: none;"></div>
        </div>
    `;
}

// 創建電腦工廠模擬HTML
function createComputerFactoryHTML() {
    return `
        <div class="game-container">
            <div class="game-header">
                <h2 class="game-title">
                    <i class="fas fa-cogs"></i>
                    電腦工廠模擬
                </h2>
                <p class="game-description">觀察電腦五大單元如何協同工作處理不同任務</p>
            </div>
            
            <div id="factory-task-selection">
                <h3>選擇模擬任務</h3>
                <div class="task-options">
                    <div class="task-option" data-task="0">
                        <h4>計算 5 + 3</h4>
                        <p>模擬電腦處理「計算 5 + 3」的完整流程</p>
                        <button class="activity-button" onclick="startFactorySimulation(0)">
                            <i class="fas fa-play"></i>
                            開始模擬
                        </button>
                    </div>
                    <div class="task-option" data-task="1">
                        <h4>儲存檔案</h4>
                        <p>模擬電腦處理「儲存檔案」的完整流程</p>
                        <button class="activity-button" onclick="startFactorySimulation(1)">
                            <i class="fas fa-play"></i>
                            開始模擬
                        </button>
                    </div>
                </div>
            </div>
            
            <div id="factory-simulation" style="display: none;">
                <div class="simulation-header">
                    <h3 id="simulation-task-title">模擬任務</h3>
                    <div class="simulation-controls">
                        <button id="factory-next" class="game-button">下一步</button>
                        <button id="factory-reset" class="game-button">
                            <i class="fas fa-redo"></i>
                            重新選擇
                        </button>
                    </div>
                </div>
                
                <div class="factory-units">
                    <div class="unit-card" data-unit="0">
                        <div class="unit-icon blue-gradient">
                            <i class="fas fa-keyboard"></i>
                        </div>
                        <div class="unit-name">輸入單元</div>
                        <div class="unit-role">接收指令</div>
                    </div>
                    <div class="unit-card" data-unit="1">
                        <div class="unit-icon green-gradient">
                            <i class="fas fa-database"></i>
                        </div>
                        <div class="unit-name">記憶單元</div>
                        <div class="unit-role">儲存資料</div>
                    </div>
                    <div class="unit-card" data-unit="2">
                        <div class="unit-icon purple-gradient">
                            <i class="fas fa-cogs"></i>
                        </div>
                        <div class="unit-name">控制單元</div>
                        <div class="unit-role">發號施令</div>
                    </div>
                    <div class="unit-card" data-unit="3">
                        <div class="unit-icon red-gradient">
                            <i class="fas fa-calculator"></i>
                        </div>
                        <div class="unit-name">算術邏輯單元</div>
                        <div class="unit-role">執行計算</div>
                    </div>
                    <div class="unit-card" data-unit="4">
                        <div class="unit-icon yellow-gradient">
                            <i class="fas fa-desktop"></i>
                        </div>
                        <div class="unit-name">輸出單元</div>
                        <div class="unit-role">顯示結果</div>
                    </div>
                </div>
                
                <div id="factory-step-info" class="step-info">
                    <h4 id="step-title">步驟 1</h4>
                    <p id="step-action">等待開始...</p>
                    <div id="step-data" class="step-data">準備中</div>
                </div>
                
                <div id="factory-progress" class="progress-indicator">
                    <div class="progress-label-small">
                        <span>模擬進度</span>
                        <span id="factory-progress-text">0 / 5</span>
                    </div>
                    <div class="progress-bar-small">
                        <div id="factory-progress-fill" class="progress-fill-small"></div>
                    </div>
                </div>
                
                <div id="factory-completion" style="display: none;"></div>
            </div>
        </div>
    `;
}

// 創建通用活動HTML
function createGenericActivityHTML(activity) {
    return `
        <div class="activity-card">
            <h3>
                <i class="fas fa-star"></i>
                ${activity.name}
            </h3>
            <p>${activity.description}</p>
            <div class="activity-type-badge">${activity.type}</div>
            <div class="activity-info">
                <h4>🎯 學習活動</h4>
                <p>這是一個互動式學習活動，讓你透過實際操作來理解概念。</p>
                <ul>
                    <li>跟隨指引完成任務</li>
                    <li>在過程中學習重要概念</li>
                    <li>獲得實作經驗和成就感</li>
                </ul>
            </div>
            <button class="activity-button" onclick="startGenericActivity('${activity.component}')">
                開始活動
            </button>
        </div>
    `;
}

// 初始化遊戲事件監聽器
function initializeGameEventListeners() {
    // 平臺大富翁
    const monopolyStart = document.getElementById('monopoly-start');
    const monopolyReset = document.getElementById('monopoly-reset');
    const monopolyDice = document.getElementById('monopoly-dice');
    
    if (monopolyStart) {
        monopolyStart.addEventListener('click', startMonopolyGame);
    }
    if (monopolyReset) {
        monopolyReset.addEventListener('click', resetMonopolyGame);
    }
    if (monopolyDice) {
        monopolyDice.addEventListener('click', rollDice);
    }
    
    // 記憶體大作戰
    const memoryStart = document.getElementById('memory-start');
    const memoryReset = document.getElementById('memory-reset');
    
    if (memoryStart) {
        memoryStart.addEventListener('click', startMemoryBattle);
    }
    if (memoryReset) {
        memoryReset.addEventListener('click', resetMemoryBattle);
    }
    
    // 電腦工廠模擬
    const factoryNext = document.getElementById('factory-next');
    const factoryReset = document.getElementById('factory-reset');
    
    if (factoryNext) {
        factoryNext.addEventListener('click', nextFactoryStep);
    }
    if (factoryReset) {
        factoryReset.addEventListener('click', resetFactorySimulation);
    }
}

// 平臺大富翁遊戲邏輯
function startMonopolyGame() {
    gameStates.monopoly.gameStarted = true;
    gameStates.monopoly.currentPosition = 0;
    gameStates.monopoly.score = 0;
    gameStates.monopoly.answeredCorrectly.clear();
    
    document.getElementById('monopoly-start').style.display = 'none';
    document.getElementById('monopoly-reset').style.display = 'inline-flex';
    document.getElementById('monopoly-dice-container').style.display = 'block';
    
    updateMonopolyDisplay();
    updateCurrentPlatform();
}

function resetMonopolyGame() {
    gameStates.monopoly.gameStarted = false;
    gameStates.monopoly.currentPosition = 0;
    gameStates.monopoly.score = 0;
    gameStates.monopoly.answeredCorrectly.clear();
    
    document.getElementById('monopoly-start').style.display = 'inline-flex';
    document.getElementById('monopoly-reset').style.display = 'none';
    document.getElementById('monopoly-dice-container').style.display = 'none';
    document.getElementById('monopoly-question').style.display = 'none';
    
    // 清除所有平臺狀態
    document.querySelectorAll('.platform-cell').forEach(cell => {
        cell.classList.remove('current', 'completed');
        cell.querySelector('.position-marker')?.remove();
        cell.querySelector('.completed-marker')?.remove();
    });
    
    updateMonopolyDisplay();
}

function rollDice() {
    if (!gameStates.monopoly.gameStarted) return;
    
    const dice = document.getElementById('monopoly-dice');
    const diceIcons = [
        'fas fa-dice-one', 'fas fa-dice-two', 'fas fa-dice-three',
        'fas fa-dice-four', 'fas fa-dice-five', 'fas fa-dice-six'
    ];
    
    // 動畫效果
    dice.classList.add('rolling');
    let rollCount = 0;
    const rollInterval = setInterval(() => {
        const randomIcon = diceIcons[Math.floor(Math.random() * 6)];
        dice.innerHTML = `<i class="${randomIcon}"></i>`;
        rollCount++;
        
        if (rollCount > 10) {
            clearInterval(rollInterval);
            dice.classList.remove('rolling');
            
            const finalValue = Math.floor(Math.random() * 6) + 1;
            dice.innerHTML = `<i class="${diceIcons[finalValue - 1]}"></i>`;
            
            // 移動玩家
            gameStates.monopoly.currentPosition = (gameStates.monopoly.currentPosition + finalValue) % 6;
            updateMonopolyDisplay();
            updateCurrentPlatform();
            showPlatformQuestion();
        }
    }, 100);
}

function updateMonopolyDisplay() {
    document.getElementById('monopoly-score').textContent = gameStates.monopoly.score;
    document.getElementById('monopoly-position').textContent = gameStates.monopoly.currentPosition + 1;
}

function updateCurrentPlatform() {
    // 清除所有當前位置標記
    document.querySelectorAll('.platform-cell').forEach(cell => {
        cell.classList.remove('current');
        cell.querySelector('.position-marker')?.remove();
    });
    
    // 標記當前位置
    const currentCell = document.querySelector(`[data-platform="${gameStates.monopoly.currentPosition}"]`);
    if (currentCell) {
        currentCell.classList.add('current');
        
        const marker = document.createElement('div');
        marker.className = 'position-marker';
        marker.innerHTML = '<i class="fas fa-crosshairs"></i>';
        currentCell.appendChild(marker);
    }
}

function showPlatformQuestion() {
    const platforms = [
        { name: "智慧型手機", functions: ["打電話", "拍照", "上網", "玩遊戲", "導航"] },
        { name: "筆記型電腦", functions: ["文書處理", "程式設計", "影片編輯", "線上會議"] },
        { name: "遊戲主機", functions: ["遊戲娛樂", "串流影片", "線上對戰", "VR體驗"] },
        { name: "伺服器", functions: ["資料儲存", "網站託管", "雲端服務", "資料庫管理"] },
        { name: "平板電腦", functions: ["電子書閱讀", "繪圖設計", "影片觀看", "教育學習"] },
        { name: "智慧音箱", functions: ["語音助理", "音樂播放", "智慧家居控制", "天氣查詢"] }
    ];
    
    const allFunctions = [
        "打電話", "拍照", "上網", "玩遊戲", "導航",
        "文書處理", "程式設計", "影片編輯", "線上會議",
        "遊戲娛樂", "串流影片", "線上對戰", "VR體驗",
        "資料儲存", "網站託管", "雲端服務", "資料庫管理",
        "電子書閱讀", "繪圖設計", "影片觀看", "教育學習",
        "語音助理", "音樂播放", "智慧家居控制", "天氣查詢"
    ];
    
    const currentPlatform = platforms[gameStates.monopoly.currentPosition];
    const platformName = currentPlatform.name;
    
    // 檢查是否已經回答過
    if (gameStates.monopoly.answeredCorrectly.has(platformName)) {
        showCompletedMessage(platformName);
        return;
    }
    
    const questionHTML = `
        <div class="question-card">
            <h3 class="question-title">
                🎯 ${platformName} 功能挑戰
            </h3>
            <p class="question-description">
                請選擇至少2個你認為這個平臺具有的功能
            </p>
            <div class="options-grid" id="function-options">
                ${allFunctions.map(func => `
                    <button class="option-button" data-function="${func}" onclick="toggleFunction('${func}')">
                        ${func}
                    </button>
                `).join('')}
            </div>
            <button class="submit-button" id="submit-answer" onclick="submitAnswer('${platformName}')" disabled>
                提交答案
            </button>
            <div id="answer-result" style="display: none;"></div>
        </div>
    `;
    
    const questionContainer = document.getElementById('monopoly-question');
    questionContainer.innerHTML = questionHTML;
    questionContainer.style.display = 'block';
}

function toggleFunction(functionName) {
    const button = document.querySelector(`[data-function="${functionName}"]`);
    button.classList.toggle('selected');
    
    // 檢查是否選擇了至少2個功能
    const selectedCount = document.querySelectorAll('.option-button.selected').length;
    document.getElementById('submit-answer').disabled = selectedCount < 2;
}

function submitAnswer(platformName) {
    const platforms = [
        { name: "智慧型手機", functions: ["打電話", "拍照", "上網", "玩遊戲", "導航"] },
        { name: "筆記型電腦", functions: ["文書處理", "程式設計", "影片編輯", "線上會議"] },
        { name: "遊戲主機", functions: ["遊戲娛樂", "串流影片", "線上對戰", "VR體驗"] },
        { name: "伺服器", functions: ["資料儲存", "網站託管", "雲端服務", "資料庫管理"] },
        { name: "平板電腦", functions: ["電子書閱讀", "繪圖設計", "影片觀看", "教育學習"] },
        { name: "智慧音箱", functions: ["語音助理", "音樂播放", "智慧家居控制", "天氣查詢"] }
    ];
    
    const platform = platforms.find(p => p.name === platformName);
    const selectedFunctions = Array.from(document.querySelectorAll('.option-button.selected'))
        .map(btn => btn.dataset.function);
    
    const correctCount = selectedFunctions.filter(func => platform.functions.includes(func)).length;
    const score = correctCount * 10;
    
    gameStates.monopoly.score += score;
    gameStates.monopoly.answeredCorrectly.add(platformName);
    
    // 標記平臺為已完成
    const platformCell = document.querySelector(`[data-platform="${gameStates.monopoly.currentPosition}"]`);
    platformCell.classList.add('completed');
    
    const completedMarker = document.createElement('div');
    completedMarker.className = 'completed-marker';
    completedMarker.innerHTML = '<i class="fas fa-check"></i>';
    platformCell.appendChild(completedMarker);
    
    // 顯示結果
    const resultHTML = `
        <div class="result-card">
            <h4 class="result-title">結果：</h4>
            <p class="result-score">你選對了 ${correctCount} 個功能，獲得 ${score} 分！</p>
            <div class="correct-answers">
                <strong>正確答案：</strong> ${platform.functions.join(", ")}
            </div>
        </div>
    `;
    
    document.getElementById('answer-result').innerHTML = resultHTML;
    document.getElementById('answer-result').style.display = 'block';
    document.getElementById('submit-answer').style.display = 'none';
    
    updateMonopolyDisplay();
}

function showCompletedMessage(platformName) {
    const questionHTML = `
        <div class="completion-card">
            <div class="completion-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3 class="completion-title">已完成此平臺的挑戰！</h3>
            <p class="completion-message">你已經完成了 ${platformName} 的功能挑戰。</p>
        </div>
    `;
    
    const questionContainer = document.getElementById('monopoly-question');
    questionContainer.innerHTML = questionHTML;
    questionContainer.style.display = 'block';
}

// 記憶體大作戰遊戲邏輯
function startMemoryBattle() {
    gameStates.memoryBattle.gameState = 'playing';
    gameStates.memoryBattle.score = 0;
    gameStates.memoryBattle.timeLeft = 30;
    gameStates.memoryBattle.completedTasks = [];
    gameStates.memoryBattle.currentTask = 0;
    
    document.getElementById('memory-start').style.display = 'none';
    document.getElementById('memory-reset').style.display = 'inline-flex';
    document.getElementById('memory-timer').style.display = 'inline-block';
    
    startMemoryTimer();
    showMemoryTask();
}

function resetMemoryBattle() {
    gameStates.memoryBattle.gameState = 'waiting';
    gameStates.memoryBattle.currentTask = null;
    gameStates.memoryBattle.score = 0;
    gameStates.memoryBattle.timeLeft = 30;
    gameStates.memoryBattle.completedTasks = [];
    
    document.getElementById('memory-start').style.display = 'inline-flex';
    document.getElementById('memory-reset').style.display = 'none';
    document.getElementById('memory-timer').style.display = 'none';
    document.getElementById('memory-task').style.display = 'none';
    document.getElementById('memory-progress').style.display = 'none';
    document.getElementById('memory-completion').style.display = 'none';
    
    updateMemoryDisplay();
}

function startMemoryTimer() {
    const timer = setInterval(() => {
        gameStates.memoryBattle.timeLeft--;
        document.getElementById('memory-time').textContent = gameStates.memoryBattle.timeLeft;
        
        if (gameStates.memoryBattle.timeLeft <= 0 || gameStates.memoryBattle.gameState !== 'playing') {
            clearInterval(timer);
            if (gameStates.memoryBattle.gameState === 'playing') {
                endMemoryBattle();
            }
        }
    }, 1000);
}

function showMemoryTask() {
    const tasks = [
        { id: 1, description: "計算 5 + 3", correctMemory: "RAM", reason: "需要快速處理計算" },
        { id: 2, description: "儲存開機程式", correctMemory: "ROM", reason: "需要斷電後仍保存" },
        { id: 3, description: "儲存遊戲檔案", correctMemory: "硬碟", reason: "需要大容量永久儲存" },
        { id: 4, description: "載入正在執行的程式", correctMemory: "RAM", reason: "需要快速存取執行中的程式" },
        { id: 5, description: "儲存基本輸入輸出系統", correctMemory: "ROM", reason: "系統核心程式需要永久保存" },
        { id: 6, description: "儲存照片和影片", correctMemory: "硬碟", reason: "多媒體檔案需要大容量儲存" }
    ];
    
    if (gameStates.memoryBattle.currentTask >= tasks.length) {
        endMemoryBattle();
        return;
    }
    
    const task = tasks[gameStates.memoryBattle.currentTask];
    
    const taskHTML = `
        <div class="task-card">
            <h3 class="task-title">
                🎯 任務 ${task.id}: ${task.description}
            </h3>
            <p class="task-description">
                請選擇最適合處理這個任務的記憶體類型
            </p>
            <div class="memory-options">
                <div class="memory-option" data-memory="RAM" onclick="selectMemory('RAM')">
                    <div class="memory-icon blue-gradient">
                        <i class="fas fa-memory"></i>
                    </div>
                    <div class="memory-name">RAM</div>
                    <div class="memory-role">短期記憶快手</div>
                </div>
                <div class="memory-option" data-memory="ROM" onclick="selectMemory('ROM')">
                    <div class="memory-icon green-gradient">
                        <i class="fas fa-microchip"></i>
                    </div>
                    <div class="memory-name">ROM</div>
                    <div class="memory-role">長期記憶守護者</div>
                </div>
                <div class="memory-option" data-memory="硬碟" onclick="selectMemory('硬碟')">
                    <div class="memory-icon purple-gradient">
                        <i class="fas fa-hdd"></i>
                    </div>
                    <div class="memory-name">硬碟</div>
                    <div class="memory-role">大型倉庫管理員</div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('memory-task').innerHTML = taskHTML;
    document.getElementById('memory-task').style.display = 'block';
    
    updateMemoryProgress();
}

function selectMemory(memoryType) {
    const tasks = [
        { id: 1, description: "計算 5 + 3", correctMemory: "RAM", reason: "需要快速處理計算" },
        { id: 2, description: "儲存開機程式", correctMemory: "ROM", reason: "需要斷電後仍保存" },
        { id: 3, description: "儲存遊戲檔案", correctMemory: "硬碟", reason: "需要大容量永久儲存" },
        { id: 4, description: "載入正在執行的程式", correctMemory: "RAM", reason: "需要快速存取執行中的程式" },
        { id: 5, description: "儲存基本輸入輸出系統", correctMemory: "ROM", reason: "系統核心程式需要永久保存" },
        { id: 6, description: "儲存照片和影片", correctMemory: "硬碟", reason: "多媒體檔案需要大容量儲存" }
    ];
    
    const currentTask = tasks[gameStates.memoryBattle.currentTask];
    const isCorrect = memoryType === currentTask.correctMemory;
    
    if (isCorrect) {
        gameStates.memoryBattle.score += 10;
        gameStates.memoryBattle.completedTasks.push(currentTask.id);
    }
    
    // 顯示結果
    const resultHTML = `
        <div class="result-card">
            <h4 class="result-title">${isCorrect ? '正確！' : '錯誤！'}</h4>
            <p class="result-score">
                ${isCorrect ? '獲得 10 分！' : '沒有得分。'}
                正確答案是：${currentTask.correctMemory}
            </p>
            <div class="correct-answers">
                <strong>原因：</strong> ${currentTask.reason}
            </div>
        </div>
    `;
    
    document.getElementById('memory-task').innerHTML += resultHTML;
    
    // 1秒後進入下一個任務
    setTimeout(() => {
        gameStates.memoryBattle.currentTask++;
        updateMemoryDisplay();
        showMemoryTask();
    }, 2000);
}

function updateMemoryDisplay() {
    document.getElementById('memory-score').textContent = gameStates.memoryBattle.score;
}

function updateMemoryProgress() {
    const totalTasks = 6;
    const completed = gameStates.memoryBattle.currentTask;
    const percentage = (completed / totalTasks) * 100;
    
    const progressHTML = `
        <div class="progress-indicator">
            <div class="progress-label-small">
                <span>任務進度</span>
                <span>${completed} / ${totalTasks}</span>
            </div>
            <div class="progress-bar-small">
                <div class="progress-fill-small" style="width: ${percentage}%"></div>
            </div>
        </div>
    `;
    
    document.getElementById('memory-progress').innerHTML = progressHTML;
    document.getElementById('memory-progress').style.display = 'block';
}

function endMemoryBattle() {
    gameStates.memoryBattle.gameState = 'completed';
    
    const completionHTML = `
        <div class="completion-card">
            <div class="completion-icon">
                <i class="fas fa-trophy"></i>
            </div>
            <h3 class="completion-title">挑戰完成！</h3>
            <p class="completion-message">
                你獲得了 ${gameStates.memoryBattle.score} 分，完成了 ${gameStates.memoryBattle.completedTasks.length} 個任務！
            </p>
            <div class="completion-details">
                <p>🎉 恭喜你成為記憶體管理專家！</p>
                <p>你已經了解了不同記憶體的特性和用途。</p>
            </div>
        </div>
    `;
    
    document.getElementById('memory-completion').innerHTML = completionHTML;
    document.getElementById('memory-completion').style.display = 'block';
    document.getElementById('memory-task').style.display = 'none';
}

// 電腦工廠模擬邏輯
function startFactorySimulation(taskIndex) {
    const simulations = [
        {
            task: "計算 5 + 3",
            steps: [
                { unit: 0, action: "接收輸入 '5 + 3'", data: "5 + 3" },
                { unit: 1, action: "儲存數據", data: "5, 3, +" },
                { unit: 2, action: "發出計算指令", data: "ADD 5, 3" },
                { unit: 3, action: "執行加法運算", data: "5 + 3 = 8" },
                { unit: 4, action: "顯示結果", data: "8" }
            ]
        },
        {
            task: "儲存檔案",
            steps: [
                { unit: 0, action: "接收儲存指令", data: "SAVE file.txt" },
                { unit: 1, action: "分配儲存空間", data: "Address: 0x1000" },
                { unit: 2, action: "協調儲存流程", data: "WRITE to disk" },
                { unit: 3, action: "處理檔案格式", data: "Format: UTF-8" },
                { unit: 4, action: "確認儲存完成", data: "File saved" }
            ]
        }
    ];
    
    gameStates.computerFactory.simulation = simulations[taskIndex];
    gameStates.computerFactory.currentStep = 0;
    gameStates.computerFactory.isRunning = true;
    
    document.getElementById('factory-task-selection').style.display = 'none';
    document.getElementById('factory-simulation').style.display = 'block';
    document.getElementById('simulation-task-title').textContent = `模擬任務: ${gameStates.computerFactory.simulation.task}`;
    
    updateFactoryStep();
}

function nextFactoryStep() {
    if (!gameStates.computerFactory.simulation) return;
    
    const totalSteps = gameStates.computerFactory.simulation.steps.length;
    
    if (gameStates.computerFactory.currentStep < totalSteps - 1) {
        gameStates.computerFactory.currentStep++;
        updateFactoryStep();
    } else {
        showFactoryCompletion();
    }
}

function updateFactoryStep() {
    const simulation = gameStates.computerFactory.simulation;
    const currentStep = simulation.steps[gameStates.computerFactory.currentStep];
    const totalSteps = simulation.steps.length;
    
    // 清除所有單元狀態
    document.querySelectorAll('.unit-card').forEach(card => {
        card.classList.remove('active', 'completed');
        card.querySelector('.active-marker')?.remove();
        card.querySelector('.completed-marker')?.remove();
    });
    
    // 標記當前活動單元
    const currentUnit = document.querySelector(`[data-unit="${currentStep.unit}"]`);
    if (currentUnit) {
        currentUnit.classList.add('active');
        
        const marker = document.createElement('div');
        marker.className = 'active-marker';
        marker.innerHTML = '<i class="fas fa-bolt"></i>';
        currentUnit.appendChild(marker);
    }
    
    // 標記已完成的單元
    for (let i = 0; i < gameStates.computerFactory.currentStep; i++) {
        const step = simulation.steps[i];
        const unit = document.querySelector(`[data-unit="${step.unit}"]`);
        if (unit && !unit.classList.contains('active')) {
            unit.classList.add('completed');
            
            const completedMarker = document.createElement('div');
            completedMarker.className = 'completed-marker';
            completedMarker.innerHTML = '<i class="fas fa-check"></i>';
            unit.appendChild(completedMarker);
        }
    }
    
    // 更新步驟資訊
    document.getElementById('step-title').textContent = `步驟 ${gameStates.computerFactory.currentStep + 1}`;
    document.getElementById('step-action').textContent = currentStep.action;
    document.getElementById('step-data').textContent = `資料: ${currentStep.data}`;
    
    // 更新進度
    const percentage = ((gameStates.computerFactory.currentStep + 1) / totalSteps) * 100;
    document.getElementById('factory-progress-fill').style.width = percentage + '%';
    document.getElementById('factory-progress-text').textContent = `${gameStates.computerFactory.currentStep + 1} / ${totalSteps}`;
    
    // 檢查是否為最後一步
    if (gameStates.computerFactory.currentStep === totalSteps - 1) {
        document.getElementById('factory-next').textContent = '完成模擬';
    }
}

function showFactoryCompletion() {
    const completionHTML = `
        <div class="completion-card">
            <div class="completion-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3 class="completion-title">模擬完成！</h3>
            <p class="completion-message">
                你已經了解了電腦五大單元如何協同工作來完成「${gameStates.computerFactory.simulation.task}」任務。
            </p>
        </div>
    `;
    
    document.getElementById('factory-completion').innerHTML = completionHTML;
    document.getElementById('factory-completion').style.display = 'block';
    document.getElementById('factory-next').style.display = 'none';
}

function resetFactorySimulation() {
    gameStates.computerFactory.simulation = null;
    gameStates.computerFactory.currentStep = 0;
    gameStates.computerFactory.isRunning = false;
    
    document.getElementById('factory-task-selection').style.display = 'block';
    document.getElementById('factory-simulation').style.display = 'none';
    document.getElementById('factory-completion').style.display = 'none';
    document.getElementById('factory-next').style.display = 'inline-flex';
    document.getElementById('factory-next').textContent = '下一步';
    
    // 清除所有單元狀態
    document.querySelectorAll('.unit-card').forEach(card => {
        card.classList.remove('active', 'completed');
        card.querySelector('.active-marker')?.remove();
        card.querySelector('.completed-marker')?.remove();
    });
}

// 通用活動啟動
function startGenericActivity(component) {
    // 根據組件類型啟動對應的活動
    switch(component) {
        case 'TechPartner':
            startTechPartnerActivity();
            break;
        case 'PlatformMonopoly':
            startMonopolyGame();
            break;
        case 'ComputerAnatomy':
            startComputerAnatomyActivity();
            break;
        case 'MemoryBattle':
            startMemoryBattle();
            break;
        case 'SystemOptimization':
            startSystemOptimizationActivity();
            break;
        case 'ComputerFactory':
            startComputerFactoryActivity();
            break;
        case 'SecurityGuard':
            startSecurityGuardActivity();
            break;
        case 'NetworkExplorer':
            startNetworkExplorerActivity();
            break;
        case 'FutureTech':
            startFutureTechActivity();
            break;
        default:
            alert(`啟動 ${component} 活動！\n\n這個活動正在開發中，敬請期待！`);
    }
}

// 科技夥伴活動
function startTechPartnerActivity() {
    const activityHTML = `
        <div class="tech-partner-activity">
            <h3>🤖 我的科技夥伴</h3>
            <p>讓我們來討論日常生活中使用的科技設備吧！</p>
            
            <div class="discussion-topics">
                <div class="topic-card">
                    <h4>📱 行動裝置</h4>
                    <p>你最常使用哪些行動裝置？它們有什麼特別的功能？</p>
                    <div class="device-examples">
                        <span class="device-tag">智慧型手機</span>
                        <span class="device-tag">平板電腦</span>
                        <span class="device-tag">智慧手錶</span>
                    </div>
                </div>
                
                <div class="topic-card">
                    <h4>💻 電腦設備</h4>
                    <p>在學習和娛樂中，你如何使用電腦？</p>
                    <div class="device-examples">
                        <span class="device-tag">桌上型電腦</span>
                        <span class="device-tag">筆記型電腦</span>
                        <span class="device-tag">Chromebook</span>
                    </div>
                </div>
                
                <div class="topic-card">
                    <h4>🎮 娛樂設備</h4>
                    <p>你喜歡哪些娛樂科技產品？</p>
                    <div class="device-examples">
                        <span class="device-tag">遊戲主機</span>
                        <span class="device-tag">智慧電視</span>
                        <span class="device-tag">VR頭盔</span>
                    </div>
                </div>
            </div>
            
            <div class="activity-completion">
                <button class="complete-button" onclick="completeTechPartnerActivity()">
                    完成討論
                </button>
            </div>
        </div>
    `;
    
    // 顯示活動內容
    const container = document.getElementById('activity-content');
    if (container) {
        container.innerHTML = activityHTML;
        container.style.display = 'block';
    }
}

function completeTechPartnerActivity() {
    alert('太棒了！你已經完成了科技夥伴的討論。\n\n透過這個活動，你更了解了日常生活中的各種系統平臺！');
    document.getElementById('activity-content').style.display = 'none';
}

// 電腦解剖課活動
function startComputerAnatomyActivity() {
    const activityHTML = `
        <div class="computer-anatomy-activity">
            <h3>🔬 電腦解剖課</h3>
            <p>讓我們來認識電腦的內部結構！</p>
            
            <div class="computer-diagram">
                <div class="component-card" onclick="showComponentInfo('cpu')">
                    <div class="component-icon">🧠</div>
                    <h4>中央處理器 (CPU)</h4>
                    <p>電腦的大腦</p>
                </div>
                
                <div class="component-card" onclick="showComponentInfo('memory')">
                    <div class="component-icon">💾</div>
                    <h4>記憶體 (RAM)</h4>
                    <p>暫時儲存資料</p>
                </div>
                
                <div class="component-card" onclick="showComponentInfo('storage')">
                    <div class="component-icon">💿</div>
                    <h4>儲存裝置</h4>
                    <p>永久保存資料</p>
                </div>
                
                <div class="component-card" onclick="showComponentInfo('motherboard')">
                    <div class="component-icon">🔌</div>
                    <h4>主機板</h4>
                    <p>連接所有元件</p>
                </div>
            </div>
            
            <div id="component-info" class="component-info" style="display: none;">
                <!-- 元件資訊將在這裡顯示 -->
            </div>
            
            <div class="activity-completion">
                <button class="complete-button" onclick="completeAnatomyActivity()">
                    完成學習
                </button>
            </div>
        </div>
    `;
    
    const container = document.getElementById('activity-content');
    if (container) {
        container.innerHTML = activityHTML;
        container.style.display = 'block';
    }
}

function showComponentInfo(component) {
    const info = {
        cpu: {
            title: '中央處理器 (CPU)',
            description: 'CPU 是電腦的大腦，負責執行所有的運算和控制工作。它的速度通常以 GHz 為單位。',
            features: ['執行程式指令', '進行數學運算', '控制其他元件']
        },
        memory: {
            title: '記憶體 (RAM)',
            description: 'RAM 是電腦的短期記憶，用來暫時儲存正在使用的程式和資料。容量越大，電腦運行越順暢。',
            features: ['快速存取資料', '暫時儲存', '斷電後資料消失']
        },
        storage: {
            title: '儲存裝置',
            description: '儲存裝置用來永久保存資料，包括硬碟、SSD 等。即使關機後資料也不會消失。',
            features: ['永久儲存資料', '保存作業系統', '儲存個人檔案']
        },
        motherboard: {
            title: '主機板',
            description: '主機板是電腦的基礎平台，連接所有的元件，讓它們能夠互相溝通。',
            features: ['連接所有元件', '提供電力', '資料傳輸通道']
        }
    };
    
    const componentData = info[component];
    const infoContainer = document.getElementById('component-info');
    
    if (componentData && infoContainer) {
        infoContainer.innerHTML = `
            <h4>${componentData.title}</h4>
            <p>${componentData.description}</p>
            <ul>
                ${componentData.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
        infoContainer.style.display = 'block';
    }
}

function completeAnatomyActivity() {
    alert('恭喜！你已經完成了電腦解剖課。\n\n現在你更了解電腦內部各個元件的功能了！');
    document.getElementById('activity-content').style.display = 'none';
}

// 系統優化活動
function startSystemOptimizationActivity() {
    alert('系統優化大師活動即將推出！\n\n在這個活動中，你將學習如何讓電腦運行得更快更穩定。');
}

// 電腦工廠活動
function startComputerFactoryActivity() {
    // 直接啟動已存在的電腦工廠模擬
    const factoryContainer = document.getElementById('factory-container');
    if (factoryContainer) {
        factoryContainer.style.display = 'block';
        resetFactorySimulation();
    }
}

// 資安守護者活動
function startSecurityGuardActivity() {
    alert('資安守護者活動即將推出！\n\n在這個活動中，你將學習如何保護電腦和個人資料的安全。');
}

// 網路探險家活動
function startNetworkExplorerActivity() {
    alert('網路探險家活動即將推出！\n\n在這個活動中，你將探索網際網路的奧秘和網路通訊原理。');
}

// 未來科技活動
function startFutureTechActivity() {
    alert('未來科技展望活動即將推出！\n\n在這個活動中，你將了解新興科技趨勢和未來發展方向。');
}

// 標記章節完成
function markChapterComplete(chapterId) {
    completedChapters.add(chapterId);
    updateProgress();
    
    // 更新章節卡片樣式
    const card = document.querySelector(`[data-chapter="${chapterId}"]`);
    if (card) {
        card.classList.add('completed');
    }
}

// 工具函數：顯示載入動畫
function showLoading(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `
            <div class="loading">
                <div class="spinner"></div>
            </div>
        `;
    }
}

// 工具函數：隱藏元素
function hideElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'none';
    }
}

// 工具函數：顯示元素
function showElement(elementId, displayType = 'block') {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = displayType;
    }
}
