# Takina Ying

基于 Hexo 7 与 Solitude 4 的个人博客。首页仅参考 Reimu 的布局关系：上方独立站名区、左侧侧栏和交替横向文章卡片；主题组件、视觉风格及站点架构仍是 Solitude。动态媒体由独立 TypeScript 增强层实现，不修改主题包源码。

## 功能

- 全屏壁纸轮播与静音背景视频，失败自动回退。
- Howler.js 常驻音乐播放器、本地曲目、LRC、Media Session 与网易云歌单桥接。
- Live2D 看板娘，支持多模型、提示语、直接拖动模型及位置记忆和完整销毁。
  看板娘现默认关闭：右下角“动态体验”中可独立开启，偏好保存在浏览器；未开启时不下载运行库、模型或贴图。
  默认泷奈模型使用哑光原画、独立透明刘海、完整后发底图及独立脖子和前／后发物理；以后领口为枢轴斜吊约28°，四肢软关节随动、松手阻尼复位。悬停／聚焦轮换八组表情，包含独立口腔和说话开合，离开恢复。四肢为肩髋锚点的网格软变形，并非完整刚体／布料模拟。发片有受真实网格透明度遮罩的可移动蓝紫柔光，页面采用同色系静态环境光。
- ACG 打字副标题与 Canvas 樱花效果。仅轮播本地审核的作品台词；有日语原文的条目显示双语，不接入随机语料 API。
- Solitude PJAX 生命周期适配，动态组件不会重复初始化。
- Waline + PostgreSQL 自托管评论。
- 本地搜索。
- 手机端与 `prefers-reduced-motion` 自动降级。

## 本地开发

要求 Node.js 22 和 pnpm 11。

```bash
pnpm install
pnpm dev
```

生产构建：

```bash
pnpm check
```

构建结果位于 `public/`。如果只需快速预览：

```bash
pnpm build
pnpm exec hexo server --static
```

`localhost:4000` 是本地预览，不需要 Git push。修改后必须重新构建；构建过滤器会给增强层 CSS／JS 添加内容哈希版本号，避免刷新后继续使用旧入口资源。已经打开的页面需要重新加载，PJAX 跳转不会重新初始化常驻增强层。

## 个性化

上线前至少修改：

1. `_config.yml`：站点 URL、标题、作者和基础元数据。
2. `_config.solitude.yml`：导航、头像、侧边栏、评论、搜索和主题选项。
3. `source/_data/experience.yml`：壁纸、视频、音乐、Live2D、台词来源和装饰效果。
4. `source/about/index.md`：个人介绍。
5. `.env`：部署域名、数据库密码、Waline JWT 和网易云歌单 ID。

动态配置在 Hexo 构建阶段用 Zod 校验。媒体地址必须是站内绝对路径或 HTTP(S) URL，错误配置会直接使构建失败。

### 本轮设计取舍

参考 `../design-md/linear.app/DESIGN.md` 的文字层级、紧凑字距、间距尺度和克制阴影，并用 design-taste-frontend 与 Impeccable 审查。只借用这些原则，不把博客换成 Linear UI：保留蓝紫／黑色、角色背景、玻璃卡片、Solitude 排版和动态功能。

主标题改为600字重与紧凑字距；标题及双语台词居中，日语在上且略大，中文在下，出处单独显示；完整台词停留5秒。矩形组件统一10px圆角，头像与音乐封面仍为圆形。推荐列表按明暗主题使用统一文字色，前景粒子降低透明度。手机不初始化粒子 Worker／看板娘，动效总开关销毁并可重新创建桌面看板娘。

后续修订增加移动播放器闲置封面折叠态，点击后保留完整控制；评论色彩统一蓝紫，文章阅读宽度限制75ch，深色版权区文字沿用统一前景色。推荐区两条内容按可用空间布局，不再留下大片空白。远程花卉演示视频应换成与泷奈主题一致的素材，后端评论和正式容器部署需另行验收。

2026-10-05本地手机模拟 Lighthouse：Performance 48，Accessibility 96，Best Practices 96，CLS 0.358，未达到性能90／CLS0.1目标。测试使用未压缩的 Python 静态服务器，不代表生产 Nginx 分数；报告指出阻塞样式和文本压缩问题。首屏位移需单独定位修复，不能用截图无溢出来替代。完整报告和三视口明暗截图保存在 `artifacts/qa/2026-10-05/`。本轮功能回归19通过、15设备限定跳过，16单测通过。

后续 Live2D／光照修订：18单测通过，浏览器20通过／16设备限定跳过，新增原始MOC脖子与后发独立网格检查。最新手机 Lighthouse Performance43、Accessibility96、Best Practices96、CLS0.3576，性能目标仍未达到；不能用单次差异归因光照。新截图与原始报告见 `artifacts/qa/2026-10-05/live2d-lighting/RESULTS.md`。

