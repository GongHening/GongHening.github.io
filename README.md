# Gong Hening's Personal Website

This repository contains the source code for my personal website, hosted at [gonghening.github.io](https://gonghening.github.io) via GitHub Pages. Built with Jekyll and a customized Minimal Mistakes theme.

## Structure

```
├── _Blogs/              # Annual review essays (2020–2025)
├── _data/               # Navigation, author profile
├── _includes/           # HTML partials (header, cards, sidebar, etc.)
├── _layouts/            # Page layout templates
├── _pages/              # Site pages (homepage, links, 404)
├── _sass/               # SCSS stylesheets
├── assets/              # CSS, JS, fonts
├── images/              # Image assets
└── _config.yml          # Jekyll configuration
```

## Local Development

Requires [Ruby](https://www.ruby-lang.org/) and [Bundler](https://bundler.io/).

```bash
git clone https://github.com/GongHening/GongHening.github.io.git
cd GongHening.github.io
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000` to preview.

## Deployment

Push to the default branch and GitHub Pages will automatically build and deploy the site.

## Acknowledgments

Theme modified from [AcademicPages](https://github.com/academicpages/academicpages.github.io), originally forked from [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) by [Stuart Geiger](https://github.com/staeiou).
