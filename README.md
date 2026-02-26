# Gong Hening's Academic Website

This repository contains the source code for my personal academic website. The site is built upon the [AcademicPages](https://github.com/academicpages/academicpages.github.io) template and is hosted via GitHub Pages.

## 📂 Repository Structure

The core directories and files in this repository are organized as follows to facilitate easy maintenance and content updates:

- `_config.yml`: The global configuration file containing personal information, social links, and site-wide settings.
- `_data/`: Contains data files such as navigation bar configurations (`navigation.yml`) and author details (`authors.yml`).
- `_pages/`: Standalone pages for the website (e.g., the homepage `about.md`, CV page).
- `_publications/`: Markdown files detailing published papers and publications.
- `_talks/`: Markdown files for academic talks, conference presentations, and seminars.
- `_teaching/`: Markdown files related to teaching experiences and course materials.
- `_Repositories/`: Showcases of open-source projects and code repositories.
- `_Notes/`: Personal academic notes and course-related materials.
- `images/`: Image assets used across the site (e.g., profile pictures, project illustrations).
- `files/`: Static files available for download (e.g., PDF version of the CV).

## 🚀 Local Development

If you wish to preview changes locally before pushing them, ensure you have [Ruby](https://www.ruby-lang.org/) and [Bundler](https://bundler.io/) installed on your machine.

1. **Clone the repository**
   ```bash
   git clone https://github.com/GongHening/GongHening.github.io.git
   cd GongHening.github.io
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```
   *(Note: If you encounter dependency issues, try running `bundle add webrick faraday-retry`)*

3. **Start the local server**
   ```bash
   bundle exec jekyll serve
   ```
   Once the server is running, open your browser and navigate to `http://localhost:4000` to preview the website.

## ☁️ Deployment

This website uses GitHub Pages for automated deployment. Simply push your modified Markdown files or configurations to the default branch, and GitHub will automatically build and publish the latest version of the site.

## 📄 Acknowledgments

The theme and framework of this website are modified from [AcademicPages](https://github.com/academicpages/academicpages.github.io), which was originally forked by [Stuart Geiger](https://github.com/staeiou) from the Minimal Mistakes Jekyll theme.