2026-10-06最新修订：20单测通过；UI全量回归22通过／18设备限定跳过，静态标题修复后针对性回归11通过／9跳过，最终三视口明暗截图通过。手机Lighthouse Performance62／Accessibility96／Best Practices96，CLS0.000717，LCP6.45s：CLS达标，性能90目标仍未达到。新版分层、悬停表情、斜吊拖拽及剩余限制见 `artifacts/qa/2026-10-05/live2d-v3/RESULTS.md`；以上旧记录均为历史测量，不代表最新状态。

### 素材替换路径

当前已应用井之上泷奈主题：官方头像、制服立绘、水族馆及行动场景集中放在 `source/media/takina/`。完整来源、尺寸与校验值见该目录的 `SOURCES.md`；站内 `/credits/` 展示来源。首页已移除标题右侧立绘（素材文件保留），标题和双语副标题居中。

把新文件放进 `source/media/`，在 `source/_data/experience.yml` 或 `_config.solitude.yml` 中改为对应的 `/media/...` 地址，再运行 `pnpm build`。`public/` 是生成目录，不要直接在里面修改素材。

| 素材 | 当前文件或配置 | 修改方法 |
| --- | --- | --- |
| 全屏壁纸 | `source/media/takina/aquarium.jpg`、`night-action.jpg` | 可替换为同名文件，或放入新图片并修改 `experience.yml` 的 `background.wallpapers`；`alt` 同步改为图片描述。手机及减少动态模式仅加载第一张。 |
| 背景视频及封面 | `experience.yml` 的 `background.video.sources`、`poster`；当前 poster 为 `source/media/takina/aquarium.jpg` | 目前 MP4 是远程花卉演示地址，并非动画素材。将自己的 MP4/WebM 放进 `source/media/wallpapers/`，修改 `src` 并指定静态 poster；移动端与减少动态模式不会加载视频。 |
| 本地音乐、封面、歌词 | `source/media/music/dog-days.mp3`；封面 `source/media/takina/avatar.png` | 音轨来自用户指定的 B 站视频，来源说明见站内 `/credits/`，开放授权未核实。放入自己的音频与方形封面后，修改 `experience.yml` 的 `music.localTracks` 中 `url`、`cover`、`lyric`、曲名和歌手；当前曲目无歌词，`lyric` 可选。网易云歌单 ID 由 `.env` 的 `NETEASE_PLAYLIST_ID` 配置。 |
| Live2D 模型 | `experience.yml` 的 `live2d.modelPaths`；`source/media/live2d/takina-chibi/` | 当前使用本地 Q 版泷奈 Cubism 模型，支持直接拖动。分层原画、PSD 和脚本在 `artwork/live2d/takina-chibi/`；替换时需复制完整资源，不只 JSON。 |
| 头像与站点图标 | `source/media/takina/avatar.png` | 替换文件或修改 `_config.solitude.yml` 的 `site.icon`、`aside.my_card.author.img`、`post.default.copyright.author`、`footer.information.author` 引用。 |
| 懒加载占位图 | `source/media/brand/placeholder.svg` | 替换文件或修改 `_config.solitude.yml` 的 `lazyload.placeholder` 与 `lazyload.errorimg`。 |
| 首页推荐图、文章和默认封面 | `_config.solitude.yml` 的 `hometop.recommendList[].img`、`page.default.cover`、`post.default.cover`；两篇示例文章的 `cover` | 将新图放入 `source/media/` 后分别修改这些路径；单篇文章封面改 `source/_posts/*.md` 顶部的 `cover` 字段。 |
| 首页标题与打字台词 | `experience.yml` 的 `site.title`、`source/_data/anime_quotes.yml` | 语料每条必须填写台词、作品、角色和来源链接；维护说明见 `docs/quotes.md`。已移除随机在线语料入口。站点其他位置的名称同时改 `_config.yml` 与 `_config.solitude.yml` 的 `site.name.custom`。 |

音乐悬浮窗会在桌面端自动对齐左侧可见侧栏卡片；页面样式位于 `src/enhancements/styles.css`，定位逻辑位于 `src/enhancements/music.ts`。半透明底色也在该样式文件的 `--ff-glass` 中统一调整。

Live2D 修改入口：原画和补绘在 `artwork/live2d/takina-chibi/matte-*.png`，分层脚本在同目录 `build-layers.sh`；运行包在 `source/media/live2d/takina-chibi/`；领口拖拽在 `src/enhancements/live2d.ts`；发片环境光适配器在 `src/enhancements/live2d-light.ts`，着色器补丁在 `vite.config.ts`。模型和页面调色在 `styles.css` 的 `.ff-live2d-shell canvas`、`.ff-background-overlay::after`。升级 l2d-widget 必须复核内部适配器与着色器兼容性；完整限制见原画目录 `STATUS.md`。

蓝紫／墨黑配色在 `src/enhancements/styles.css` 顶部集中定义：`--efu-theme` 控制 Solitude 强调色，`--ff-accent` 控制自定义控件，`--ff-glass` 控制卡片与导航底色。示例壁纸、封面和头像的渐变分别在上表列出的 SVG 文件中调整；修改源码后重新构建，不要编辑生成的 `public/`。

本地曲目优先于网易云曲目，即使桥接服务不可用，自托管音乐仍可播放。Live2D 已使用站内资源；背景视频仍为远程演示，正式上线前建议替换。

