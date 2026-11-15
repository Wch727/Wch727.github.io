---
title: "statistical-field-station"
published: 2026-07-19T01:57:25+08:00
description: "A mathematical modeling study site with 17 chapters, interactive examples, and a guide to choosing methods. It works offline."
category: "Study Notes"
tags: ["Mathematical Modeling"]
lang: en
---

I made this site as a place to look things up while learning mathematical modeling. It has 17 chapters, a method-selection guide, and a glossary. The guide starts with questions such as whether two groups differ, how to forecast a trend, and which model fits the data.

[Open the tutorial](https://wch727.github.io/statistical-field-station/) · [Source code](https://github.com/Wch727/statistical-field-station)

## Chapters

| Chapter | Topic |
| --- | --- |
| 0 | Modeling toolkit |
| I | Descriptive statistics |
| II | Visualization |
| III | Correlation |
| IV | Hypothesis testing |
| V | Analysis of variance |
| VI | Linear regression |
| VII | Logistic regression |
| VIII | Classification |
| IX | Clustering |
| X | Evaluation and dimensionality reduction |
| XI | Time series |
| XII | Forecasting |
| XIII | Optimization |
| XIV | Multi-criteria evaluation |
| XV | Mechanistic models and differential equations |
| XVI | Networks and simulation |

## What you can try

The pages use KaTeX for formulas and D3 for charts. You can adjust logistic regression coefficients, move points in a correlation example, rotate PCA data, or see how SIR dynamics change with the parameters. I included notes on interpreting results, avoiding data leakage, and checking whether a method’s assumptions hold.

Download the repository and open `stats_tutorial.html` to read and use the browser demos offline. The Python examples run separately with their own dependencies and input data.

## Review and tests

I reviewed the chapters and demos and fixed issues involving tail probabilities, tied ROC/AUC scores, PCA, grey forecasts, AHP, and SIR. Checks include 72 SciPy comparisons, 23 desktop and mobile page checks, and targeted regressions.

[Chapter-by-chapter audit](https://github.com/Wch727/statistical-field-station/blob/master/docs/statistical-audit-2026-11.md)
