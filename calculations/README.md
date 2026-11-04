# 高项研习社 · 计算专题独立模块

- 入口：仓库根目录 `index.html` 左侧导航新增 **计算专题**。
- 新页面：`/calculations/`，纯前端 Vue 3，与原主站共用已打包的 Vue 运行时（`../assets/vue.global.prod.js`）。
- 范围：11 份课程讲义，4 个专题分组，11 讲、34 道数值练习、8 个可操作计算器、公式速查。
- 原有 24 章、800 道题、图解、错题本和学习进度都不做任何调整；**唯一对主站的修改**是 `index.html` 增加一条静态导航链接。
- `calculations/` 中 `data.js`、`core.js`、`app.js`、`style.css` 完全独立；练习进度保存在 `localStorage` 键 `gao-xiang-calculations-v1`，不读取或覆盖主站学习记录。
- 习题按讲义页码标明来源，部分习题由课程公式改编；不宣称年份标注均为独立核验的官方真题。
- 本仓库是公开仓库，不包含上传的课程 PDF，也不包含授课导图/截图。

本地检查：`node --check calculations/core.js && node --check calculations/app.js && node test_core.js`（测试脚本可独立保存在工作区，不上传）。
