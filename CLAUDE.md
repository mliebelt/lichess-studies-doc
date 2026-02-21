# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docusaurus 3 documentation site for Lichess Studies, a chess training tool. The documentation is bilingual (German/English) with German as the default locale.

Deployed at: https://lichess-studies-doc.netlify.app/

## Development Commands

```bash
# Start development server (default: http://localhost:3000)
npm start

# Build for production
npm run build

# Serve production build locally
npm run serve

# TypeScript type checking
npm run typecheck

# Generate translation files for i18n
npm run write-translations

# Clear Docusaurus cache and generated files
npm run clear
```

### Remarks to the commands

* `npm start` Starts only the German part of the documentation, the English one is not automatically built.
* `npm build; npm serve` Needed to have the English documentation available as well (but without automatic update).

## Project Structure & Architecture

### Documentation Content

- **`docs/`** - Primary documentation in German (default locale)
  - Content follows auto-generated sidebar from filesystem structure (see `sidebars.ts`)
  - Markdown files with frontmatter for positioning and metadata

- **`i18n/en/docusaurus-plugin-content-docs/current/`** - English translations
  - Mirror structure of `docs/` directory
  - Translation files must match the same filename and frontmatter structure

- **`docs/images/` and `i18n/en/docusaurus-plugin-content-docs/current/images/`** - Documentation images
  - Images are locale-specific and stored in each locale's directory

### Internationalization (i18n)

The site uses Docusaurus i18n with two locales:
- **German (`de`)** - Default locale, content in `docs/`
- **English (`en`)** - Translated content in `i18n/en/docusaurus-plugin-content-docs/current/`

When editing documentation:
1. Update German content in `docs/`
2. Update corresponding English translation in `i18n/en/docusaurus-plugin-content-docs/current/`
3. Maintain parallel file structure between both locales

Translation metadata is stored in:
- `i18n/de/code.json` - German UI translations
- `i18n/en/code.json` - English UI translations

### Rules for working on new content

* Try to work not on many topics, but on one only.
* Ensure that before committing (at least before pushing) it, the new German parts are automatically translated to English.
* Check as well if the terms used fit well to the language of Lichess used, and that the images are locale-specific. If necessary, recreate the English images again by having the Lichess studies / Lichess UI switched to the English ones.

### Git Commit Guidelines

* Do NOT include "Co-Authored-By: Claude" or similar attribution in commit messages
* Follow the existing commit message style with `#N` prefix for numbered commits
* Keep commit messages concise and focused on the changes made

### Configuration

- **`docusaurus.config.ts`** - Main Docusaurus configuration
  - Site metadata, theme config, navbar, footer
  - i18n settings (defaultLocale: 'de', locales: ['de', 'en'])
  - Preset configuration for docs and theme

- **`sidebars.ts`** - Sidebar configuration
  - Currently uses auto-generated sidebar from `docs/` directory structure
  - Sidebar structure is automatically mirrored for all locales

- **`tsconfig.json`** - TypeScript configuration extending Docusaurus defaults

### Components & Styling

- **`src/components/`** - React components (e.g., HomepageFeatures)
- **`src/pages/`** - Custom pages outside the docs
- **`src/css/custom.css`** - Global CSS overrides and custom styles
- **`static/`** - Static assets (images, favicons, etc.) served at root

### Build Output

- **`build/`** - Production build output (gitignored)
- **`.docusaurus/`** - Generated files and cache (gitignored)

## Requirements

- Node.js >= 20.0 (specified in `package.json`)
- npm for package management

## Deployment

The site is deployed to Netlify. The `build/` directory contains the production build after running `npm run build`.
