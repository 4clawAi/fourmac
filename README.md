<div align="center">
  <h1>🚀 4mac: The Ultimate Local AI Engine for Apple Silicon</h1>
  <p><strong>Bypass the cloud. Stop waiting. Turn your Mac into an unfiltered inference powerhouse.</strong></p>

  <p>
    <a href="#"><img alt="macOS" src="https://img.shields.io/badge/macOS-15.0%2B-black?style=for-the-badge&logo=apple" /></a>
    <a href="#"><img alt="Architecture" src="https://img.shields.io/badge/Architecture-Apple_Silicon-blue?style=for-the-badge" /></a>
    <a href="#"><img alt="Status" src="https://img.shields.io/badge/Status-Stable_Release-success?style=for-the-badge" /></a>
  </p>
</div>

---

## 🌐 Welcome to the Future of Mac-Native AI

**4mac** is not just another wrapper for `llama.cpp`. It is a hyper-optimized, deeply integrated macOS AI engine built from the ground up to exploit the architectural marvel of unified memory on Apple Silicon. 

Designed for developers, hackers, and power users, 4mac instantly transforms any modern Mac into a dedicated AI backend server. Drop it into **OpenClaw, Cursor, Claude Code**, or any other agentic IDE, and watch it spit out code at terminal velocity.

> *"If you've ever felt the absolute pain of a 90-second wait time on LM Studio, 4mac is your cure."*

### ⚡ Why 4mac Destroys the Competition

- **Paged SSD KV Caching Tier**: When your massive 70B parameters eat up Unified Memory, 4mac doesn't crash or stutter. It implements a revolutionary dynamic LRU cache that seamlessly pages out dormant layers straight to the SSD at 7GB/s bandwidth limits, guaranteeing perpetual execution without OOM panics.
- **Microsecond Cold Starts**: Did your agent tool crash? 4mac maintains the state. Restarting inference pipelines and reloading model weights takes less than 3 seconds. It's so fast you won't even notice the server blinked.
- **Drop-in OpenAI Replacement**: Change exactly *one* line in your API calls: `http://localhost:8000/v1`. That's it. Full compatibility with complex, deeply nested Function Calling, Structured outputs, and parallel messaging schemas.
- **Zero-Friction Assets**: Plugs natively into your existing LM Studio or Ollama model directories. Don't redownload your hundred-gigabyte SafeTensors shards.

---

<div align="center">
  <h3>🔥 Ready to unleash the silicon beast?</h3>
  <a href="https://github.com/4clawAi/fourmac/releases">
    <img src="https://img.shields.io/badge/Download_Now-Latest_Release-0B0B0C?style=for-the-badge&logo=macos" alt="Download Now">
  </a>
</div>

<br><br>

---

<div align="center">
  <h2>🇨🇳 属于 Mac 极客的本地 AI 终极引擎</h2>
  <p><strong>脱离云端算力枷锁，把你的 Mac 原生统一内存榨取到极致。</strong></p>
</div>

**4mac** 绝对不是市面上随处可见的套壳 `llama.cpp` 玩具，它是第一个真正从底层直接调用苹果 **MLX 原生框架**、甚至深度融合了黑科技的骨灰级本地大模型推理服务器。

专为追求极致生产力的开发者打造，只需一键启动，4mac 能让满血的 Qwen 3.5、Llama 3 甚至 DeepSeek 在你的本地环境狂飙。完美接管 Cursor、OpenClaw 和 Claude Code 的代码补全与复杂指令思考，让你再也回不去动辄报错超时的那些劣质本地服务端。

### 🔪 为什么 4mac 能够一骑绝尘？

- **颠覆级的内存树与分页 SSD KV 缓存**：想单机跑 70B 显存疯狂溢出？别怕，4mac 搭载极其凶残的动态淘汰机制。当高频热点盘踞在极其稀缺的统一内存中时，冷区块会被强制按 LRU 算法退化至具有 7GB/s 极限带宽的硬盘池，做到哪怕并发拉满也绝对不 OOM！哪怕服务重启回溯秒速热加载，永不重算。
- **不讲道理的连批吞吐效率**：底层深入定制并行机制，在最高压多路并发测试下，依然强吃高达平时数倍 Token 生成消化率。哪怕你是多开 4 个终端让 AI Agent 同时狂奔帮你写代码，流式相应也全都不排队阻塞！
- **神级 OpenAI 接口伪装通信**：我们不造任何新轮子。不管国内外的闭源大模型代理软件写的有多奇葩，你只要把地址改为 `http://localhost:8000/v1`，它的复杂嵌套 JSON 与并发 Tool Calling 瞬间无缝兼容吃掉，冷血拦截纠正。
- **无痛接盘资产库**：用久了 LM Studio 攒了一堆 GGUF、SafeTensors？根本不需要重新下载你那几百个 GB 的巨量权重文件。4mac 拥有一键精确扫描挂载功能，光速拉起现成资产。

### 🏎️ 立刻挂载引擎

拒绝敲代码，拒绝编译那些报错成语字典一样的 C++ 依赖包。我们已经把这头狂野的怪兽装进了极简优雅、拥有 Apple 开发者官方签名公证双重防护的 `.dmg` 桌面应用程序中：

👉 **[点击这里进入 Releases 页面，直接下载最新桌面端 DMG 安装包。](https://github.com/4clawAi/fourmac/releases)** 

一键拖入 Applications 应用程序文件夹，点下启动键，去迎接属于你的算力主权时代。
