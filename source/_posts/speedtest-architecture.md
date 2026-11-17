---
title: High-Performance Self-Hosted Speedtest Architecture
abbrlink: speedtest-architecture
date: 2026-11-09 16:00:00
updated: 2026-11-09 16:00:00
categories:
  - Infrastructure
tags:
  - Networking
  - WebWorker
  - Architecture
cover: /media/takina/aquarium.jpg
comments: true
description: Engineering design of a lightweight browser-based speedtest service utilizing Web Workers, HAProxy TLS termination, and Redis rate-limiting.
---

<div class="post-lang-switch">
  <a href="#zh-CN" data-switch-lang="zh-CN">简体中文</a> / <a href="#en" data-switch-lang="en">English</a>
</div>

<div data-post-lang="en">

## Overview

Testing high-throughput campus and local network performance requires predictable concurrency control, bounded resource consumption, and zero persistent user telemetry. This project implements an isolated network measurement node optimized for gigabit local links, measuring download/upload bandwidth, Ping, and Jitter over both IPv4 and IPv6.

<!-- more -->

## Implementation & Security Boundaries

1. **Parallel Web Workers & Reverse Proxy**: Browser telemetry runs in dedicated Web Worker threads to isolate UI rendering from high-frequency network streams. PHP handles measurement endpoints while HAProxy provides TLS termination, and Redis manages sessions and rate limits.
2. **Stateless Privacy Design**: Upstream telemetry and result databases are disabled. Uploaded payloads are read within strict memory bounds and immediately discarded without server-side retention. Users may optionally submit anonymized metrics to a 7-day transient leaderboard using non-persistent Redis, with browser-side revocation support.
3. **Operational & Rate Limits**:
   - Single concurrent test across the site; rate-limited to 2 runs per 5 minutes and 5 runs per 12 hours per source IP (including cancelled or failed attempts).
   - Measured speeds depend on client hardware, Wi-Fi quality, proxies, and routing paths—campus LAN speedtest throughput does not directly equate to external internet egress bandwidth.
   - Wired Ethernet connections are recommended; pause background transfers before testing.

</div>

<div data-post-lang="zh-CN" hidden>

## 概览

高吞吐校园网与局域网性能测量需要可预期的并发控制、有界资源消耗以及零持久化用户遥测。本项目基于 LibreSpeed／bg6cq 构建了一个面向千兆本地链路优化的网页测速节点，支持测量上下行速率、Ping 和 Jitter，并完整支持 IPv4／IPv6 双栈与移动端访问。

<!-- more -->

## 实现与隐私边界

1. **并行 Web Worker 与反向代理**：浏览器通过 Web Worker 发起并行 HTTP 请求以隔离界面渲染与高频网络流计算；PHP 处理测速数据，HAProxy 提供 HTTPS 入口与 TLS 终结，Redis 负责会话管理与限流。沿用上游测速算法，并补充传输错误检查与失败提示。
2. **无状态隐私设计**：关闭上游遥测与结果数据库，上传内容经过有界读取后立即丢弃，服务器不保留用户负载数据。用户可主动选择提交公开脱敏 IP 参与一周内测速排行，支持原浏览器撤回；排行榜底层使用非持久化 Redis。
3. **使用与安全边界**：
   - 全站同时仅允许一个测速任务；每来源 IP 五分钟最多两次、十二小时最多五次（取消或失败同样计次）。
   - 结果受终端设备、Wi-Fi、代理与路由路径影响；同校园网内测速不等于互联网出口带宽，IPv6 也不自动意味着经过外网。
   - 建议使用有线连接并暂停其他传输；测速消耗较多流量，可能影响共享网络环境。
   - 如遇连接异常，反馈时附上时间、网络与浏览器信息；分享 HAR 抓包前请务必删除 Cookie、令牌与个人地址。

</div>
