---
title: "icpc-algorithm-template"
published: 2026-10-05T21:02:31+08:00
description: "和 Codex 一起搭建的算法模板库，整理 ICPC / CCPC 训练与比赛需要的代码、说明和打印手册。"
category: "算法竞赛"
tags: ["ICPC", "CCPC", "C++"]
lang: zh_CN
---

我正在参加 ICPC 和 CCPC。这份仓库是我和 Codex 一起搭建的算法模板库，把训练与比赛中需要的 C++ 实现、中文说明、测试和打印手册放在一起。

## 模板库里有什么

目前 README 记录了 **196 份代码模板**，按基础技巧、数据结构、字符串、图论、数学、动态规划、搜索、计算几何和实现调试分类。除了常见算法，也收录了树套树、可回滚并查集、后缀结构、多项式算法、Slope Trick 等模块。

每个模板配有适用条件、复杂度、关键公式和容易出错的边界。需要查找算法时可以从索引进入；准备调用时，再看接口说明、变量约定和对应测试。仓库还整理了 STL 速查表、常用结论和赛事建模技巧。

## 章节目录

按当前仓库目录，这里共有 **196 个 C++ 模板文件**。每章的完整文件列表放在下方，点击文件名可以直接查看源码。

| 章节 | 模板数 | 主要内容 |
| --- | ---: | --- |
| [基础与技巧](https://github.com/Wch727/icpc-algorithm-template/tree/main/01-%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%8A%80%E5%B7%A7) | 14 | 单调栈与队列、双指针、反悔贪心、位运算、高精度、多维差分 |
| [数据结构](https://github.com/Wch727/icpc-algorithm-template/tree/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84) | 38 | 线段树、平衡树、树套树、LCT、Wavelet Tree、CDQ、整体二分、可回滚并查集 |
| [字符串](https://github.com/Wch727/icpc-algorithm-template/tree/main/03-%E5%AD%97%E7%AC%A6%E4%B8%B2) | 15 | KMP、AC 自动机、后缀数组与自动机、回文自动机、Duval |
| [图论](https://github.com/Wch727/icpc-algorithm-template/tree/main/04-%E5%9B%BE%E8%AE%BA) | 48 | 最短路、树上算法、重构树、匹配、网络流、割树、支配树、斯坦纳树 |
| [数学](https://github.com/Wch727/icpc-algorithm-template/tree/main/05-%E6%95%B0%E5%AD%A6) | 39 | 数论、组合、矩阵、多项式、FWT、BM、Min_25、质数计数、有理数搜索、单纯形 |
| [动态规划](https://github.com/Wch727/icpc-algorithm-template/tree/main/06-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92) | 18 | 背包、树形 DP、数位 DP、状态压缩、SOS、动态 DP、期望、决策优化、Slope Trick |
| [搜索](https://github.com/Wch727/icpc-algorithm-template/tree/main/07-%E6%90%9C%E7%B4%A2) | 8 | DFS/BFS、双向搜索、折半搜索、IDA*、A*、DLX、模拟退火 |
| [计算几何](https://github.com/Wch727/icpc-algorithm-template/tree/main/08-%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95) | 13 | 凸包、半平面交、圆、多边形面积并、闵可夫斯基和、三维凸包、Delaunay/Voronoi |
| [实现与调试](https://github.com/Wch727/icpc-algorithm-template/tree/main/09-%E5%85%B6%E4%BB%96) | 3 | 性能测量、随机数与简单对拍、交互与通信技巧 |

## 完整模板列表

<div class="template-directory">
<details class="template-chapter" open><summary>基础与技巧<span>14 份模板</span></summary><div class="template-file-grid"><a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/01-%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%8A%80%E5%B7%A7/%E4%B8%89%E5%88%86%E6%B3%95.cpp" target="_blank" rel="noopener noreferrer">三分法</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/01-%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%8A%80%E5%B7%A7/%E4%BA%8C%E7%BB%B4%E5%B7%AE%E5%88%86.cpp" target="_blank" rel="noopener noreferrer">二维差分</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/01-%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%8A%80%E5%B7%A7/%E4%BD%8D%E8%BF%90%E7%AE%97%E6%8A%80%E5%B7%A7.cpp" target="_blank" rel="noopener noreferrer">位运算技巧</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/01-%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%8A%80%E5%B7%A7/%E5%88%86%E6%95%B0%E8%A7%84%E5%88%92.cpp" target="_blank" rel="noopener noreferrer">分数规划</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/01-%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%8A%80%E5%B7%A7/%E5%8D%95%E8%B0%83%E6%A0%88.cpp" target="_blank" rel="noopener noreferrer">单调栈</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/01-%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%8A%80%E5%B7%A7/%E5%8D%95%E8%B0%83%E9%98%9F%E5%88%97.cpp" target="_blank" rel="noopener noreferrer">单调队列</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/01-%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%8A%80%E5%B7%A7/%E5%8F%8C%E6%8C%87%E9%92%88.cpp" target="_blank" rel="noopener noreferrer">双指针</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/01-%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%8A%80%E5%B7%A7/%E5%8F%8D%E6%82%94%E8%B4%AA%E5%BF%83.cpp" target="_blank" rel="noopener noreferrer">反悔贪心</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/01-%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%8A%80%E5%B7%A7/%E5%BF%AB%E8%AF%BB%E5%BF%AB%E5%86%99.cpp" target="_blank" rel="noopener noreferrer">快读快写</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/01-%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%8A%80%E5%B7%A7/%E7%A6%BB%E6%95%A3%E5%8C%96.cpp" target="_blank" rel="noopener noreferrer">离散化</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/01-%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%8A%80%E5%B7%A7/%E8%AE%B0%E5%BF%86%E5%8C%96%E6%90%9C%E7%B4%A2.cpp" target="_blank" rel="noopener noreferrer">记忆化搜索</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/01-%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%8A%80%E5%B7%A7/%E9%80%86%E5%BA%8F%E5%AF%B9.cpp" target="_blank" rel="noopener noreferrer">逆序对</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/01-%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%8A%80%E5%B7%A7/%E9%AB%98%E7%B2%BE%E5%BA%A6BigInt.cpp" target="_blank" rel="noopener noreferrer">高精度BigInt</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/01-%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%8A%80%E5%B7%A7/%E9%AB%98%E7%BB%B4%E5%B7%AE%E5%88%86.cpp" target="_blank" rel="noopener noreferrer">高维差分</a></div></details>
<details class="template-chapter"><summary>数据结构<span>38 份模板</span></summary><div class="template-file-grid"><a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/01Trie(%E6%9C%80%E5%A4%A7%E5%BC%82%E6%88%96).cpp" target="_blank" rel="noopener noreferrer">01Trie(最大异或)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/CDQ%E5%88%86%E6%B2%BB(%E4%B8%89%E7%BB%B4%E5%81%8F%E5%BA%8F).cpp" target="_blank" rel="noopener noreferrer">CDQ分治(三维偏序)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/KD-Tree.cpp" target="_blank" rel="noopener noreferrer">KD-Tree</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/ST%E8%A1%A8.cpp" target="_blank" rel="noopener noreferrer">ST表</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/SegmentTreeBeats.cpp" target="_blank" rel="noopener noreferrer">SegmentTreeBeats</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/Trie%E5%AD%97%E5%85%B8%E6%A0%91.cpp" target="_blank" rel="noopener noreferrer">Trie字典树</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/WaveletTree.cpp" target="_blank" rel="noopener noreferrer">WaveletTree</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/bitset%E4%B8%8E%E5%AD%97%E5%B9%B6%E8%A1%8C.cpp" target="_blank" rel="noopener noreferrer">bitset与字并行</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E4%B8%BB%E5%B8%AD%E6%A0%91(%E5%8F%AF%E6%8C%81%E4%B9%85%E5%8C%96%E7%BA%BF%E6%AE%B5%E6%A0%91).cpp" target="_blank" rel="noopener noreferrer">主席树(可持久化线段树)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91.cpp" target="_blank" rel="noopener noreferrer">二叉搜索树</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E5%88%86%E5%9D%97.cpp" target="_blank" rel="noopener noreferrer">分块</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E5%8A%A8%E6%80%81%E5%BC%80%E7%82%B9%E7%BA%BF%E6%AE%B5%E6%A0%91.cpp" target="_blank" rel="noopener noreferrer">动态开点线段树</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E5%8F%AF%E5%9B%9E%E6%BB%9A%E5%B9%B6%E6%9F%A5%E9%9B%86%E4%B8%8E%E6%97%B6%E9%97%B4%E7%BA%BF%E6%AE%B5%E6%A0%91.cpp" target="_blank" rel="noopener noreferrer">可回滚并查集与时间线段树</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E5%8F%AF%E6%8C%81%E4%B9%85%E5%8C%96Treap(fhq).cpp" target="_blank" rel="noopener noreferrer">可持久化Treap(fhq)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E5%B7%A6%E5%81%8F%E6%A0%91(%E5%8F%AF%E5%B9%B6%E5%A0%86).cpp" target="_blank" rel="noopener noreferrer">左偏树(可并堆)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E5%B8%A6%E6%9D%83%E5%B9%B6%E6%9F%A5%E9%9B%86.cpp" target="_blank" rel="noopener noreferrer">带权并查集</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E5%B9%B3%E8%A1%A1%E6%A0%91Splay.cpp" target="_blank" rel="noopener noreferrer">平衡树Splay</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E5%B9%B3%E8%A1%A1%E6%A0%91Treap.cpp" target="_blank" rel="noopener noreferrer">平衡树Treap</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E5%B9%B6%E6%9F%A5%E9%9B%86.cpp" target="_blank" rel="noopener noreferrer">并查集</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E6%89%AB%E6%8F%8F%E7%BA%BF(%E7%9F%A9%E5%BD%A2%E9%9D%A2%E7%A7%AF%E5%B9%B6).cpp" target="_blank" rel="noopener noreferrer">扫描线(矩形面积并)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E6%95%B4%E4%BD%93%E4%BA%8C%E5%88%86(%E5%89%8D%E7%BC%80%E5%88%A4%E5%AE%9A).cpp" target="_blank" rel="noopener noreferrer">整体二分(前缀判定)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E6%95%B4%E4%BD%93%E4%BA%8C%E5%88%86(%E5%B8%A6%E4%BF%AE%E6%94%B9%E5%8C%BA%E9%97%B4%E7%AC%ACk%E5%B0%8F).cpp" target="_blank" rel="noopener noreferrer">整体二分(带修改区间第k小)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E6%9B%BF%E7%BD%AA%E7%BE%8A%E6%A0%91.cpp" target="_blank" rel="noopener noreferrer">替罪羊树</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E6%9D%8E%E8%B6%85%E6%A0%91.cpp" target="_blank" rel="noopener noreferrer">李超树</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E6%A0%91%E7%8A%B6%E6%95%B0%E7%BB%84.cpp" target="_blank" rel="noopener noreferrer">树状数组</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E6%A0%91%E7%8A%B6%E6%95%B0%E7%BB%84%E5%A5%97%E6%9D%83%E5%80%BC%E7%BA%BF%E6%AE%B5%E6%A0%91.cpp" target="_blank" rel="noopener noreferrer">树状数组套权值线段树</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E6%A0%91%E9%93%BE%E5%89%96%E5%88%86.cpp" target="_blank" rel="noopener noreferrer">树链剖分</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E7%8F%82%E6%9C%B5%E8%8E%89%E6%A0%91ODT.cpp" target="_blank" rel="noopener noreferrer">珂朵莉树ODT</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E7%AC%9B%E5%8D%A1%E5%B0%94%E6%A0%91.cpp" target="_blank" rel="noopener noreferrer">笛卡尔树</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E7%BA%BF%E6%AE%B5%E6%A0%91(%E5%8C%BA%E9%97%B4%E5%8A%A0%E4%B9%98).cpp" target="_blank" rel="noopener noreferrer">线段树(区间加乘)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E7%BA%BF%E6%AE%B5%E6%A0%91(%E5%8C%BA%E9%97%B4%E5%8A%A0%E5%8C%BA%E9%97%B4%E5%92%8C).cpp" target="_blank" rel="noopener noreferrer">线段树(区间加区间和)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E7%BA%BF%E6%AE%B5%E6%A0%91(%E5%8C%BA%E9%97%B4%E5%BC%80%E6%96%B9).cpp" target="_blank" rel="noopener noreferrer">线段树(区间开方)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E7%BA%BF%E6%AE%B5%E6%A0%91(%E6%9C%80%E5%A4%A7%E5%AD%90%E6%AE%B5%E5%92%8C).cpp" target="_blank" rel="noopener noreferrer">线段树(最大子段和)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E7%BA%BF%E6%AE%B5%E6%A0%91%E5%88%86%E8%A3%82%E4%B8%8E%E5%90%88%E5%B9%B6.cpp" target="_blank" rel="noopener noreferrer">线段树分裂与合并</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E7%BA%BF%E6%AE%B5%E6%A0%91%E5%90%88%E5%B9%B6.cpp" target="_blank" rel="noopener noreferrer">线段树合并</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E8%8E%AB%E9%98%9F%E5%8F%98%E4%BD%93.cpp" target="_blank" rel="noopener noreferrer">莫队变体</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E8%8E%AB%E9%98%9F%E7%AE%97%E6%B3%95.cpp" target="_blank" rel="noopener noreferrer">莫队算法</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E9%93%BE%E6%8E%A5%E5%89%96%E5%88%86LCT.cpp" target="_blank" rel="noopener noreferrer">链接剖分LCT</a></div></details>
<details class="template-chapter"><summary>字符串<span>15 份模板</span></summary><div class="template-file-grid"><a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/03-%E5%AD%97%E7%AC%A6%E4%B8%B2/AC%E8%87%AA%E5%8A%A8%E6%9C%BA.cpp" target="_blank" rel="noopener noreferrer">AC自动机</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/03-%E5%AD%97%E7%AC%A6%E4%B8%B2/KMP.cpp" target="_blank" rel="noopener noreferrer">KMP</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/03-%E5%AD%97%E7%AC%A6%E4%B8%B2/Lyndon%E5%88%86%E8%A7%A3Duval.cpp" target="_blank" rel="noopener noreferrer">Lyndon分解Duval</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/03-%E5%AD%97%E7%AC%A6%E4%B8%B2/Manacher.cpp" target="_blank" rel="noopener noreferrer">Manacher</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/03-%E5%AD%97%E7%AC%A6%E4%B8%B2/Z%E5%87%BD%E6%95%B0.cpp" target="_blank" rel="noopener noreferrer">Z函数</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/03-%E5%AD%97%E7%AC%A6%E4%B8%B2/%E4%B8%B2%E8%81%94%E9%87%8D%E5%A4%8D%E5%88%86%E7%BB%84%E6%9E%9A%E4%B8%BE.cpp" target="_blank" rel="noopener noreferrer">串联重复分组枚举</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/03-%E5%AD%97%E7%AC%A6%E4%B8%B2/%E5%90%8E%E7%BC%80%E6%95%B0%E7%BB%84.cpp" target="_blank" rel="noopener noreferrer">后缀数组</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/03-%E5%AD%97%E7%AC%A6%E4%B8%B2/%E5%90%8E%E7%BC%80%E6%A0%91Ukkonen.cpp" target="_blank" rel="noopener noreferrer">后缀树Ukkonen</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/03-%E5%AD%97%E7%AC%A6%E4%B8%B2/%E5%90%8E%E7%BC%80%E8%87%AA%E5%8A%A8%E6%9C%BASAM.cpp" target="_blank" rel="noopener noreferrer">后缀自动机SAM</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/03-%E5%AD%97%E7%AC%A6%E4%B8%B2/%E5%9B%9E%E6%96%87%E8%87%AA%E5%8A%A8%E6%9C%BAPAM.cpp" target="_blank" rel="noopener noreferrer">回文自动机PAM</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/03-%E5%AD%97%E7%AC%A6%E4%B8%B2/%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%93%88%E5%B8%8C.cpp" target="_blank" rel="noopener noreferrer">字符串哈希</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/03-%E5%AD%97%E7%AC%A6%E4%B8%B2/%E5%B9%BF%E4%B9%89%E5%90%8E%E7%BC%80%E8%87%AA%E5%8A%A8%E6%9C%BA.cpp" target="_blank" rel="noopener noreferrer">广义后缀自动机</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/03-%E5%AD%97%E7%AC%A6%E4%B8%B2/%E5%BA%8F%E5%88%97%E8%87%AA%E5%8A%A8%E6%9C%BA.cpp" target="_blank" rel="noopener noreferrer">序列自动机</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/03-%E5%AD%97%E7%AC%A6%E4%B8%B2/%E6%9C%80%E5%B0%8F%E8%A1%A8%E7%A4%BA%E6%B3%95.cpp" target="_blank" rel="noopener noreferrer">最小表示法</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/03-%E5%AD%97%E7%AC%A6%E4%B8%B2/%E6%9C%89%E9%99%90%E7%8A%B6%E6%80%81%E8%87%AA%E5%8A%A8%E6%9C%BADP.cpp" target="_blank" rel="noopener noreferrer">有限状态自动机DP</a></div></details>
<details class="template-chapter"><summary>图论<span>48 份模板</span></summary><div class="template-file-grid"><a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/01BFS.cpp" target="_blank" rel="noopener noreferrer">01BFS</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/2-SAT.cpp" target="_blank" rel="noopener noreferrer">2-SAT</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/Bellman-Ford.cpp" target="_blank" rel="noopener noreferrer">Bellman-Ford</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/Dijkstra.cpp" target="_blank" rel="noopener noreferrer">Dijkstra</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/Floyd.cpp" target="_blank" rel="noopener noreferrer">Floyd</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/KM%E7%AE%97%E6%B3%95(%E6%9C%80%E5%A4%A7%E6%9D%83%E5%8C%B9%E9%85%8D).cpp" target="_blank" rel="noopener noreferrer">KM算法(最大权匹配)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/Kruskal%E9%87%8D%E6%9E%84%E6%A0%91.cpp" target="_blank" rel="noopener noreferrer">Kruskal重构树</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/LCA(%E5%80%8D%E5%A2%9E).cpp" target="_blank" rel="noopener noreferrer">LCA(倍增)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/Pruefer%E5%BA%8F%E5%88%97.cpp" target="_blank" rel="noopener noreferrer">Pruefer序列</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/SPFA.cpp" target="_blank" rel="noopener noreferrer">SPFA</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/Tarjan%E5%89%B2%E7%82%B9%E4%B8%8E%E6%A1%A5.cpp" target="_blank" rel="noopener noreferrer">Tarjan割点与桥</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/Tarjan%E5%BC%BA%E8%BF%9E%E9%80%9A%E5%88%86%E9%87%8F.cpp" target="_blank" rel="noopener noreferrer">Tarjan强连通分量</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E4%B8%80%E8%88%AC%E5%9B%BE%E5%8C%B9%E9%85%8D(%E5%B8%A6%E8%8A%B1%E6%A0%91).cpp" target="_blank" rel="noopener noreferrer">一般图匹配(带花树)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E4%B8%80%E8%88%AC%E5%9B%BE%E5%B8%A6%E6%9D%83%E5%8C%B9%E9%85%8D.cpp" target="_blank" rel="noopener noreferrer">一般图带权匹配</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E4%B8%80%E8%88%AC%E5%9B%BE%E8%BE%B9%E6%9F%93%E8%89%B2.cpp" target="_blank" rel="noopener noreferrer">一般图边染色</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E4%B8%8A%E4%B8%8B%E7%95%8C%E7%BD%91%E7%BB%9C%E6%B5%81.cpp" target="_blank" rel="noopener noreferrer">上下界网络流</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E4%BA%8C%E5%88%86%E5%9B%BE%E5%88%A4%E5%AE%9A.cpp" target="_blank" rel="noopener noreferrer">二分图判定</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E4%BA%8C%E5%88%86%E5%9B%BE%E5%8C%B9%E9%85%8DHopcroftKarp.cpp" target="_blank" rel="noopener noreferrer">二分图匹配HopcroftKarp</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E4%BA%8C%E5%88%86%E5%9B%BE%E6%9C%80%E5%A4%A7%E5%8C%B9%E9%85%8D(%E5%8C%88%E7%89%99%E5%88%A9).cpp" target="_blank" rel="noopener noreferrer">二分图最大匹配(匈牙利)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E4%BA%8C%E5%88%86%E5%9B%BE%E6%9C%80%E5%B0%8F%E7%82%B9%E8%A6%86%E7%9B%96.cpp" target="_blank" rel="noopener noreferrer">二分图最小点覆盖</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E5%85%A8%E5%B1%80%E6%9C%80%E5%B0%8F%E5%89%B2StoerWagner.cpp" target="_blank" rel="noopener noreferrer">全局最小割StoerWagner</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E5%89%B2%E6%A0%91GomoryHu.cpp" target="_blank" rel="noopener noreferrer">割树GomoryHu</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E5%8A%A8%E6%80%81%E7%82%B9%E5%88%86%E6%B2%BB.cpp" target="_blank" rel="noopener noreferrer">动态点分治</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E5%9C%86%E6%96%B9%E6%A0%91.cpp" target="_blank" rel="noopener noreferrer">圆方树</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E5%9F%BA%E7%8E%AF%E6%A0%91.cpp" target="_blank" rel="noopener noreferrer">基环树</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E5%AD%98%E5%9B%BE(vector%E9%82%BB%E6%8E%A5%E8%A1%A8).cpp" target="_blank" rel="noopener noreferrer">存图(vector邻接表)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E5%B7%AE%E5%88%86%E7%BA%A6%E6%9D%9F.cpp" target="_blank" rel="noopener noreferrer">差分约束</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E5%B8%A6%E6%9D%83%E4%BA%8C%E5%88%86%E5%9B%BE%E5%8C%B9%E9%85%8DHungarian.cpp" target="_blank" rel="noopener noreferrer">带权二分图匹配Hungarian</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E6%8B%93%E6%89%91%E6%8E%92%E5%BA%8F.cpp" target="_blank" rel="noopener noreferrer">拓扑排序</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E6%94%AF%E9%85%8D%E6%A0%91.cpp" target="_blank" rel="noopener noreferrer">支配树</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E6%96%AF%E5%9D%A6%E7%BA%B3%E6%A0%91.cpp" target="_blank" rel="noopener noreferrer">斯坦纳树</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E6%9B%BC%E5%93%88%E9%A1%BF%E6%9C%80%E5%B0%8F%E7%94%9F%E6%88%90%E6%A0%91.cpp" target="_blank" rel="noopener noreferrer">曼哈顿最小生成树</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E6%9C%80%E5%A4%A7%E5%9B%A2%E4%B8%8E%E6%9E%81%E5%A4%A7%E5%9B%A2.cpp" target="_blank" rel="noopener noreferrer">最大团与极大团</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E6%9C%80%E5%B0%8F%E6%A0%91%E5%BD%A2%E5%9B%BE(%E6%9C%B1%E5%88%98%E7%AE%97%E6%B3%95).cpp" target="_blank" rel="noopener noreferrer">最小树形图(朱刘算法)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E6%9C%80%E5%B0%8F%E7%94%9F%E6%88%90%E6%A0%91Kruskal.cpp" target="_blank" rel="noopener noreferrer">最小生成树Kruskal</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E6%A0%91%E4%B8%8A%E5%90%AF%E5%8F%91%E5%BC%8F%E5%90%88%E5%B9%B6DSUonTree.cpp" target="_blank" rel="noopener noreferrer">树上启发式合并DSUonTree</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E6%A0%91%E5%90%8C%E6%9E%84(AHU).cpp" target="_blank" rel="noopener noreferrer">树同构(AHU)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E6%A0%91%E7%9A%84%E9%81%8D%E5%8E%86%E4%B8%8Edfs%E5%BA%8F.cpp" target="_blank" rel="noopener noreferrer">树的遍历与dfs序</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E6%A0%91%E7%9A%84%E9%87%8D%E5%BF%83%E4%B8%8E%E7%9B%B4%E5%BE%84.cpp" target="_blank" rel="noopener noreferrer">树的重心与直径</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E6%AC%A7%E6%8B%89%E8%B7%AF%E5%BE%84%E4%B8%8E%E6%AC%A7%E6%8B%89%E5%9B%9E%E8%B7%AF.cpp" target="_blank" rel="noopener noreferrer">欧拉路径与欧拉回路</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E7%82%B9%E5%88%86%E6%B2%BB.cpp" target="_blank" rel="noopener noreferrer">点分治</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E7%A8%B3%E5%AE%9A%E5%8C%B9%E9%85%8D.cpp" target="_blank" rel="noopener noreferrer">稳定匹配</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E7%BA%BF%E6%AE%B5%E6%A0%91%E4%BC%98%E5%8C%96%E5%BB%BA%E5%9B%BE.cpp" target="_blank" rel="noopener noreferrer">线段树优化建图</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E7%BD%91%E7%BB%9C%E6%B5%81Dinic.cpp" target="_blank" rel="noopener noreferrer">网络流Dinic</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E7%BD%91%E7%BB%9C%E6%B5%81PushRelabel.cpp" target="_blank" rel="noopener noreferrer">网络流PushRelabel</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E8%99%9A%E6%A0%91.cpp" target="_blank" rel="noopener noreferrer">虚树</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E8%B4%B9%E7%94%A8%E6%B5%81MCMF.cpp" target="_blank" rel="noopener noreferrer">费用流MCMF</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/04-%E5%9B%BE%E8%AE%BA/%E9%95%BF%E9%93%BE%E5%89%96%E5%88%86.cpp" target="_blank" rel="noopener noreferrer">长链剖分</a></div></details>
<details class="template-chapter"><summary>数学<span>39 份模板</span></summary><div class="template-file-grid"><a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/BM%E4%B8%8E%E5%BF%AB%E9%80%9F%E7%BA%BF%E6%80%A7%E9%80%92%E6%8E%A8.cpp" target="_blank" rel="noopener noreferrer">BM与快速线性递推</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/BSGS%E4%B8%8E%E6%89%A9%E5%B1%95BSGS.cpp" target="_blank" rel="noopener noreferrer">BSGS与扩展BSGS</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/FFT.cpp" target="_blank" rel="noopener noreferrer">FFT</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/FWT(%E6%8C%89%E4%BD%8D%E5%8D%B7%E7%A7%AF).cpp" target="_blank" rel="noopener noreferrer">FWT(按位卷积)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/MillerRabin%E4%B8%8EPollardRho.cpp" target="_blank" rel="noopener noreferrer">MillerRabin与PollardRho</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/Min25%E7%AD%9B.cpp" target="_blank" rel="noopener noreferrer">Min25筛</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/NTT.cpp" target="_blank" rel="noopener noreferrer">NTT</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/SternBrocot%E6%9C%89%E7%90%86%E6%95%B0%E4%BA%8C%E5%88%86.cpp" target="_blank" rel="noopener noreferrer">SternBrocot有理数二分</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/Stirling%E6%95%B0.cpp" target="_blank" rel="noopener noreferrer">Stirling数</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E4%B8%AD%E5%9B%BD%E5%89%A9%E4%BD%99%E5%AE%9A%E7%90%86.cpp" target="_blank" rel="noopener noreferrer">中国剩余定理</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E4%B9%98%E6%B3%95%E9%80%86%E5%85%83.cpp" target="_blank" rel="noopener noreferrer">乘法逆元</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E4%BA%8C%E6%AC%A1%E5%89%A9%E4%BD%99.cpp" target="_blank" rel="noopener noreferrer">二次剩余</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E4%BB%BB%E6%84%8F%E6%A8%A1%E5%8D%B7%E7%A7%AF.cpp" target="_blank" rel="noopener noreferrer">任意模卷积</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E5%8D%9A%E5%BC%88%E8%AE%BA(Nim%E4%B8%8ESG).cpp" target="_blank" rel="noopener noreferrer">博弈论(Nim与SG)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E5%8D%A1%E7%89%B9%E5%85%B0%E6%95%B0.cpp" target="_blank" rel="noopener noreferrer">卡特兰数</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E5%8E%9F%E6%A0%B9%E4%B8%8E%E9%98%B6.cpp" target="_blank" rel="noopener noreferrer">原根与阶</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E5%90%88%E6%95%B0%E6%A8%A1%E7%BB%84%E5%90%88%E6%95%B0exLucas.cpp" target="_blank" rel="noopener noreferrer">合数模组合数exLucas</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E5%90%8C%E4%BD%99%E6%9C%80%E7%9F%AD%E8%B7%AF.cpp" target="_blank" rel="noopener noreferrer">同余最短路</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E5%A4%9A%E9%A1%B9%E5%BC%8F%E6%B1%82%E9%80%86%E4%B8%8Eln_exp.cpp" target="_blank" rel="noopener noreferrer">多项式求逆与ln_exp</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E5%AE%B9%E6%96%A5%E5%8E%9F%E7%90%86%E4%B8%8E%E6%8E%92%E5%88%97%E7%BB%84%E5%90%88.cpp" target="_blank" rel="noopener noreferrer">容斥原理与排列组合</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E5%BF%AB%E9%80%9F%E5%B9%82.cpp" target="_blank" rel="noopener noreferrer">快速幂</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E6%89%A9%E5%B1%95%E6%AC%A7%E5%87%A0%E9%87%8C%E5%BE%97.cpp" target="_blank" rel="noopener noreferrer">扩展欧几里得</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E6%8B%89%E6%A0%BC%E6%9C%97%E6%97%A5%E6%8F%92%E5%80%BC.cpp" target="_blank" rel="noopener noreferrer">拉格朗日插值</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E6%95%B4%E6%95%B0%E6%8B%86%E5%88%86%E6%95%B0.cpp" target="_blank" rel="noopener noreferrer">整数拆分数</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E6%95%B4%E9%99%A4%E5%95%86%E4%B8%8A%E7%9A%84%E8%B4%A8%E6%95%B0%E8%AE%A1%E6%95%B0.cpp" target="_blank" rel="noopener noreferrer">整除商上的质数计数</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E6%9D%9C%E6%95%99%E7%AD%9B.cpp" target="_blank" rel="noopener noreferrer">杜教筛</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E6%A8%A1%E6%84%8F%E4%B9%89%E4%B8%8E%E5%BC%82%E6%88%96%E9%AB%98%E6%96%AF%E6%B6%88%E5%85%83.cpp" target="_blank" rel="noopener noreferrer">模意义与异或高斯消元</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E7%9F%A9%E9%98%B5%E5%BF%AB%E9%80%9F%E5%B9%82.cpp" target="_blank" rel="noopener noreferrer">矩阵快速幂</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E7%9F%A9%E9%98%B5%E6%B1%82%E9%80%86%E4%B8%8E%E5%A4%9A%E5%8F%B3%E7%AB%AF%E9%A1%B9.cpp" target="_blank" rel="noopener noreferrer">矩阵求逆与多右端项</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E7%B1%BB%E6%AC%A7%E5%87%A0%E9%87%8C%E5%BE%97(floor_sum).cpp" target="_blank" rel="noopener noreferrer">类欧几里得(floor_sum)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E7%BA%BF%E6%80%A7%E5%9F%BA.cpp" target="_blank" rel="noopener noreferrer">线性基</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E7%BA%BF%E6%80%A7%E7%AD%9B%E4%B8%8E%E6%AC%A7%E6%8B%89%E5%87%BD%E6%95%B0.cpp" target="_blank" rel="noopener noreferrer">线性筛与欧拉函数</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E7%BA%BF%E6%80%A7%E8%A7%84%E5%88%92%E5%8D%95%E7%BA%AF%E5%BD%A2.cpp" target="_blank" rel="noopener noreferrer">线性规划单纯形</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E7%BB%84%E5%90%88%E6%95%B0%E4%B8%8ELucas%E5%AE%9A%E7%90%86.cpp" target="_blank" rel="noopener noreferrer">组合数与Lucas定理</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E8%87%AA%E9%80%82%E5%BA%94Simpson%E7%A7%AF%E5%88%86.cpp" target="_blank" rel="noopener noreferrer">自适应Simpson积分</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E8%8E%AB%E6%AF%94%E4%B9%8C%E6%96%AF%E5%8F%8D%E6%BC%94%E4%B8%8E%E6%95%B4%E9%99%A4%E5%88%86%E5%9D%97.cpp" target="_blank" rel="noopener noreferrer">莫比乌斯反演与整除分块</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E8%A1%8C%E5%88%97%E5%BC%8F%E4%B8%8E%E7%9F%A9%E9%98%B5%E6%A0%91%E5%AE%9A%E7%90%86.cpp" target="_blank" rel="noopener noreferrer">行列式与矩阵树定理</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E8%B4%A8%E5%9B%A0%E6%95%B0%E5%88%86%E8%A7%A3%E4%B8%8E%E7%BA%A6%E6%95%B0.cpp" target="_blank" rel="noopener noreferrer">质因数分解与约数</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/05-%E6%95%B0%E5%AD%A6/%E9%AB%98%E6%96%AF%E6%B6%88%E5%85%83.cpp" target="_blank" rel="noopener noreferrer">高斯消元</a></div></details>
<details class="template-chapter"><summary>动态规划<span>18 份模板</span></summary><div class="template-file-grid"><a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/06-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/SOS%E5%AD%90%E9%9B%86%E4%B8%8E%E8%B6%85%E9%9B%86%E5%92%8C.cpp" target="_blank" rel="noopener noreferrer">SOS子集与超集和</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/06-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/SlopeTrick.cpp" target="_blank" rel="noopener noreferrer">SlopeTrick</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/06-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E5%88%86%E7%BB%84%E8%83%8C%E5%8C%85.cpp" target="_blank" rel="noopener noreferrer">分组背包</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/06-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E5%8A%A8%E6%80%81DP.cpp" target="_blank" rel="noopener noreferrer">动态DP</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/06-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E5%8C%BA%E9%97%B4DP.cpp" target="_blank" rel="noopener noreferrer">区间DP</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/06-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E5%8D%95%E8%B0%83%E9%98%9F%E5%88%97%E4%BC%98%E5%8C%96DP.cpp" target="_blank" rel="noopener noreferrer">单调队列优化DP</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/06-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E5%9B%9B%E8%BE%B9%E5%BD%A2%E4%B8%8D%E7%AD%89%E5%BC%8F%E4%B8%8E%E5%86%B3%E7%AD%96%E5%8D%95%E8%B0%83%E6%80%A7.cpp" target="_blank" rel="noopener noreferrer">四边形不等式与决策单调性</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/06-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E6%8F%92%E5%A4%B4DP(%E8%BD%AE%E5%BB%93%E7%BA%BF).cpp" target="_blank" rel="noopener noreferrer">插头DP(轮廓线)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/06-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E6%95%B0%E4%BD%8DDP.cpp" target="_blank" rel="noopener noreferrer">数位DP</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/06-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E6%96%9C%E7%8E%87%E4%BC%98%E5%8C%96DP.cpp" target="_blank" rel="noopener noreferrer">斜率优化DP</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/06-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E6%9C%80%E9%95%BF%E4%B8%8A%E5%8D%87%E5%AD%90%E5%BA%8F%E5%88%97LIS.cpp" target="_blank" rel="noopener noreferrer">最长上升子序列LIS</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/06-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E6%9C%80%E9%95%BF%E5%85%AC%E5%85%B1%E5%AD%90%E5%BA%8F%E5%88%97LCS.cpp" target="_blank" rel="noopener noreferrer">最长公共子序列LCS</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/06-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E6%A0%91%E5%BD%A2DP.cpp" target="_blank" rel="noopener noreferrer">树形DP</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/06-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E6%A6%82%E7%8E%87%E6%9C%9F%E6%9C%9BDP.cpp" target="_blank" rel="noopener noreferrer">概率期望DP</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/06-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E7%8A%B6%E5%8E%8BDP.cpp" target="_blank" rel="noopener noreferrer">状压DP</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/06-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E7%9F%A9%E9%98%B5%E4%BC%98%E5%8C%96DP.cpp" target="_blank" rel="noopener noreferrer">矩阵优化DP</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/06-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E8%83%8C%E5%8C%85(01%E5%AE%8C%E5%85%A8%E5%A4%9A%E9%87%8D).cpp" target="_blank" rel="noopener noreferrer">背包(01完全多重)</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/06-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E9%80%92%E6%8E%A8%E4%B8%8E%E7%BA%BF%E6%80%A7DP.cpp" target="_blank" rel="noopener noreferrer">递推与线性DP</a></div></details>
<details class="template-chapter"><summary>搜索<span>8 份模板</span></summary><div class="template-file-grid"><a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/07-%E6%90%9C%E7%B4%A2/A%E6%98%9F%E4%B8%8EK%E7%9F%AD%E8%B7%AF.cpp" target="_blank" rel="noopener noreferrer">A星与K短路</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/07-%E6%90%9C%E7%B4%A2/BFS%E6%9C%80%E7%9F%AD%E8%B7%AF.cpp" target="_blank" rel="noopener noreferrer">BFS最短路</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/07-%E6%90%9C%E7%B4%A2/DFS%E4%B8%8E%E5%89%AA%E6%9E%9D.cpp" target="_blank" rel="noopener noreferrer">DFS与剪枝</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/07-%E6%90%9C%E7%B4%A2/DLX%E8%88%9E%E8%B9%88%E9%93%BE.cpp" target="_blank" rel="noopener noreferrer">DLX舞蹈链</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/07-%E6%90%9C%E7%B4%A2/%E5%8F%8C%E5%90%91BFS.cpp" target="_blank" rel="noopener noreferrer">双向BFS</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/07-%E6%90%9C%E7%B4%A2/%E6%8A%98%E5%8D%8A%E6%90%9C%E7%B4%A2.cpp" target="_blank" rel="noopener noreferrer">折半搜索</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/07-%E6%90%9C%E7%B4%A2/%E6%A8%A1%E6%8B%9F%E9%80%80%E7%81%AB%E4%B8%8E%E7%88%AC%E5%B1%B1.cpp" target="_blank" rel="noopener noreferrer">模拟退火与爬山</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/07-%E6%90%9C%E7%B4%A2/%E8%BF%AD%E4%BB%A3%E5%8A%A0%E6%B7%B1%E4%B8%8EIDA%E6%98%9F.cpp" target="_blank" rel="noopener noreferrer">迭代加深与IDA星</a></div></details>
<details class="template-chapter"><summary>计算几何<span>13 份模板</span></summary><div class="template-file-grid"><a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/08-%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/Delaunay%E4%B8%8EVoronoi.cpp" target="_blank" rel="noopener noreferrer">Delaunay与Voronoi</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/08-%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/%E4%B8%89%E7%BB%B4%E5%87%A0%E4%BD%95%E5%9F%BA%E7%A1%80.cpp" target="_blank" rel="noopener noreferrer">三维几何基础</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/08-%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/%E4%B8%89%E7%BB%B4%E5%87%B8%E5%8C%85.cpp" target="_blank" rel="noopener noreferrer">三维凸包</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/08-%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/%E5%87%B8%E5%8C%85Andrew.cpp" target="_blank" rel="noopener noreferrer">凸包Andrew</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/08-%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/%E5%8D%8A%E5%B9%B3%E9%9D%A2%E4%BA%A4.cpp" target="_blank" rel="noopener noreferrer">半平面交</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/08-%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/%E5%90%91%E9%87%8F%E5%9F%BA%E7%A1%80.cpp" target="_blank" rel="noopener noreferrer">向量基础</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/08-%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/%E5%9C%86%E5%B9%B6%E9%9D%A2%E7%A7%AF.cpp" target="_blank" rel="noopener noreferrer">圆并面积</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/08-%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/%E5%9C%86%E7%9A%84%E4%BA%A4%E7%82%B9%E4%B8%8E%E5%85%AC%E5%88%87%E7%BA%BF.cpp" target="_blank" rel="noopener noreferrer">圆的交点与公切线</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/08-%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/%E5%A4%9A%E8%BE%B9%E5%BD%A2%E9%9D%A2%E7%A7%AF%E5%B9%B6.cpp" target="_blank" rel="noopener noreferrer">多边形面积并</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/08-%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/%E5%B9%B3%E9%9D%A2%E6%9C%80%E8%BF%91%E7%82%B9%E5%AF%B9.cpp" target="_blank" rel="noopener noreferrer">平面最近点对</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/08-%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/%E6%97%8B%E8%BD%AC%E5%8D%A1%E5%A3%B3%E4%B8%8E%E5%A4%9A%E8%BE%B9%E5%BD%A2%E9%9D%A2%E7%A7%AF.cpp" target="_blank" rel="noopener noreferrer">旋转卡壳与多边形面积</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/08-%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/%E6%9C%80%E5%B0%8F%E5%9C%86%E8%A6%86%E7%9B%96.cpp" target="_blank" rel="noopener noreferrer">最小圆覆盖</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/08-%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95/%E9%97%B5%E5%8F%AF%E5%A4%AB%E6%96%AF%E5%9F%BA%E5%92%8C.cpp" target="_blank" rel="noopener noreferrer">闵可夫斯基和</a></div></details>
<details class="template-chapter"><summary>实现与调试<span>3 份模板</span></summary><div class="template-file-grid"><a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/09-%E5%85%B6%E4%BB%96/%E4%BA%A4%E4%BA%92%E9%A2%98%E6%A8%A1%E6%9D%BF.cpp" target="_blank" rel="noopener noreferrer">交互题模板</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/09-%E5%85%B6%E4%BB%96/%E5%8D%A1%E5%B8%B8%E6%8A%80%E5%B7%A7.cpp" target="_blank" rel="noopener noreferrer">卡常技巧</a>
<a href="https://github.com/Wch727/icpc-algorithm-template/blob/main/09-%E5%85%B6%E4%BB%96/%E9%9A%8F%E6%9C%BA%E6%95%B0%E4%B8%8E%E5%AF%B9%E6%8B%8D.cpp" target="_blank" rel="noopener noreferrer">随机数与对拍</a></div></details>
</div>

## 索引与配套资料

- [完整模板索引](https://github.com/Wch727/icpc-algorithm-template/blob/main/%E7%B4%A2%E5%BC%95.md)：按算法查找模板入口。
- [接口与复杂度说明](https://github.com/Wch727/icpc-algorithm-template/blob/main/_%E5%8F%B0%E8%B4%A6/api/README.md)：确认调用方式、依赖和复杂度。
- [算法说明与模块编排](https://github.com/Wch727/icpc-algorithm-template/blob/main/%E8%AF%B4%E6%98%8E/README.md)：正文与实现交替，纸质手册共用这些内容。
- [变量与调用约定](https://github.com/Wch727/icpc-algorithm-template/blob/main/%E8%AF%B4%E6%98%8E/%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F%E8%AF%B4%E6%98%8E.md)：查输入、状态、下标、返回结果与重置规则。
- [STL 操作速查表](https://github.com/Wch727/icpc-algorithm-template/blob/main/01-%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%8A%80%E5%B7%A7/STL%E5%AE%B9%E5%99%A8%E9%80%9F%E6%9F%A5.md)：查常见容器与操作。
- [常用公式与结论](https://github.com/Wch727/icpc-algorithm-template/blob/main/%E7%BB%93%E8%AE%BA%E9%80%9F%E6%9F%A5/ICPC%E5%B8%B8%E7%94%A8%E7%BB%93%E8%AE%BA.md)：查常用数学与算法结论。
- [赛事建模与技巧](https://github.com/Wch727/icpc-algorithm-template/blob/main/%E7%BB%93%E8%AE%BA%E9%80%9F%E6%9F%A5/%E8%B5%9B%E4%BA%8B%E5%BB%BA%E6%A8%A1%E4%B8%8E%E6%8A%80%E5%B7%A7.md)：整理模型转化、计数和边界条件。
- [打印与排版说明](https://github.com/Wch727/icpc-algorithm-template/blob/main/_%E5%8F%B0%E8%B4%A6/%E6%8E%92%E7%89%88%E8%AF%B4%E6%98%8E.md)：选择打印内容、字号与生成方式。

## 怎么使用

模板文件通常没有 main，可以按题目需要摘取单个模块。使用前需要检查容量、模数、下标、初始化方式和依赖；不同文件的全局变量或类型名可能重复，不能把整个目录直接拼到同一个程序里。

中文说明与代码一起维护，也记录输入、状态、返回结果和重置规则。部分实现使用 bits/stdc++.h、__int128，当前验证参数为 -std=c++2b。

## 代码组织与约定

01 到 09 目录中的 C++ 文件是纯模板，不带 main。一个文件可能包含多个相关模块，可以按需摘取；全局变量与类型名可能重名，所以不适合将整个目录拼接编译。

输入与主要状态优先放在全局，独立的数据结构实例、矩阵、多项式和几何对象保留必要参数。图使用 vector 邻接表，需要区分重边时保留边编号，残量网络使用边表配合邻接表。这些约定与初始化、容量和模数一起，是使用模板前需要核对的内容。

## 测试与维护

仓库有 **190 个 C++ 测试入口**，直接引用模板本体，通过边界样例、独立实现对照和随机对拍进行检查。验证脚本支持检查全库或单个章节，也可以指定编译器与并行任务数。

```powershell
python _台账/verify.py
python _台账/verify.py 04-图论 --compiler g++ --jobs 4
```

这些测试用于维护模板，实际解题时仍要针对题目验证边界。修改实现时，相关说明和测试也需要同步。

## 打印手册

配套的 LaTeX 手册采用 **A4 双栏排版**，共用仓库里的算法源码与说明，保留完整实现。打印配置可以选择章节和字号，测试文件与编译产物不进入正文。

```powershell
python _台账/生成LaTeX.py
python _台账/生成PDF.py
```

算法选材参考 OI Wiki 和 ICPC / CCPC 题解。部分实现来自第三方资料，具体来源与许可保留在文件注释中。

[查看仓库](https://github.com/Wch727/icpc-algorithm-template) · [使用说明与目录](https://github.com/Wch727/icpc-algorithm-template#readme)
