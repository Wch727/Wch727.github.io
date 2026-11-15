---
title: "icpc-algorithm-template"
published: 2026-10-05T21:02:31+08:00
description: "My C++ reference for ICPC and CCPC practice, with notes on complexity, tests, and a printable handbook."
category: "Competitive Programming"
tags: ["ICPC"]
lang: en
---

I put together this template library with Codex while preparing for ICPC and CCPC. It keeps the code, usage notes, tests, and printable handbook in one place. I took bronze at CCPC Leshan in 2026.

## What’s in it

The catalog contains 196 C++ template files. Here is the chapter breakdown.

| Chapter | Files | Examples |
| --- | ---: | --- |
| [Basics and techniques](https://github.com/Wch727/icpc-algorithm-template/tree/main/01-%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%8A%80%E5%B7%A7) | 14 | Monotonic stacks and queues, two pointers, bit operations, multidimensional differences |
| [Data structures](https://github.com/Wch727/icpc-algorithm-template/tree/main/02-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84) | 38 | Segment trees, link-cut trees, wavelet trees, rollback DSU |
| [Strings](https://github.com/Wch727/icpc-algorithm-template/tree/main/03-%E5%AD%97%E7%AC%A6%E4%B8%B2) | 15 | KMP, Aho–Corasick, suffix structures, palindromic trees |
| [Graph theory](https://github.com/Wch727/icpc-algorithm-template/tree/main/04-%E5%9B%BE%E8%AE%BA) | 48 | Shortest paths, tree algorithms, matching, flows, Steiner trees |
| [Mathematics](https://github.com/Wch727/icpc-algorithm-template/tree/main/05-%E6%95%B0%E5%AD%A6) | 39 | Number theory, combinatorics, matrices, polynomials, simplex |
| [Dynamic programming](https://github.com/Wch727/icpc-algorithm-template/tree/main/06-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92) | 18 | Knapsack, tree DP, digit DP, bitmask DP, Slope Trick |
| [Search](https://github.com/Wch727/icpc-algorithm-template/tree/main/07-%E6%90%9C%E7%B4%A2) | 8 | DFS and BFS, meet-in-the-middle, A*, IDA*, DLX |
| [Computational geometry](https://github.com/Wch727/icpc-algorithm-template/tree/main/08-%E8%AE%A1%E7%AE%97%E5%87%A0%E4%BD%95) | 13 | Convex hulls, half-plane intersection, circles, Minkowski sums |
| [Implementation and debugging](https://github.com/Wch727/icpc-algorithm-template/tree/main/09-%E5%85%B6%E4%BB%96) | 3 | Performance measurement, random tests, and interactive I/O |

## Using and testing a template

Most files have no `main`. Take the module you need and check its indexing, capacity, initialization, modulus, and dependencies. Several files reuse global names, so combining whole directories into one program can cause conflicts. The source notes are in Chinese, and some modules use GNU C++ extensions.

The test suite has 190 C++ entry points that include the actual templates. It checks boundary cases, compares against independent implementations, and runs randomized tests. The LaTeX handbook shares the same code and text and uses a two-column A4 layout.

[Repository and full file index](https://github.com/Wch727/icpc-algorithm-template) · [Complete file-by-file catalog in Chinese](/posts/algorithm-notebook/#完整模板列表)
