// script.js - 4mac Official Website

const translations = {
  en: {
    nav_home: "Home",
    nav_start: "Get Started",
    nav_perf: "Performance Explorer",
    nav_bench: "Community Benchmarks",
    nav_download: "Download",
    hero_title: "Local AI, <span class='hero-gradient'>no more waiting</span><br>on your Mac.",
    hero_sub: "macOS-native MLX server with smart caching. Claude Code, OpenClaw, and Cursor respond in 5 seconds, not 90.",
    btn_download: "Download DMG",
    btn_github: "View on GitHub &rarr;",
    lang_label: "EN",
    
    hero_stats_title: "Serving Stats",
    stat_lbl_total: "TOTAL TOKENS PROCESSED",
    stat_lbl_cached: "CACHED TOKENS",
    stat_lbl_eff: "CACHE EFFICIENCY",
    stat_lbl_prompt_tps: "tok/s prompt processing",
    stat_lbl_batching: "throughput with batching",
    stat_lbl_ttft: "TTFT from 2nd turn",
    stat_lbl_ssd: "SSD KV cache (no eviction)",

    why_badge: "WHY 4MAC",
    why_title: "Built for the way<br>agents actually work.",
    why_desc: "Coding agents invalidate the KV cache dozens of times per session. 4mac persists every cache block to SSD — so when the agent circles back to a previous prefix, it's restored from disk in milliseconds, not recomputed from scratch.",
    
    feat1_num: "01 — CORE",
    feat1_title: "Paged SSD KV caching",
    feat1_desc: "Cache blocks are persisted to disk in safetensors format. Two-tier architecture: hot blocks stay in RAM, cold blocks go to SSD with LRU policy. Previously seen prefixes are restored across requests and server restarts — never recomputed.",
    
    feat2_num: "02 — THROUGHPUT",
    feat2_title: "Continuous batching",
    feat2_desc: "Handles concurrent requests through mlx-lm's BatchGenerator. Up to 4.14x generation speedup at 8x concurrency. No more queuing behind a single request.",
    
    feat3_num: "03 — APP",
    feat3_title: "Native macOS menu bar app",
    feat3_desc: "Start, stop, and monitor the server from your menu bar. Web dashboard for model management, chat, and real-time metrics. Signed, notarized, with in-app auto-update. Not Electron.",
    
    feat4_num: "04 — MODELS",
    feat4_title: "Multi-model serving",
    feat4_desc: "LLM, VLM, embedding, and reranker models loaded simultaneously. LRU eviction when memory runs low. Browse and download models directly from the admin dashboard.",
    
    feat5_num: "05 — API",
    feat5_title: "OpenAI + Anthropic drop-in",
    feat5_desc: "Compatible with Claude Code, OpenClaw, Cursor, and any OpenAI-compatible client. Native /v1/messages Anthropic endpoint. Web dashboard generates the exact config command for each tool.",
    
    feat6_num: "06 — TOOLS",
    feat6_title: "Tool calling + MCP",
    feat6_desc: "Supports all major tool calling formats: JSON, Qwen, Gemma, GLM, MiniMax. MCP tool integration and tool result trimming for oversized outputs. Configurable per model.",

    perf_badge: "PERFORMANCE",
    perf_title: "Real numbers,<br>real hardware.",
    perf_desc: "All benchmarks on M3 Ultra 512GB. Single request and continuous batching across four popular models.",
    tbl_single: "Single request performance",
    tbl_batch: "Continuous batching",
    lbl_context: "CONTEXT",
    lbl_prompt_tps: "PROMPT TPS",
    lbl_token_tps: "TOKEN TPS",
    lbl_peak_mem: "PEAK MEM",
    lbl_batch: "BATCH",
    lbl_speedup: "SPEEDUP",
    
    quote_text: "\"The Qwen3.5 models running on 4mac is so fast that it makes running local AI on Mac worthwhile. It is so much faster than LMStudio and the tool calling is so much more reliable.\"",
    quote_author: "— GitHub comment, issue #62",

    faq_badge: "FAQ",
    faq_title: "Common questions.",
    faq_q1: "How is 4mac different from Ollama or LM Studio?",
    faq_a1: "4mac is built exclusively for Apple Silicon using the native MLX framework, maximizing Unified Memory bandwidth. Unlike Ollama and LM Studio (which rely on llama.cpp), 4mac provides a deeply integrated macOS native experience with Paged SSD KV caching for continuous coding agent sessions.",
    faq_q2: "What hardware do I need?",
    faq_a2: "Any Apple Silicon Mac (M1/M2/M3/M4 series). For larger 70B+ models, we recommend at least 64GB of Unified Memory.",
    faq_q3: "Does it work with Claude Code, OpenClaw, and Cursor?",
    faq_a3: "Yes. 4mac provides a drop-in API replacement for OpenAI and Anthropic natively. Just point your proxy URL to <code>http://localhost:8000/v1</code> and it works out of the box with full tool-calling support.",
    faq_q4: "Do I need to re-download my models?",
    faq_a4: "No! 4mac respects your existing LM Studio downloads folder. You can browse and load all your previously downloaded safe-tensors effortlessly.",
    faq_q5: "What models are supported?",
    faq_a5: "We support virtually all modern architectures uploaded to HuggingFace in MLX format, including Qwen, Llama 3, Mistral, GLM, MiniMax, and deep-seek.",

    gs_badge: "GET STARTED",
    gs_title: "Up and running<br>in two minutes.",
    gs_desc: "Download the DMG or install from source. Reuses your existing LM Studio model directory — no re-download needed.",
    gs_card1_title: "macOS App",
    gs_rec: "Recommended",
    gs_card1_desc: "Drag to Applications. The welcome screen walks you through model directory, server start, and first model download. Signed and notarized.",
    gs_card2_title: "From source",
    gs_card2_desc: "Requires Python 3.10+ and Apple Silicon. Connects to any OpenAI-compatible client on localhost:8000.",

    footer_desc: "LLM inference,<br>optimized for your Mac.",
    footer_doc: "Documentation",
    footer_rel: "Releases",
    footer_iss: "Issues"
  },
  zh: {
    nav_home: "首页",
    nav_start: "快速开始",
    nav_perf: "性能基准",
    nav_bench: "社区跑分",
    nav_download: "下载",
    hero_title: "本地 AI，<span class='hero-gradient'>极速无感</span><br>你的专属 Mac 引擎。",
    hero_sub: "macOS 原生 MLX 服务器，搭载持久化缓存架构。让 Claude Code、OpenClaw 和 Cursor 在 5 秒内极速响应，告别漫长等待。",
    btn_download: "下载 DMG",
    btn_github: "GitHub 源码 &rarr;",
    lang_label: "中文",
    
    hero_stats_title: "运行数据统计",
    stat_lbl_total: "历史处理 Token 数",
    stat_lbl_cached: "命中缓存 Token 数",
    stat_lbl_eff: "缓存命中率",
    stat_lbl_prompt_tps: "tok/s 提示词解析速度",
    stat_lbl_batching: "高并发吞吐提升率",
    stat_lbl_ttft: "多轮对话回滚首字时",
    stat_lbl_ssd: "持久化 SSD 缓存机制",

    why_badge: "技术优势",
    why_title: "专为真实业务中的<br>AI 智能体打造。",
    why_desc: "代码 Agent 每一次交互都会导致大量上下文刷新。4mac 将所有计算过的缓存块硬核持久化至 SSD — 当智能体回溯之前的代码分支时，立刻从固态硬盘获取毫秒级恢复，拒绝重新计算。",
    
    feat1_num: "01 — 核心架构",
    feat1_title: "分页型 SSD KV 缓存",
    feat1_desc: "动态双层内存树：高频热点盘踞在极其稀缺的统一内存中，冷区块按照 LRU 直接退化到 SSD 落盘。哪怕你的服务重启一百次，它依然能做到秒级回溯热加载，永不重算。",
    
    feat2_num: "02 — 极致吞吐",
    feat2_title: "高性能无缝连批处理",
    feat2_desc: "底层深入定制 mlx-lm 原生机制。当并发激增时（8路高压测试），依然强吃 4.14 倍的输出放大提升率处理能力。无需让你的任何代码指令在队列里白等。",
    
    feat3_num: "03 — 系统接入",
    feat3_title: "macOS 纯原生挂机应用",
    feat3_desc: "完美适配菜单栏潜伏机制，拒绝引入沉重的 Electron。一键启动图形化 Web 中控操作台，管理模型并洞悉全局脉络。完整适配 Apple 严格开发者公证防御系统。",
    
    feat4_num: "04 — 模型矩阵",
    feat4_title: "跨模态联合驱动挂载",
    feat4_desc: "语言处理、图片解读、文档重排模型...统统放肆并发。自带智能防 OOM 保护，当内存溢出将自动强制逐出旧模型，支持中控台一键秒入第三方 GGUF/Safetensors 等资产。",
    
    feat5_num: "05 — 协议兼容",
    feat5_title: "无缝替换 OpenAI 体系",
    feat5_desc: "完美适配最新的标准通信协议，内置原生 Anthropic /v1/messages。让 Cursor，Claude Code 等，改一行 <code>localhost</code> URL 即可接入！无痛无极直接连。",
    
    feat6_num: "06 — 生态融合",
    feat6_title: "史诗强度的工具调用转换",
    feat6_desc: "不挑食：兼容国内外所有大厂奇葩 Function Calling 嵌套 JSON 结构；天生支持 MCP 协议。对无法理解的超长输出直接冷血暴力截断纠正修复。",

    perf_badge: "跑分实测",
    perf_title: "真实硬件，<br>不掺水的战力面板。",
    perf_desc: "以下所有数据全部获取自一台 M3 Ultra 512GB。展示了主流厂商极限跑分与连续批处理能力。",
    tbl_single: "单路连接极限跑分数据",
    tbl_batch: "并发批处理吞吐效率",
    lbl_context: "上下文",
    lbl_prompt_tps: "提示词消化率",
    lbl_token_tps: "单字生成率",
    lbl_peak_mem: "显存极值",
    lbl_batch: "并发数",
    lbl_speedup: "吞吐量超速表现",
    
    quote_text: "“老天，Qwen3.5 模型跑在 4mac 上简直快得出奇，它让我终于觉得不用买云端卡了。相比那个动不动就抽风的 LMStudio，它的稳定性和工具调用的可信度彻底秒杀了市面上一切玩具。”",
    quote_author: "— Github 开发者社区热评, issue #62",

    faq_badge: "常见问题",
    faq_title: "一切疑问，在此终结。",
    faq_q1: "4mac 和 Ollama 或者 LM Studio 有什么本质区别？",
    faq_a1: "4mac 拥有绝对纯粹的 Apple Silicon 原生基因，它死死榨干的是统一内存的底线带宽。而不是像 Ollama 那些基于 llama.cpp 的通用开源方案。它是第一个完美内置 Paged SSD KV 终极加速的引擎。",
    faq_q2: "我需要什么样的 Mac 电脑配置去带动它运行？",
    faq_a2: "任何包含 M 芯架构（M1-M4 系列）机器绝对通用！如果你是个变态的数据狂人打算搞几十 B 的大块头，记得让你的运存维持在 64G 级别。",
    faq_q3: "可以直接跑 Cursor 和其它诸如 Claude Code 的 AI 客户端吗？",
    faq_a3: "废话，这叫原生态！只需要把你在它们软件里代理设置的那行破地址改成 <code>http://localhost:8000/v1</code> ，你马上拥有全世界最懂代码全自动输出的终极本地引擎！",
    faq_q4: "我要不要把我原先下载的模型重新用你们格式下载一遍？",
    faq_a4: "大可不必！你在 LM Studio 里下好的那些几百 GB 的巨剑碎片，我们直接在配置里精准索引全量复用，连格式都不用改直接光速拉起。",
    faq_q5: "你们支持哪些大模型？",
    faq_a5: "基本上所有从 HuggingFace 转换过 MLX 的核弹全支持。不仅限于 Qwen，无论是 Llama 系列还是国产荣光的 GLM，哪怕是最近炒上天的 DeepSeek，全吞噬全解析！",

    gs_badge: "快速启动",
    gs_title: "两分半钟，<br>本地智能觉醒。",
    gs_desc: "一键拖拽即可体验。它依然可以和原先其它框架的模型仓库完全共享，省去您重复漫长的等待。",
    gs_card1_title: "macOS 安装包",
    gs_rec: "满血推荐",
    gs_card1_desc: "跟其它软件一样拖入 Application。打开极简向导带你跨越所有模型路径、冷启门槛。通过极致安全的大厂公证体系，干干净净，无需折腾。",
    gs_card2_title: "极客开源编译",
    gs_card2_desc: "自己克隆库敲打 pip 指令，享受指尖跳动直接唤醒最强底层源码引擎的专属快感。",

    footer_desc: "让重度 AI 计算引擎，<br>在你的 Mac 里狂飙。",
    footer_doc: "高深文档入口",
    footer_rel: "最新发行版捕捉",
    footer_iss: "社区开卷与吐槽"
  },
  ja: {
    nav_home: "ホーム",
    nav_start: "はじめに",
    nav_perf: "ベンチマーク",
    nav_bench: "コミュニティ",
    nav_download: "ダウンロード",
    hero_title: "ローカルAI、<span class='hero-gradient'>待ち時間ゼロ</span><br>あなたのMacで。",
    hero_sub: "スマートキャッシュを備えた macOS ネイティブ MLX サーバー。Claude、OpenClaw、Cursor が 90 秒ではなく 5 秒で応答します。",
    btn_download: "DMGダウンロード",
    btn_github: "GitHubで見る &rarr;",
    lang_label: "日本語",
    
    hero_stats_title: "動作状況",
    stat_lbl_total: "処理済み総トークン数",
    stat_lbl_cached: "キャッシュヒット済み",
    stat_lbl_eff: "キャッシュ効率",
    stat_lbl_prompt_tps: "tok/s プロンプト処理",
    stat_lbl_batching: "バッチ処理のスループット",
    stat_lbl_ttft: "2ターン目からのTTFT",
    stat_lbl_ssd: "SSD KV キャッシュ",

    why_badge: "4MACのメリット",
    why_title: "エージェントの<br>実際の動作に合わせて構築。",
    why_desc: "コーディングエージェントは1セッションに数十回キャッシュを無効にします。4macはすべてのキャッシュブロックをSSDに保存し、エージェントが以前のプレフィックスに戻る際にミリ秒でディスクから復元します。",
    
    feat1_num: "01 — コア",
    feat1_title: "ページングSSD KVキャッシュ",
    feat1_desc: "キャッシュブロックをsafetensors形式でディスクに永続化。2層のアーキテクチャ: 高頻度ブロックはRAMに、低頻度はSSDにLRUポリシーで移行します。リクエスト間でもプレフィックスを復元します。",
    
    feat2_num: "02 — スループット",
    feat2_title: "連続バッチ処理",
    feat2_desc: "mlx-lmのバッチジェネレータを通じて並列リクエストを処理。8xの並行性で最大4.14倍の生成速度向上を実現します。単一リクエストの背後で待機することはありません。",
    
    feat3_num: "03 — アプリ",
    feat3_title: "ネイティブmacOSアプリ",
    feat3_desc: "メニューバーからサーバーの開始、停止、監視が可能。Electron不要の本格的なネイティブアプリケーション。モデル管理等のダッシュボードを搭載しています。",
    
    feat4_num: "04 — モデル",
    feat4_title: "マルチモデル・サービング",
    feat4_desc: "LLM、VLM、エンベディング、およびリランカ・モデルを同時にロード。管理ダッシュボードから直接モデルをダウンロード可能です。OOMを自動的に回避します。",
    
    feat5_num: "05 — API",
    feat5_title: "OpenAI互換のドロップイン",
    feat5_desc: "Claude Code、OpenClaw、Cursorなど、OpenAI互換クライアントとそのまま連携。ウェブから設定コマンドも生成されます。",
    
    feat6_num: "06 — ツール",
    feat6_title: "ツール呼び出しとMCP",
    feat6_desc: "JSON、Qwen、Gemma、GLM、MiniMax等の各種ツール呼び出しフォーマットをサポートし、MCPにも統合済みです。長すぎる結果のオートトリミング機能付き。",

    perf_badge: "パフォーマンス",
    perf_title: "実際の数字、<br>実際のハードウェア。",
    perf_desc: "すべてのベンチマークは M3 Ultra 512GB での測定。4つの人気モデルでのシングルリクエストと連続バッチ処理。",
    tbl_single: "単一リクエストパフォーマンス",
    tbl_batch: "連続バッチパフォーマンス",
    lbl_context: "コンテキスト",
    lbl_prompt_tps: "プロンプト TPS",
    lbl_token_tps: "トークン TPS",
    lbl_peak_mem: "ピークメモリ",
    lbl_batch: "バッチ",
    lbl_speedup: "高速化",
    
    quote_text: "「4macで実行されるQwen3.5モデルは非常に高速で、MacでローカルAIを実行する価値があります。LMStudioよりもはるかに安定しています。」",
    quote_author: "— GitHub コメント, issue #62",

    faq_badge: "FAQ",
    faq_title: "よくある質問",
    faq_q1: "OllamaやLM Studioとの違いは何ですか？",
    faq_a1: "4macはネイティブMLXフレームワークを使用しており、統合メモリ帯域幅を最大限に活用しています。ページングSSD KVキャッシュなどMac向けに専用に作られています。",
    faq_q2: "必要なハードウェアは何ですか？",
    faq_a2: "Apple Siliconを搭載したMac (M1/M2/M3/M4) であればすぐに開始できます。大規模なモデルには64GB以上をお勧めします。",
    faq_q3: "Cursorなどで使えますか？",
    faq_a3: "はい。OpenAI / Anthropicのドロップイン代替APIを提供しています。プロキシURLをローカルホストの <code>http://localhost:8000/v1</code> に向けるだけです。",
    faq_q4: "モデルを再ダウンロードする必要がありますか？",
    faq_a4: "いいえ！LM Studioの既存のダウンロードフォルダをそのまま読み込んで安全に再利用します。無駄なダウンロードは不要です。",
    faq_q5: "どのモデルに対応していますか？",
    faq_a5: "MLX形式に変換された主要な現代アーキテクチャ（Qwen, Llama 3, Mistral, GLM等）すべてに対応しています。",

    gs_badge: "使ってみる",
    gs_title: "2分間で<br>ローカルAIを起動。",
    gs_desc: "DMGをダウンロードするか、ソースコードから直接起動します。既存のLM Studioディレクトリを安全に再利用できます。",
    gs_card1_title: "macOS アプリ",
    gs_rec: "おすすめ",
    gs_card1_desc: "アプリケーションへのドラッグのみ。ようこそ画面で初回設定をサポートします。公証済み。",
    gs_card2_title: "ソースコードから",
    gs_card2_desc: "環境のあるデベロッパ向け。任意のOpenAI互換クライアントで連携可能です。",

    footer_desc: "あなたの Mac に最適化された<br>高火力LLM。",
    footer_doc: "ドキュメント",
    footer_rel: "リリース情報",
    footer_iss: "問題報告"
  }
};