首页副标题只读取 `source/_data/anime_quotes.yml`，台词下方显示作品、角色和出处链接；不再请求一言或其他随机语料 API。增删后重新构建并刷新页面。来源评价与核对方法见 `docs/quotes.md`。

矩形卡片、菜单、按钮、播放器和悬停态统一使用 `src/enhancements/styles.css` 的 `--ff-radius: 10px`；头像、轮播指示点和滑块保持各自的圆形语义。页脚 `footer.information.left/right` 是“名称: URL||图标”的映射，不可填写文案数组，否则会生成标题为数组下标的空链接。

直接按住看板娘模型画布即可拖动，移动后的位置保存在当前浏览器；普通点击仍由模型处理。移动端及减少动态模式不会加载模型。

2026-11-09加载修订：主题关键脚本与Font Awesome固定版本副本位于 `source/vendor/`，顶部关键图标在构建时内嵌官方SVG。图片保留真实src，采用原生loading/decoding及固有尺寸，不再等待JavaScript替换占位图。首页封面填满卡片容器，页脚头像返回顶部改为原生圆形按钮。看板娘“可用”和“默认开启”分别由 `experience.yml` 的 `live2d.enabled`、`live2d.defaultEnabled` 控制；装饰动效总开关仍可停止全部动效。

最新发片和脸部底图：`artwork/live2d/takina-chibi/*-v3.raw.png`；PSD生成用 `build-layers.sh`，导出后运行 `node artwork/live2d/takina-chibi/finalize-model.mjs 导出目录` 写入六组表情。拖拽与悬停逻辑为 `src/enhancements/live2d.ts`，表情资源为运行包内 `*.exp3.json`。最新截图和验收记录见 `artifacts/qa/2026-10-05/live2d-v3/RESULTS.md`。

## 网易云桥接

桥接服务只允许访问 `.env` 中 `NETEASE_PLAYLIST_ID` 对应歌单内的曲目，不提供任意搜索或开放代理：

- `GET /api/music/healthz`
- `GET /api/music/playlist`
- `GET /api/music/tracks/:id/stream`
- `GET /api/music/tracks/:id/lyric`
- `GET /api/music/tracks/:id/cover`

音频代理保留 Range 请求；播放地址短缓存，元数据和歌词长缓存，上游失败时优先返回未过期的旧缓存。网易云目前可能拒绝匿名歌单请求并返回 401，因此生产环境通常需要在 `.env` 中配置有效的 `NETEASE_COOKIE`。Cookie 不得提交到仓库；缺失或失效时 `/playlist` 会明确返回 `netease_auth_required`，前端继续使用本地曲目，不影响博客正文和其他功能。

## Fedora Docker 部署

当前实际部署在 Debian 的 `https://tak1na.top/blog/`，使用独立 Compose、子路径构建和既有 HAProxy。内部拓扑、发布历史与一次性回滚脚本仅保留在本地，不上传到公开仓库。通用部署步骤见 [上线检查表](deploy/DEPLOYMENT.md)；以下根路径 Compose 模板保留作为通用参考，不要用它覆盖当前服务器配置。

复制环境变量模板并填写真实值：

```bash
cp .env.example .env
docker compose config
docker compose build
docker compose up -d
docker compose ps
curl --fail http://127.0.0.1:8080/healthz
curl --fail http://127.0.0.1:8080/api/music/healthz
```

Web 只绑定 `127.0.0.1:8080`。现有反向代理应把博客域名转发到该地址，并传递 `Host`、`X-Real-IP`、`X-Forwarded-For` 和 `X-Forwarded-Proto`。

示例 Nginx 外层代理：

```nginx
location / {
    proxy_pass http://127.0.0.1:8080;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

数据库和两个应用服务均不向宿主机开放端口。`music-bridge` 单独连接可出网网络，其余数据服务保留在内部网络。

### Waline 初始化

首次打开任意文章评论区后访问：

```text
https://你的域名/api/comment/ui/register
```

注册的第一个账号会成为管理员。服务端已开启评论审核；管理后台可审核、回复和删除评论。

### 备份与恢复

```bash
./deploy/backup-postgres.sh ./backups
./deploy/restore-postgres.sh ./backups/waline-YYYYMMDD-HHMMSS.dump
```

`deploy/solitude-blog-backup.service` 和 `.timer` 可复制到 `/etc/systemd/system/`，默认每天备份并保留 14 天。恢复脚本会要求输入 `RESTORE`，并短暂停止 Waline。

### 更新与回滚

生产环境应在 `.env` 中把 `WEB_IMAGE` 和 `MUSIC_BRIDGE_IMAGE` 设置为带 Git SHA 的镜像标签。更新前备份数据库，构建新标签并启动；回滚时恢复上一组标签后重新执行 `docker compose up -d`，不要使用未固定的 `latest`。

## 验证

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm test:e2e
```

端到端测试覆盖桌面、移动端、减少动态模式和 20 次连续 PJAX 导航。CI 还会检查 Compose 并构建两个容器镜像。
