# 高项研习社 · v1.7（前十二章图解增强版）

本项目为纯前端 Vue 3 学习网站，可通过 GitHub Pages 直接托管。无需 Node.js 构建，不需要后端和数据库。

## 本版内容

- 教材 24 章目录保持不变；前 12 章现已录入。其余 13–24 章仍显示章节占位。
- 181 个知识小节、413 道配套练习题、184 张原创交互式知识图解。
- 第 9 章：范围管理（48 道练习题、23 张图解）
- 第 10 章：进度管理（27 道练习题、24 张图解）；新增可编辑活动工期的关键路径动态推演。
- 第 11 章：成本管理（33 道练习题、20 张图解）；新增 EVM 挣值分析和 EAC/TCPI 计算器。
- 第 12 章：质量管理（26 道选择题、4 道判断题、18 张图解）。
- 原有前八章数据、学习记录存储键、错题本、收藏、模拟考试、笔记、知识图解导航、暗色模式等保留。

## 文件位置

- `index.html`：Vue 模板与所有页面布局。
- `assets/app.js`：前端学习逻辑、进度记录、题库、计算实验室。
- `assets/style.css`, `assets/visuals.css`：样式（含响应式）。
- `data/chapterXX.js` / `data/chapterXX.json`：逐章知识点、练习与参考答案。
- `data/visuals.js`：交互图解定义。
- `assets/chapter09-overview.svg` ... `chapter12-overview.svg`：四个新增章节的原创概览图。

## 本地启动

可在包含 `index.html` 的目录执行 `python -m http.server 8000`，打开 `http://localhost:8000`；也可以双击 `index.html` 离线使用。

## 部署到 GitHub Pages

仓库 `1524701427/soft-exam` 的默认分支 `main` 已配置 Pages 部署流程。将本项目所有文件复制到仓库根目录，执行：

```bash
git add .
git commit -m "feat: add chapters 9-12 with interactive diagrams and calculators"
git push origin main
```

随后可在 `https://1524701427.github.io/soft-exam/` 查看。更新后如仍为旧页面，请强制刷新浏览器缓存。

## 资料及版权说明

- 本版依照用户上传的课程讲义、章末答案表和思维导图*独立归纳*；不分发原课程 PDF 或原版思维导图。
- 所有新增图解均独立绘制；示例计算数据只用于练习，不代表真实项目。
- 题目年份、批次依原讲义保留，并不代表已逐题核验为官方公开真题。
- 讲义考情预测是授课观点，非考试承诺。遇到讲义口径冲突，应核对当期官方教材及命题要求。
- 用户学习数据保存在浏览器 localStorage，本版本继续使用原有存储键 `gao-xiang-study-v1`。
