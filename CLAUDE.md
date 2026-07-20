# Affiliate Website Builder

AI-powered Affiliate Website Generator. Builds SEO-optimized, conversion-focused affiliate review websites using a multi-agent team.

## Project Type

Universal Affiliate Review Website Template — Reusable framework for building affiliate sites in any niche. Adaptable to any product category, affiliate program, and target audience.

## Technology Stack

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- UI Library: shadcn/ui
- Deployment: Vercel
- Version Control: GitHub

## Directory Structure

```
rules/               # Execution rules for each agent (Chinese/English)
agents/              # Agent definitions (Chinese/English)
workflows/           # Multi-phase workflow scripts
app/                 # Next.js App Router pages
components/          # Reusable React components
data/                # Product data (separated from UI)
content/             # Markdown content files
public/images/       # Optimized images (WebP)
lib/                 # Utilities and helpers
hooks/               # React hooks
utils/               # Helper functions
types/               # TypeScript type definitions
```

## Agent Team

| Agent | File | Role |
|-------|------|------|
| CEO | `agents/CEO.md` | Project management, task assignment, quality control |
| SEO-Agent | `agents/SEO-Agent.md` | Keyword research, on-page SEO, Schema |
| Content-Agent | `agents/Content-Agent.md` | Reviews, comparisons, buying guides |
| UIUX-Agent | `agents/UIUX-Agent.md` | Visual design, layout, conversion |
| Frontend-Agent | `agents/Frontend-Agent.md` | Next.js development, components, performance |
| QA-Agent | `agents/QA-Agent.md` | SEO testing, content QA, performance audit |

Each agent references its rule files under `rules/`. See agent files for exact rule references.

## Workflows

- `workflows/create-affiliate-site.md` — Full 8-phase website creation process

## Key Conventions

- All content is bilingual (Chinese primary, English secondary)
- All code and filenames use English only
- Product data lives in `data/`, never hardcoded in components
- Content lives in `content/` as Markdown files
- Images use WebP format with SEO-friendly filenames
- URLs are clean and keyword-relevant

## How to Use This Template

1. Define your niche, products, and target audience
2. Populate `data/` with product information
3. Create content in `content/` following the rules in `rules/`
4. The agent team handles SEO, content, design, development, and QA

## Rules Usage

When working on this project, always consult the relevant rule file in `rules/` before making decisions. Rules define execution standards for SEO, content, design, frontend, QA, and affiliate compliance.
