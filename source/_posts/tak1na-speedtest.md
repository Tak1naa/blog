---
title: Tak1na 自建测速
abbrlink: tak1na-speedtest
date: 2026-11-09 16:00:00
updated: 2026-11-09 16:00:00
categories:
  - 自建服务
tags:
  - 测速
  - 校园网
  - 自建服务
cover: /media/takina/aquarium.jpg
comments: true
description: 基于 LibreSpeed／bg6cq 的网页测速站，测量上下行、Ping 和 Jitter，支持 IPv4／IPv6 与移动端。
---

鉴于南航搭建了自己的测速节点，北交怎么能又输一次😡

这是一个参考了 [中科大测速网](https://test.ustc.edu.cn/) ,基于 LibreSpeed／bg6cq 的网页测速站，测量上下行、Ping 和 Jitter，支持 IPv4／IPv6 与移动端。

由于校园网存在的带宽限制，测速上下行速率限制在 1000Mbps 。

[开始测速](https://tak1na.top/speedtest/)

<!-- more -->

## 实现与隐私

浏览器通过 Web Worker 发起并行 HTTP 请求，PHP 处理测速数据，HAProxy 提供 HTTPS 入口，Redis 管理会话与限流。沿用上游测速算法，补充传输错误检查与失败提示。

关闭上游遥测和结果数据库，上传内容有界读取后丢弃。服务器不保留数据。

用户可主动提交公开脱敏 IP参与一周内测速排行，支持原浏览器撤回；使用非持久化 Redis 。

## 使用边界

- 全站同时一个测速；每来源 IP 五分钟两次、十二小时五次，取消或失败也计次。
- 结果受设备、Wi-Fi、代理和路由影响；同校园网测速不等于互联网出口带宽，IPv6 也不自动意味着经过外网。
- 建议有线连接、暂停其他传输；测速消耗较多流量，可能影响共享网络。
- 连接异常请反馈时间、网络与浏览器；分享 HAR 前删除 Cookie、令牌和个人地址。

本人对于 JS PHP 一无所知，适配主要由 GPT Sol 完成。有问题可以提 issue 或者在 Blog 留言，~~大概可能应该有空~~  我会看的。
[项目地址](https://github.com/Tak1naa/SpeedTest)

[Blog地址](https://tak1na.top/blog)
