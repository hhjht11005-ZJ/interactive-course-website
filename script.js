// 章節數據定義
const chaptersData = [
    {
        id: 1,
        title: "系統平臺的「科技夥伴」",
        subtitle: "概念初探",
        description: "從日常使用的科技設備開始，探索系統平臺的奧秘！",
        gradient: "blue-gradient",
        icon: "fas fa-mobile-alt",
        keyPoints: [
            "認識不同類型的系統平臺",
            "了解系統平臺在日常生活中的應用",
            "探索各種科技設備的功能特色",
            "建立系統平臺的基本概念"
        ],
        activities: [
            {
                name: "我的科技夥伴",
                description: "討論日常使用的科技設備，了解它們的系統平臺特色",
                type: "discussion",
                component: "TechPartnerActivity"
            },
            {
                name: "平臺大富翁",
                description: "透過遊戲方式學習不同系統平臺的功能和特色",
                type: "game",
                component: "MonopolyGame"
            }
        ]
    },
    {
        id: 2,
        title: "揭秘「科技大腦」與「記憶寶庫」",
        subtitle: "系統平臺的內部世界",
        description: "深入電腦內部，認識CPU、記憶體和作業系統的運作！",
        gradient: "green-gradient",
        icon: "fas fa-brain",
        keyPoints: [
            "認識CPU的運作原理",
            "了解記憶體的種類和功能",
            "探索作業系統的重要性",
            "學習硬體與軟體的協作關係"
        ],
        activities: [
            {
                name: "電腦解剖課",
                description: "拆解電腦內部結構，認識各個重要組件",
                type: "interactive",
                component: "ComputerAnatomyActivity"
            },
            {
                name: "記憶體大作戰",
                description: "透過遊戲學習不同類型記憶體的特色和用途",
                type: "game",
                component: "MemoryBattleGame"
            },
            {
                name: "作業系統的超級任務",
                description: "體驗作業系統如何管理電腦資源",
                type: "interactive",
                component: "OSTaskActivity"
            }
        ]
    },
    {
        id: 3,
        title: "穿越「科技時光隧道」",
        subtitle: "系統平臺的演進之旅",
        description: "搭乘時光機，見證科技從大型電腦到智慧手機的驚人演變！",
        gradient: "yellow-gradient",
        icon: "fas fa-bolt",
        keyPoints: [
            "了解電腦發展的重要里程碑",
            "認識不同時代的系統平臺特色",
            "探索科技演進對生活的影響",
            "預測未來科技發展趨勢"
        ],
        activities: [
            {
                name: "科技演進拼圖",
                description: "拼湊科技發展的重要時刻，建立時間軸概念",
                type: "timeline",
                component: "TechTimelineActivity"
            },
            {
                name: "從命令列到觸控螢幕",
                description: "體驗不同時代的人機介面演變",
                type: "interactive",
                component: "InterfaceEvolutionActivity"
            },
            {
                name: "雲端與AI的未來想像",
                description: "探索雲端運算和人工智慧的未來可能性",
                type: "exploration",
                component: "FutureTechActivity"
            }
        ]
    },
    {
        id: 4,
        title: "探索「電腦心臟」的秘密",
        subtitle: "系統平臺的運作原理",
        description: "化身電腦工廠的工人，體驗資料在電腦內部的奇妙旅程！",
        gradient: "red-gradient",
        icon: "fas fa-microchip",
        keyPoints: [
            "理解資料處理的基本流程",
            "認識輸入、處理、輸出的概念",
            "了解電腦如何執行程式",
            "探索系統效能的影響因素"
        ],
        activities: [
            {
                name: "電腦工廠模擬",
                description: "模擬電腦內部的資料處理流程",
                type: "interactive",
                component: "ComputerFactorySimulation"
            },
            {
                name: "試算表任務",
                description: "透過試算表操作理解資料處理概念",
                type: "interactive",
                component: "SpreadsheetTaskActivity"
            }
        ]
    },
    {
        id: 5,
        title: "「電腦健康檢查」大師",
        subtitle: "資源管理與效能優化",
        description: "成為電腦醫生，學會診斷和優化電腦效能！",
        gradient: "purple-gradient",
        icon: "fas fa-desktop",
        keyPoints: [
            "學習監控系統資源使用情況",
            "了解影響電腦效能的因素",
            "掌握基本的系統優化技巧",
            "培養良好的電腦使用習慣"
        ],
        activities: [
            {
                name: "我是電腦偵探",
                description: "診斷電腦問題，找出效能瓶頸",
                type: "interactive",
                component: "ComputerDetectiveActivity"
            },
            {
                name: "資源管理小劇場",
                description: "透過角色扮演學習資源管理概念",
                type: "interactive",
                component: "ResourceManagementActivity"
            }
        ]
    }
];