function applyTranslation(langStr) {
  const dict = translations[langStr] || translations['en'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
  const labelEl = document.getElementById('current-lang-label');
  if (labelEl) {
    labelEl.textContent = dict['lang_label'];
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const langLinks = document.querySelectorAll('.lang-dropdown a');
  
  // Load saved lang or default to en
  let savedLang = localStorage.getItem('4mac_lang') || 'en';
  applyTranslation(savedLang);
  
  // Set initial active state
  langLinks.forEach(l => {
    if (l.getAttribute('data-lang') === savedLang) {
      l.classList.add('active');
    } else {
      l.classList.remove('active');
    }
  });

  langLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      langLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      const targetLang = link.getAttribute('data-lang');
      localStorage.setItem('4mac_lang', targetLang);
      applyTranslation(targetLang);
    });
  });

  fetch('https://api.github.com/repos/4claw/fourmac/releases/latest')
    .then(response => response.json())
    .then(data => {
      const versionElements = document.querySelectorAll('.latest-version');
      const downloadButtons = document.querySelectorAll('.download-btn');
      const version = data.tag_name || 'v0.2.22';
      versionElements.forEach(el => el.textContent = `Latest Release: ${version}`);
      const dmgAsset = data.assets?.find(a => a.name.endsWith('.dmg'));
      if (dmgAsset) {
        downloadButtons.forEach(btn => btn.href = dmgAsset.browser_download_url);
      }
    })
    .catch(error => {
      console.error('Error fetching release:', error);
      document.querySelectorAll('.latest-version').forEach(el => el.textContent = `v0.2.22`);
    });

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(otherItem => otherItem.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  const tabs = document.querySelectorAll('.tab');
  const tabPanes = document.querySelectorAll('.tab-pane');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const targetId = tab.getAttribute('data-target');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });
});
