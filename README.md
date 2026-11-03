# 高项研习社 · 软考高项学习平台

这是《信息系统项目管理师》24章学习平台的静态站点仓库。项目基于 Vue 3，使用原生 HTML/CSS/JavaScript，支持章节知识点、练习、错题本、模拟考试、案例与论文练习，学习数据默认保存在浏览器 localStorage。

## 通过 GitHub Pages 发布

1. 将学习网站文件夹 **内部** 的 `index.html`、`assets/`、`data/` 上传到此仓库根目录（**不要**多套一层 `soft_exam_vue/` 文件夹）。
2. 仓库 `Settings → Pages → Build and deployment → Source` 选择 **GitHub Actions**。
3. 每次推送至 `main` 分支，将自动执行 `.github/workflows/deploy.yml` 发布站点。也可以在 `Actions → Deploy static learning site → Run workflow` 手动发布。
4. 网站地址为 <https://1524701427.github.io/soft-exam/>。

### 资料版权注意

`assets/chapter01-reference.pdf`、`assets/chapter01-mindmap.pdf`、`assets/mindmap-*.webp` 是原课程资料或导出图片。**公开仓库请先确认你有再发布权**；否则不要上传这些原始文件及其截图，也不要在公开页面提供缺失资源的链接。学习总结与后续自行编写的内容可以独立管理。

> 这是公共静态站点，不具备后端登录或跨设备学习记录同步能力。
