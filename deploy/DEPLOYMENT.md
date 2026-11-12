# Fedora 上线检查表

## 发布前

- 将仓库放在 `/opt/solitude-blog` 或其他固定目录。
- 安装 Docker Engine 与 Compose 插件，并确认普通运维用户可以执行 Docker 命令。
- 从 `.env.example` 创建 `.env`，生成独立的数据库密码和 Waline JWT。
- 修改 `_config.yml` 中的正式域名，再构建镜像。
- 确认外层反向代理已经保留原始 Host 和 HTTPS 协议头。
- 运行一次数据库备份并确认生成的 dump 文件非空。

## 发布

```bash
docker compose config --quiet
docker compose build
docker compose up -d
docker compose ps
```

所有服务应为 `healthy`。随后检查：

```bash
curl --fail http://127.0.0.1:8080/healthz
curl --fail http://127.0.0.1:8080/api/music/healthz
curl --fail --range 0-1023 http://127.0.0.1:8080/media/music/dog-days.mp3 -o /dev/null
```

浏览器中检查首页、文章、搜索、评论、音乐、背景切换和移动端降级。网易云未配置或暂时不可用不应影响本地曲目与正文。

## 回滚

1. 不修改 PostgreSQL 卷。
2. 将 `.env` 中两个镜像变量改回上一版本标签。
3. 执行 `docker compose up -d --no-build`。
4. 重新检查健康接口与一篇文章。

只有数据库迁移导致不兼容时才恢复数据库 dump；恢复前先额外保存当前状态。
