# Live2D 标准图样式重制 / Reference restyle

2026-11-17，目标为本目录的 `base-transparent.png`。修改仅位于用户指定的备份工作目录，未提交、推送或部署。

## 外观与模型

- 恢复标准图的长直尖刘海、前后发轮廓、蓝灰硬高光、暖色脸部与原始制服配色。可分离的可见绘画直接复用标准图像素，不再把前后发独立缩放或向下移动 32px。
- 内置 **image_gen** 制作连续后发补绘、前发透明蒙版与无五官脸部底稿。原始输出为 `hair-reference-full.raw.png`、`front-reference.raw.png`、`face-reference.raw.png`；生成提示词见 [PROMPTS.md](PROMPTS.md)。隐藏区域允许补绘，可见细节尽量保留原图。
- 衣服保留旧的被遮挡袖口/脖子底稿，并恢复原图的可见制服、手、腿和鞋；限定颜色蒙版和衣服 alpha，避免把头发扩进身体网格。脸部不再烘焙刘海、眼睛或闭口，眼睛和张闭口继续独立。
- 移除网页对角色的降低饱和度、压暗/提亮滤镜，保留柔和投影和现有移动发光。三段透明视频与看板娘交互逻辑没有改动。
- 使用官方 [PSD2Live 1.4.2](https://github.com/tsunehimatoi/psd2live/releases/tag/v1.4.2) 重新导出真正的 MOC3、2048 图集、物理和动作文件。仍有 11 个网格、14 个变形器、18 个参数、前后发物理和 10 组表情；没有用单张静态图替代模型。
- 当前配置入口版本 `reference-278fdeef1009`；MOC3 与图集也带内容摘要查询参数，避免新旧资源混用。
- 修复并防护 RGB/灰度混合蒙版造成的脸颊半透明色带与嘴周光圈：蒙版合并前统一灰度，并相加补齐嘴周抗锯齿覆盖，并在导出前验证蒙版无色差、脸部采样点全不透明。

## 文件与复现

- 可编辑 PSD：`takina-chibi.psd`。
- 新拆层合成预览：`composite-reference.png`；旧预览 `composite-v3.png` 保留。
- 构建入口：`build-layers.sh` → `build-reference-layers.sh`，使用现有 ImageMagick 拼装 PSD。
- 导出入口：`export-reference-model.sh`。设置 `PSD2LIVE_APP_DIR` 为官方 1.4.2 解包后的 `lib/app` 目录，再用 `bash` 执行；脚本自动备份当前运行包、重建、导出、生成表情并更新模型入口摘要，之后仍须重建站点。
- 发布源：`source/media/live2d/takina-chibi/`；模型配置在 `source/_data/experience.yml`。
- 本次替换前的模型、分层和相关源码备份在 `archive/before-reference-restyle-20261117/`，附 SHA-256 清单。恢复时只复制需要的文件，避免覆盖后续无关改动。
- `reference-provenance.json` 保存素材摘要和导出信息。官方发布包 SHA-256 为 `a5d5bcc243008e36134af7f2a945d8783eb29f3b088b03d736e8fc11b743271f`，与此前使用的发行包一致。Java 堆限制 512 MiB，导出峰值 RSS 419,044 KiB。

```bash
bash artwork/live2d/takina-chibi/build-layers.sh
PSD2LIVE_APP_DIR=/path/to/psd2live/lib/app bash artwork/live2d/takina-chibi/export-reference-model.sh
```

## 验证边界

`reference-style-check.json` 比较的是原始坐标下的静止拆层合成，按 alpha >128 的角色区域计算：轮廓 IoU 从约 94.42% 提高到 99.46%，重叠区域 RGB 平均绝对差从 13.60 降到 0.19（0–255）。该值不包括原图外围的低 alpha 晕光，不代表动态网格或 WebGL 渲染逐像素一致。

这是基于自动绑定和补绘的轻量模型，保留小幅转头和现有软关节；眼睛仍是整片眼图，未新增专业手工虹膜/睫毛拓扑。大角度转头、发片极端形变以及 Safari/真实移动设备仍需专门验收。移动端和减少动态效果偏好下保持关闭。

## 本轮验收

- 最终版本 `reference-278fdeef1009`：ESLint、Stylelint、TypeScript、Shell 语法检查通过；Vitest 17 个文件 / 67 项全部通过。
- 原始图保持不变，三份补绘、可编辑 PSD 与合成图摘要已记录。全部运行包源文件和 `public/` 文件逐一校验一致；入口、MOC3、图集均带当前摘要版本。
- 最终浏览器批次 `test-results/reference-restyle-accepted/`：13 项通过，11 项因设备条件跳过，耗时约 1.9 分钟。覆盖真实 MOC 网格、头颈与头发独立性、表情菜单、拖拽回弹、视频切换、随机动作、PJAX 生命周期、关闭重建和移动端默认不加载。
- 浏览器夹具关闭背景粒子、打字机和轮播自动播放，仅做看板娘专项验收。完成双主题、移动端关闭状态、静止合成和实际 WebGL 画面的视觉核对；没有新增全站低内存性能或 Safari 验收结论。
- 完整 clean → Vite → Hexo 通过，生成 119 个文件。本地首页与 `/posts/speedtest-architecture/` 均 HTTP 200，预览保持仅监听 `127.0.0.1:4014`。
- 导出前检查覆盖灰度蒙版、脸部采样点与嘴周整块区域的不透明性，防止色带和细圈回归。

The Live2D model has been rebuilt around the supplied standard artwork, restoring its glossy hair, fringe silhouette and original visible colours. Built-in image_gen provides hidden-area plates and an organic matte; the runtime remains a real Cubism model with the existing expressions and interactions. Original references and the previous model are preserved.