// 全域變數
let currentChapter = 1;
let gameState = {
    currentPosition: 0,
    score: 0,
    currentQuestion: null
};

// 平臺大富翁遊戲數據
const platforms = [
    {
        name: "智慧型手機",
        icon: "📱",
        functions: ["通話", "拍照", "導航", "音樂播放", "影片觀看", "社交媒體", "購物", "語音助理", "天氣查詢", "電子書閱讀"],
        correctAnswers: ["通話", "拍照", "導航", "音樂播放", "影片觀看", "社交媒體"]
    },
    {
        name: "筆記型電腦", 
        icon: "💻",
        functions: ["文書處理", "影片編輯", "電子書閱讀", "繪圖設計", "語音助理", "天氣查詢", "新聞播報", "提醒", "線上會議", "程式設計"],
        correctAnswers: ["文書處理", "影片編輯", "繪圖設計", "線上會議", "程式設計"]
    },
    {
        name: "遊戲主機",
        icon: "🎮", 
        functions: ["遊戲娛樂", "串流影片", "線上對戰", "VR體驗", "音樂播放", "社交功能", "購物", "語音助理", "天氣查詢", "電子書閱讀"],
        correctAnswers: ["遊戲娛樂", "串流影片", "線上對戰", "VR體驗", "音樂播放"]
    },
    {
        name: "伺服器",
        icon: "🖥️",
        functions: ["資料儲存", "網站託管", "資料庫管理", "雲端服務", "網路安全", "備份服務", "遊戲娛樂", "串流影片", "線上對戰", "VR體驗"],
        correctAnswers: ["資料儲存", "網站託管", "資料庫管理", "雲端服務", "網路安全", "備份服務"]
    },
    {
        name: "平板電腦",
        icon: "📟",
        functions: ["電子書閱讀", "繪圖設計", "影片觀看", "遊戲", "工作", "創作", "購物", "社交媒體", "學習", "娛樂"],
        correctAnswers: ["電子書閱讀", "繪圖設計", "影片觀看", "遊戲", "工作", "創作"]
    },
    {
        name: "智慧音箱",
        icon: "🔊",
        functions: ["音樂播放", "語音助理", "天氣查詢", "新聞播報", "提醒", "智慧家居控制", "上網", "影片觀看", "電子書閱讀", "遊戲"],
        correctAnswers: ["音樂播放", "語音助理", "天氣查詢", "新聞播報", "提醒", "智慧家居控制"]
    }
];

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
                        <p>雲端運算和AI技術興起</p>
                    </div>
                </div>
            </div>
            
            <div class="activity-completion">
                <button onclick="completeActivity()" class="complete-button">完成時光旅行</button>
            </div>
        </div>
    `;
    
    showActivityContent(activityHTML);
}

// 我的科技夥伴活動
function startTechPartnerActivity() {
    const activityHTML = `
        <div class="tech-partner-activity">
            <h3>🤖 我的科技夥伴</h3>
            <p>讓我們一起討論日常生活中使用的科技設備，了解它們的特色和功能！</p>
            
            <div class="discussion-topics">
                <div class="topic-card" onclick="selectTopic('mobile')">
                    <div class="topic-icon">📱</div>
                    <h4>行動裝置</h4>
                    <p>智慧型手機、平板電腦、智慧手錶</p>
                </div>
                
                <div class="topic-card" onclick="selectTopic('computer')">
                    <div class="topic-icon">💻</div>
                    <h4>電腦設備</h4>
                    <p>桌上型電腦、筆記型電腦、Chromebook</p>
                </div>
                
                <div class="topic-card" onclick="selectTopic('entertainment')">
                    <div class="topic-icon">🎮</div>
                    <h4>娛樂設備</h4>
                    <p>遊戲主機、智慧電視、VR頭盔</p>
                </div>
            </div>
            
            <div id="topic-discussion" style="display: none;">
                <h4>討論內容</h4>
                <div id="discussion-content"></div>
                <button onclick="completeDiscussion()" class="complete-button">完成討論</button>
            </div>
        </div>
    `;
    
    showActivityContent(activityHTML);
}

function selectTopic(topicType) {
    const discussions = {
        mobile: "行動裝置讓我們隨時隨地保持連線，你最常用手機做什麼呢？",
        computer: "電腦是學習和工作的好夥伴，你覺得電腦最厲害的地方是什麼？",
        entertainment: "娛樂設備讓我們的休閒時光更精彩，你最喜歡哪種娛樂方式？"
    };
    
    document.getElementById('topic-discussion').style.display = 'block';
    document.getElementById('discussion-content').innerHTML = `
        <p>${discussions[topicType]}</p>
        <textarea placeholder="在這裡分享你的想法..." rows="4" style="width: 100%; margin: 10px 0;"></textarea>
    `;
}

function completeDiscussion() {
    alert('太棒了！你已經完成了科技夥伴的討論活動！');
    hideActivityContent();
}

// 記憶體大作戰遊戲
function startMemoryBattleGame() {
    const activityHTML = `
        <div class="memory-battle-game">
            <h3>🧠 記憶體大作戰</h3>
            <p>挑戰不同類型的記憶體任務，成為記憶體管理大師！</p>
            
            <div class="memory-types">
                <div class="memory-card" onclick="selectMemoryType('RAM')">
                    <div class="memory-icon">⚡</div>
                    <h4>RAM 隨機存取記憶體</h4>
                    <p>快速但暫時的記憶體</p>
                </div>
                
                <div class="memory-card" onclick="selectMemoryType('ROM')">
                    <div class="memory-icon">🔒</div>
                    <h4>ROM 唯讀記憶體</h4>
                    <p>永久但無法修改的記憶體</p>
                </div>
                
                <div class="memory-card" onclick="selectMemoryType('Storage')">
                    <div class="memory-icon">💾</div>
                    <h4>儲存裝置</h4>
                    <p>大容量的永久儲存空間</p>
                </div>
            </div>
            
            <div id="memory-challenge" style="display: none;">
                <h4>記憶體挑戰</h4>
                <div id="challenge-content"></div>
                <div class="challenge-timer">時間: <span id="timer">30</span> 秒</div>
                <button onclick="completeMemoryChallenge()" class="complete-button">完成挑戰</button>
            </div>
        </div>
    `;
    
    showActivityContent(activityHTML);
}

function selectMemoryType(memoryType) {
    const challenges = {
        RAM: {
            title: "RAM 速度挑戰",
            content: "快速記住這些數字序列：7, 3, 9, 1, 5, 8",
            tasks: ["記住數字順序", "在10秒內重複序列", "解釋RAM的特色"]
        },
        ROM: {
            title: "ROM 穩定性測試", 
            content: "ROM儲存了電腦的基本啟動程式",
            tasks: ["了解ROM的用途", "識別ROM的特性", "比較ROM與RAM的差異"]
        },
        Storage: {
            title: "儲存空間管理",
            content: "管理1TB硬碟的檔案分配",
            tasks: ["分類不同檔案類型", "計算空間使用率", "規劃備份策略"]
        }
    };
    
    const challenge = challenges[memoryType];
    document.getElementById('memory-challenge').style.display = 'block';
    document.getElementById('challenge-content').innerHTML = `
        <h5>${challenge.title}</h5>
        <p>${challenge.content}</p>
        <ul>
            ${challenge.tasks.map(task => `<li>${task}</li>`).join('')}
        </ul>
    `;
    
    // 啟動計時器
    let timeLeft = 30;
    const timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('時間到！挑戰結束！');
        }
    }, 1000);
}

function completeMemoryChallenge() {
    alert('恭喜！你已經完成記憶體大作戰！');
    hideActivityContent();
}

// 電腦工廠模擬
function startComputerFactorySimulation() {
    const activityHTML = `
        <div class="computer-factory-simulation">
            <h3>🏭 電腦工廠模擬</h3>
            <p>體驗資料在電腦內部的處理流程，了解各個組件如何協同工作！</p>
            
            <div class="factory-layout">
                <div class="factory-unit" id="input-unit">
                    <div class="unit-icon">📥</div>
                    <h4>輸入單元</h4>
                    <p>接收外部資料</p>
                    <div class="unit-status">待機中</div>
                </div>
                
                <div class="factory-unit" id="memory-unit">
                    <div class="unit-icon">🧠</div>
                    <h4>記憶體單元</h4>
                    <p>暫存處理資料</p>
                    <div class="unit-status">待機中</div>
                </div>
                
                <div class="factory-unit" id="cpu-unit">
                    <div class="unit-icon">⚙️</div>
                    <h4>處理器單元</h4>
                    <p>執行運算處理</p>
                    <div class="unit-status">待機中</div>
                </div>
                
                <div class="factory-unit" id="storage-unit">
                    <div class="unit-icon">💾</div>
                    <h4>儲存單元</h4>
                    <p>永久保存資料</p>
                    <div class="unit-status">待機中</div>
                </div>
                
                <div class="factory-unit" id="output-unit">
                    <div class="unit-icon">📤</div>
                    <h4>輸出單元</h4>
                    <p>顯示處理結果</p>
                    <div class="unit-status">待機中</div>
                </div>
            </div>
            
            <div class="simulation-controls">
                <button onclick="startSimulation('document')" class="sim-button">模擬：處理文件</button>
                <button onclick="startSimulation('game')" class="sim-button">模擬：執行遊戲</button>
                <button onclick="resetSimulation()" class="reset-button">重置模擬</button>
            </div>
            
            <div id="simulation-log">
                <h4>處理日誌</h4>
                <div id="log-content">等待開始模擬...</div>
            </div>
        </div>
    `;
    
    showActivityContent(activityHTML);
}

function startSimulation(taskType) {
    const tasks = {
        document: {
            name: "文件處理",
            steps: [
                "輸入單元：接收文字輸入",
                "記憶體單元：載入文件到RAM",
                "處理器單元：執行文字處理程式",
                "記憶體單元：暫存編輯結果",
                "儲存單元：保存文件到硬碟",
                "輸出單元：在螢幕上顯示結果"
            ]
        },
        game: {
            name: "遊戲執行",
            steps: [
                "輸入單元：接收遊戲控制指令",
                "記憶體單元：載入遊戲資料",
                "處理器單元：計算遊戲邏輯和圖形",
                "記憶體單元：更新遊戲狀態",
                "儲存單元：保存遊戲進度",
                "輸出單元：顯示遊戲畫面和音效"
            ]
        }
    };
    
    const task = tasks[taskType];
    let stepIndex = 0;
    
    document.getElementById('log-content').innerHTML = `<p>開始執行：${task.name}</p>`;
    
    const simulationInterval = setInterval(() => {
        if (stepIndex < task.steps.length) {
            // 更新對應單元狀態
            const unitIds = ['input-unit', 'memory-unit', 'cpu-unit', 'storage-unit', 'output-unit'];
            const currentUnitIndex = stepIndex % unitIds.length;
            
            // 重置所有單元狀態
            unitIds.forEach(id => {
                const unit = document.getElementById(id);
                if (unit) {
                    unit.querySelector('.unit-status').textContent = '待機中';
                    unit.classList.remove('active');
                }
            });
            
            // 啟動當前單元
            const currentUnit = document.getElementById(unitIds[currentUnitIndex]);
            if (currentUnit) {
                currentUnit.querySelector('.unit-status').textContent = '處理中...';
                currentUnit.classList.add('active');
            }
            
            // 更新日誌
            document.getElementById('log-content').innerHTML += `<p>${stepIndex + 1}. ${task.steps[stepIndex]}</p>`;
            
            stepIndex++;
        } else {
            clearInterval(simulationInterval);
            document.getElementById('log-content').innerHTML += `<p><strong>✅ ${task.name}完成！</strong></p>`;
            
            // 重置所有單元狀態
            ['input-unit', 'memory-unit', 'cpu-unit', 'storage-unit', 'output-unit'].forEach(id => {
                const unit = document.getElementById(id);
                if (unit) {
                    unit.querySelector('.unit-status').textContent = '完成';
                    unit.classList.remove('active');
                    unit.classList.add('completed');
                }
            });
        }
    }, 1500);
}

function resetSimulation() {
    const unitIds = ['input-unit', 'memory-unit', 'cpu-unit', 'storage-unit', 'output-unit'];
    unitIds.forEach(id => {
        const unit = document.getElementById(id);
        if (unit) {
            unit.querySelector('.unit-status').textContent = '待機中';
            unit.classList.remove('active', 'completed');
        }
    });
    
    document.getElementById('log-content').innerHTML = '等待開始模擬...';
}

// 平臺大富翁遊戲
function startMonopolyGame() {
    const activityHTML = `
        <div class="monopoly-game">
            <h3>🎲 平臺大富翁</h3>
            <p>擲骰子在不同的系統平臺間移動，回答問題來獲得分數！</p>
            
            <div class="game-board">
                ${platforms.map((platform, index) => `
                    <div class="platform-space" data-platform="${index}">
                        <div class="platform-icon">${platform.icon}</div>
                        <div class="platform-name">${platform.name}</div>
                        ${index === gameState.currentPosition ? '<div class="player-piece">🚀</div>' : ''}
                    </div>
                `).join('')}
            </div>
            
            <div class="game-controls">
                <button onclick="rollDice()" class="dice-button" id="dice-button">
                    🎲 擲骰子
                </button>
                <div class="game-score">分數: <span id="game-score">${gameState.score}</span></div>
            </div>
            
            <div id="question-panel" style="display: none;">
                <h4 id="question-title"></h4>
                <p id="question-text"></p>
                <div id="question-options"></div>
                <button onclick="submitAnswer()" id="submit-answer" style="display: none;">提交答案</button>
            </div>
            
            <div id="result-panel" style="display: none;">
                <h4 id="result-title"></h4>
                <p id="result-text"></p>
                <button onclick="continueGame()" class="continue-button">繼續遊戲</button>
            </div>
        </div>
    `;
    
    showActivityContent(activityHTML);
}

function rollDice() {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    gameState.currentPosition = (gameState.currentPosition + diceValue) % platforms.length;
    
    // 更新棋盤顯示
    document.querySelectorAll('.player-piece').forEach(piece => piece.remove());
    const currentSpace = document.querySelector(`[data-platform="${gameState.currentPosition}"]`);
    if (currentSpace) {
        currentSpace.innerHTML += '<div class="player-piece">🚀</div>';
    }
    
    // 顯示問題
    showQuestion();
}

function showQuestion() {
    const currentPlatform = platforms[gameState.currentPosition];
    gameState.currentQuestion = currentPlatform;
    
    document.getElementById('question-panel').style.display = 'block';
    document.getElementById('question-title').textContent = `${currentPlatform.icon} ${currentPlatform.name}`;
    document.getElementById('question-text').textContent = `請選擇 ${currentPlatform.name} 的主要功能：`;
    
    const optionsHTML = currentPlatform.functions.map(func => `
        <label class="option-label">
            <input type="checkbox" value="${func}" onchange="updateSubmitButton()">
            ${func}
        </label>
    `).join('');
    
    document.getElementById('question-options').innerHTML = optionsHTML;
    document.getElementById('submit-answer').style.display = 'none';
}

function updateSubmitButton() {
    const checkedOptions = document.querySelectorAll('#question-options input:checked');
    document.getElementById('submit-answer').style.display = checkedOptions.length > 0 ? 'block' : 'none';
}

function submitAnswer() {
    const checkedOptions = document.querySelectorAll('#question-options input:checked');
    const selectedFunctions = Array.from(checkedOptions).map(option => option.value);
    
    let correctCount = 0;
    let reasonableCount = 0;
    
    selectedFunctions.forEach(func => {
        if (gameState.currentQuestion.correctAnswers.includes(func)) {
            correctCount++;
        } else if (checkReasonableAnswer(func, gameState.currentQuestion.name)) {
            reasonableCount++;
        }
    });
    
    // 計算分數（更寬鬆的評分）
    const totalSelected = selectedFunctions.length;
    const scoreGained = Math.max(0, (correctCount * 10) + (reasonableCount * 5) - Math.max(0, (totalSelected - correctCount - reasonableCount) * 2));
    
    gameState.score += scoreGained;
    document.getElementById('game-score').textContent = gameState.score;
    
    // 顯示結果
    showResult(correctCount, reasonableCount, totalSelected, scoreGained);
}

function showResult(correctCount, reasonableCount, totalSelected, scoreGained) {
    document.getElementById('question-panel').style.display = 'none';
    document.getElementById('result-panel').style.display = 'block';
    
    let resultTitle, resultText;
    
    if (correctCount >= totalSelected * 0.7) {
        resultTitle = "🎉 太棒了！";
        resultText = `你對 ${gameState.currentQuestion.name} 的了解很深入！獲得 ${scoreGained} 分。`;
    } else if (correctCount + reasonableCount >= totalSelected * 0.5) {
        resultTitle = "👍 不錯！";
        resultText = `你的答案很有道理！獲得 ${scoreGained} 分。繼續加油！`;
    } else {
        resultTitle = "💪 繼續努力！";
        resultText = `每個平臺都有它的特色功能，獲得 ${scoreGained} 分。多探索就會更了解！`;
    }
    
    document.getElementById('result-title').textContent = resultTitle;
    document.getElementById('result-text').textContent = resultText;
}

function continueGame() {
    document.getElementById('result-panel').style.display = 'none';
    
    if (gameState.score >= 100) {
        alert('🏆 恭喜！你已經成為平臺大富翁冠軍！');
        hideActivityContent();
        gameState = { currentPosition: 0, score: 0, currentQuestion: null };
    }
}

// 通用活動函數
function completeActivity() {
    alert('🎉 恭喜完成活動！你學到了很多有用的知識！');
    hideActivityContent();
}

// 顯示活動內容
function showActivityContent(html) {
    const activityContent = document.getElementById('activity-content');
    if (activityContent) {
        activityContent.innerHTML = html;
        activityContent.style.display = 'block';
        
        // 隱藏活動列表
        const activitiesContent = document.getElementById('activities-content');
        if (activitiesContent) {
            activitiesContent.style.display = 'none';
        }
    }
}

// 隱藏活動內容
function hideActivityContent() {
    const activityContent = document.getElementById('activity-content');
    if (activityContent) {
        activityContent.style.display = 'none';
    }
    
    // 顯示活動列表
    const activitiesContent = document.getElementById('activities-content');
    if (activitiesContent) {
        activitiesContent.style.display = 'block';
    }
}

// 啟動通用活動
function startGenericActivity(component) {
    switch(component) {
        case 'TechPartnerActivity':
            startTechPartnerActivity();
            break;
        case 'MonopolyGame':
            startMonopolyGame();
            break;
        case 'MemoryBattleGame':
            startMemoryBattleGame();
            break;
        case 'ComputerFactorySimulation':
            startComputerFactorySimulation();
            break;
        case 'TechTimelineActivity':
            startTechTimelineActivity();
            break;
        case 'ComputerAnatomyActivity':
        case 'OSTaskActivity':
        case 'InterfaceEvolutionActivity':
        case 'FutureTechActivity':
        case 'SpreadsheetTaskActivity':
        case 'ComputerDetectiveActivity':
        case 'ResourceManagementActivity':
            startDefaultActivity(component);
            break;
        default:
            startDefaultActivity(component);
    }
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
    }
    
    // 根據章節ID載入對應內容
    loadChapterContent(chapterId);
}

// 載入章節內容
function loadChapterContent(chapterId) {
    const chapter = chaptersData.find(c => c.id === chapterId);
    if (!chapter) return;
    
    // 更新章節標題和描述
    const titleElement = document.getElementById('chapter-title-large');
    const subtitleElement = document.getElementById('chapter-subtitle-large');
    const descriptionElement = document.getElementById('chapter-description-full');
    
    if (titleElement) titleElement.textContent = chapter.title;
    if (subtitleElement) subtitleElement.textContent = chapter.subtitle;
    if (descriptionElement) descriptionElement.textContent = chapter.description;
    
    // 更新章節圖標
    const chapterIcon = document.getElementById('chapter-icon-large');
    if (chapterIcon) {
        chapterIcon.className = `chapter-icon-large ${chapter.gradient}`;
        chapterIcon.innerHTML = `<i class="${chapter.icon}"></i>`;
    }
    
    // 載入學習目標
    const objectivesList = document.getElementById('learning-objectives-list');
    if (objectivesList) {
        objectivesList.innerHTML = chapter.keyPoints.map(point => 
            `<li class="objective-item">${point}</li>`
        ).join('');
    }
    
    // 載入活動預覽
    const activityOverview = document.getElementById('activity-overview-list');
    if (activityOverview) {
        activityOverview.innerHTML = chapter.activities.map(activity => `
            <div class="activity-preview-card">
                <h4>${activity.name}</h4>
                <p>${activity.description}</p>
                <span class="activity-type-badge">${getActivityTypeText(activity.type)}</span>
            </div>
        `).join('');
    }
    
    // 載入互動活動
    const activitiesList = document.getElementById('activities-content');
    if (activitiesList) {
        activitiesList.innerHTML = `
            <h2><i class="fas fa-gamepad"></i> 互動活動</h2>
            ${chapter.activities.map(activity => `
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
            `).join('')}
        `;
    }
    
    // 載入重點概念
    const conceptsList = document.getElementById('concepts-list');
    if (conceptsList) {
        conceptsList.innerHTML = chapter.keyPoints.map(point => 
            `<div class="concept-item">
                <i class="fas fa-check-circle"></i>
                <span>${point}</span>
            </div>`
        ).join('');
    }
    
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
function goHome() {
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
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // 移除所有標籤的 active 狀態
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // 顯示選中的標籤內容
    const targetPanel = document.getElementById(`${tabName}-tab`);
    if (targetPanel) {
        targetPanel.classList.add('active');
    }
    
    // 設置選中的標籤為 active
    const targetButton = document.querySelector(`[data-tab="${tabName}"]`);
    if (targetButton) {
        targetButton.classList.add('active');
    }
    
    // 如果切換到活動標籤，確保顯示活動列表
    if (tabName === 'activities') {
        hideActivityContent();
    }
}

// 頁面載入完成後初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('系統平臺探險記已載入完成！');
    
    // 初始化進度條
    updateProgress();
});

// 更新學習進度
function updateProgress() {
    const completedChapters = 0; // 這裡可以根據實際完成情況來更新
    const totalChapters = chaptersData.length;
    const progressPercentage = (completedChapters / totalChapters) * 100;
    
    const progressFill = document.getElementById('overall-progress');
    const completedCount = document.getElementById('completed-count');
    
    if (progressFill) {
        progressFill.style.width = `${progressPercentage}%`;
    }
    
    if (completedCount) {
        completedCount.textContent = completedChapters;
    }
}
