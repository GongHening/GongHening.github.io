# Gong Hening's Academic Website

本仓库是我个人学术主页的源代码。该网站基于 [AcademicPages](https://github.com/academicpages/academicpages.github.io) 模板构建，并由 GitHub Pages 提供托管服务。

## 📂 目录结构

本项目的核心目录和文件结构如下，方便日常维护和内容更新：

- `_config.yml`: 网站的全局核心配置文件（包含个人基本信息、社交链接、网站设置等）。
- `_data/`: 存放网站的数据文件，如导航栏配置 (`navigation.yml`) 和作者信息 (`authors.yml`)。
- `_pages/`: 网站的独立页面（如主页 `about.md`、简历页等）。
- `_publications/`: 存放发表的论文或出版物信息。
- `_talks/`: 存放学术报告、讲座或会议记录。
- `_teaching/`: 存放教学经历或课程相关资料。
- `_Repositories/`: 存放开源项目与代码仓库的展示内容。
- `_Notes/`: 存放个人笔记与课程资料。
- `images/`: 存放网站所需的图片资源（头像、项目配图等）。
- `files/`: 存放供下载的静态文件（如 PDF 版简历）。

## 🚀 本地运行与调试

如果你希望在本地预览网站的修改效果，请确保你的计算机上已安装 [Ruby](https://www.ruby-lang.org/) 和 [Bundler](https://bundler.io/)。

1. **克隆仓库到本地**
   ```bash
   git clone https://github.com/GongHening/GongHening.github.io.git
   cd GongHening.github.io
   ```

2. **安装依赖**
   ```bash
   bundle install
   ```
   *(注：如果遇到依赖问题，可尝试运行 `bundle add webrick faraday-retry`)*

3. **启动本地服务器**
   ```bash
   bundle exec jekyll serve
   ```
   启动后，在浏览器中访问 `http://localhost:4000` 即可实时预览网站。

## ☁️ 部署

本网站使用 GitHub Pages 进行自动化部署。只需将修改后的 Markdown 文件或配置推送到默认分支，GitHub 会自动构建并发布最新版本的网站。

## 📄 致谢

本网站的主题和框架修改自 [AcademicPages](https://github.com/academicpages/academicpages.github.io)，该模板最初由 [Stuart Geiger](https://github.com/staeiou) 基于 Minimal Mistakes 开发。