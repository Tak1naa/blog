# Takina Portfolio & Blog

A high-performance personal engineering blog and interactive showcase built with **Hexo 7** and **Solitude 4**.

Features an aesthetic layout with a top hero title space, sticky sidebar, alternating horizontal post cards, and an isolated TypeScript enhancement layer for dynamic media and interactive visual components.

## Highlights & Features

- **Full-Screen Ambient Carousel & Video Background**: Smooth crossfading wallpapers with fallback handling and dark-mode overlay calibration.
- **Persistent Howler.js Audio Player**: Docked floating player supporting local audio tracks, synchronized LRC lyrics, Media Session API, and playlist controls.
- **Takina Companion v1**: Live2D idle poses plus three on-demand transparent video actions, jelly clicks, inertial dragging, gentle edge/Dock rebounds, and a keyboard-accessible action menu. Off by default.
- **Typography & Motion Atmosphere**: Typewriter subtitle cycling, ambient canvas cherry-blossom particles, and smooth layout transitions without breaking PJAX cycles.
- **Accessible & Scalable**: Fully responsive, dark mode aware, respects `prefers-reduced-motion`, and self-hosts core static vendor assets.

## Local Development

Prerequisites: Node.js 22 and pnpm 11.

```bash
pnpm install
pnpm dev
```

Production build and checks:

```bash
pnpm check
pnpm build
```

## 看板娘第一版 / Takina companion v1

2026-11-17：Live2D 外观已按标准图 `base-transparent.png` 重制，恢复长刘海、硬高光与原始服装配色，重新导出模型并保留现有动作。可编辑素材、补绘提示词、复现与备份位置见 [制作记录](artwork/live2d/takina-chibi/STATUS.md)。The model now follows the supplied standard artwork; existing video actions and interactions are preserved.

在底部 Dock 点击角色头像召唤泷奈。右键点击角色，或聚焦角色后按 `Shift+F10`，即可打开动作菜单；方向键选择，`Enter` 点播，`Esc` 关闭。点击有果冻回弹；直接拖动后松手会惯性滑动，并轻碰屏幕/Dock 边缘。默认自动回到 Dock，关闭菜单中的“松手后自动归位”后会记住自由放置的位置。短距离漫游默认关闭。

- **视频动作**：伸懒腰、认真思考、左右张望。采用用户提供视频的静音 VP9 Alpha 派生文件，总计约 2.53 MiB；按需加载一个播放器，播放结束恢复同一个 Live2D 模型。张望片段裁到 5.33 秒，避开原片后段出现的额外物体。素材处理记录位于 `artwork/pet-video-study/`，发布文件位于 `source/media/companion/`。
- **Live2D 动作**：眨眼、打瞌睡、开心晃动、招手、惊讶、不满、口型问候、休息与点击唤醒。随机动作间隔 16–26 秒；拖拽、菜单或工具面板操作期间暂缓随机点播。切换动作、拖拽、隐藏页面、关闭看板娘都会清理视频和相关交互。
- **天气与本地待办**：菜单打开工具面板。输入城市并提交后，才会请求 Open-Meteo；手选城市查询实况，不自动定位。待办仅保存在当前浏览器，可增删改、完成及设置到期时间；网页打开且角色清醒时提供气泡提醒。无聊天模型、服务端任务或系统通知。
- **兼容与隐私**：移动端和减少动态效果偏好下保持关闭。浏览器不支持透明视频或视频失败时使用 Live2D 表情回退。Chromium 已验证透明播放；Safari/WebKit 尚未实机验收。清除站点存储会删除本地待办与偏好；天气使用第三方服务，网络失败会显示重试提示。

配置入口为 `source/_data/experience.yml` 的 `live2d.videos`，交互实现为 `src/enhancements/companion*.ts`。设计参考 [dsh-pet](https://github.com/PC2005-cloud/dsh-pet) 的动作库交互方向，未引入其角色素材或运行服务。保留本项目已有 Live2D、Dock、音乐和评论架构。

For desktop visitors, summon Takina from the Dock and right-click (or press `Shift+F10` while focused) to choose actions. Three transparent clips complement the existing Live2D rig; gestures, random poses, sleep/wake and optional short roaming remain client-side. Weather is requested only after a city search; tasks and preferences stay in this browser. Video failure falls back to Live2D. Safari/WebKit remains unverified.

Build before previewing; the static server does not watch TypeScript changes:

```bash
pnpm build
python3 -m http.server 4014 --bind 127.0.0.1 --directory public
```

Companion-specific browser checks use their own loopback port and one worker:

```bash
pnpm exec playwright test tests/e2e/companion.spec.ts --config playwright.companion.config.ts --trace off
```

The browser fixture disables background particles, typewriter effects and carousel autoplay to isolate companion behavior under software WebGL. Production settings remain unchanged; this suite does not constitute full-site visual or performance acceptance.

If Playwright's bundled Chromium is unavailable, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to an installed Chromium executable. Run `pnpm exec vitest run --maxWorkers=2` on resource-constrained machines.

## 页脚访问统计

网站最底部显示“今日访问次数”和“累计访问次数”，随语言切换为中文或英文。数据来自[不蒜子](https://www.busuanzi.cc/doc.php)，按全站页面访问次数（PV）统计，包含刷新与 PJAX 页面切换；同一页面的重复生命周期事件不会重复上报。今日数据由统计服务每日归零，累计数据以该服务为该域名保存的记录为准，不能补回未接入期间的历史访问。

通过 `source/_data/visit_stats.yml` 的 `enabled` 开关控制。客户端按不蒜子 3.6.9 官方脚本的 POST 契约读取计数，不加载远程统计脚本；只发送当前域名和页面路径、来源站点域名，不发送 URL 查询参数或片段，也不使用 Cookie 或本地计数。第三方服务仍会接收到正常网络请求信息（包括 IP）。

`localhost`、IP 地址及无域名的本地预览不请求统计接口，数字显示“—”，悬停可查看说明。网络错误、超时或无效数据同样显示“—”，不伪造为 0；发布到受支持的正式域名后才能验收真实累计数据。服务当前还限制域名长度，接入要求以其文档和站点公告为准。

本地验证使用模拟统计响应，避免污染正式数据：`pnpm exec playwright test tests/e2e/visit-stats.spec.ts --config playwright.companion.config.ts --trace off`。覆盖桌面/移动端、浅深色、语言切换、PJAX 去重、接口失败和本地预览不计数。

## GitHub Pages

地址为 <https://tak1naa.github.io/blog/>，沿用仓库现有的 `blog-pages` 分支根目录发布。运行 `pnpm build:pages` 生成 `artifacts/pages/site/blog/`，将此目录的内容发布到该分支，包含 `.nojekyll`；源码继续保存在 `main`。构建会验证 `/blog/` 路径下的页面、资源和配置，`release.json` 记录对应源码提交。

Pages 配置位于 `deploy/_config.github-pages.yml`，与服务器部署配置独立。该版本保留本地音乐、Live2D、透明视频和访问统计；不请求 Pages 上不存在的音乐/评论 API。文章页提供返回服务器版参与评论的链接。访问统计仍依赖第三方服务，失败时显示“—”。

构建后的本地验收：`pnpm exec playwright test --config playwright.pages.config.ts`。线上验收可设置 `PAGES_BASE_URL=https://tak1naa.github.io/blog/` 使用相同测试。GitHub Pages 发布源码和流程说明见[官方文档](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。
