# 副标题语料维护

## 双语显示

`text` 为中文台词；核对到日语原文时填写 `ja` 和可选的 `originalSource`。
页面预留上下两行，日语在上、中文在下，日语字号略大；作品、角色及出处链接位于下方。
没有核对到日语的条目只显示中文，不用机器反向翻译冒充原文。
优先核对作品官网、出版社、制作公司及官方商店；其次使用有明确引文的媒体或语录页。
轮播按整条记录切换，双语与出处不会各自随机。播放器封面有意保留圆形，其余主要控件使用统一 10px 圆角。

唯一编辑入口是 `source/_data/anime_quotes.yml`。每条包含 `text`、`work`、`character`、`source`；构建时校验非空、长度、HTTPS 来源和重复内容。页面在台词下显示可点击的作品与角色，减少短句脱离上下文造成的误解。减少动态模式仍显示首句及出处。

2026-09-28 重新筛选为 14 条短台词，来自 7 部作品。删除粉丝应援语、泛化励志句及本轮无法定位到语句的条目。中文采用简体译法或短句节选，不宣称与所有字幕版本逐字一致。

本轮读取并按作品核对的来源：

- [名侦探柯南](https://zh.wikiquote.org/zh-cn/名侦探柯南)：角色语录附日文原文。
- [灌篮高手](https://zh.wikiquote.org/zh-cn/灌籃高手)：角色分组。
- [ONE PIECE](https://zh.wikiquote.org/wiki/ONE_PIECE)：角色分组；罗宾句为长对白中的短节选。
- [新世纪福音战士](https://en.wikiquote.org/wiki/Neon_Genesis_Evangelion)：第 1、2 集；中文译句。
- [钢之炼金术师](https://zh.wikiquote.org/wiki/鋼之鍊金術師)：保留标志性炼金术短句。
- [魔法少女小圆](https://en.wikiquote.org/wiki/Puella_Magi_Madoka_Magica#I'm_Not_Afraid_of_Anything_Anymore)：第 3 集；中文译句。
- [星际牛仔](https://en.wikiquote.org/wiki/Cowboy_Bebop)：斯派克的短台词。

Wikiquote 仍是社区整理，不是官方台本；它的优势是可按作品、角色或集数复核，不能用“在库中”代替逐句审核。后续优先补充官方台本、正版字幕的集数/时间点，不批量自动导入。

搜索评估过 [Animechan](https://animechan.io/docs/quote/quotes-by-anime)、[AniQuotesAPI](https://github.com/Shineii86/AniQuotesAPI) 和 [animeQuotes-offlineDB](https://github.com/OpenUwU/animeQuotes-offlineDB)。它们可作为候选检索工具，但第三方归属、翻译质量、是否为名台词仍需审核，所以不直接接入在线轮播。

已移除一言请求代码与 `site.quoteApi` 配置，避免未来误开开关让未审查文本重新进入。新增语句只需编辑本地 YAML 后重新构建。语料不保存在 localStorage；发布后需刷新已打开的旧页面以加载新脚本。
