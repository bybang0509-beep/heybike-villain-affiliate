# Frontend Rules（前端开发规则）


## Purpose（目的）


These rules define frontend development standards for Amazon Affiliate Websites.

这些规则用于规范 Amazon 联盟网站前端开发标准。


The goal is to build websites that are:


目标：

- Fast（快速）
- SEO friendly（SEO友好）
- Responsive（响应式）
- Maintainable（易维护）
- Scalable（可扩展）
- Professional（专业）


---

# Technology Stack（技术栈）


Use:


Framework:

Next.js


Language:

TypeScript


Styling:

Tailwind CSS


Components:

Reusable React Components


UI:

shadcn/ui when appropriate


Deployment:

Vercel


---

# Development Philosophy（开发理念）


Build systems, not pages.


不要只做页面。


Create reusable components and templates.


创建可复用组件和模板。


The website should support future expansion.


网站必须支持未来扩展。


---

# Next.js Rules（Next.js规范）


Use:

App Router


Preferred structure:


```
app/

├── page.tsx
├── layout.tsx
├── loading.tsx
├── error.tsx
├── not-found.tsx

```


---

# Server Components（服务器组件）


Use Server Components by default.


默认使用 Server Component。


Only use Client Components when necessary.


只有必要时使用 Client Component。


Examples:


Interactive forms

Animations

User interactions


---

# Component Architecture（组件架构）


Create reusable components.


Example:


```
components/

├── Header.tsx

├── Footer.tsx

├── Hero.tsx

├── ProductCard.tsx

├── Rating.tsx

├── ProsCons.tsx

├── ComparisonTable.tsx

├── FAQ.tsx

├── CTAButton.tsx

```


---

# Component Rules（组件规则）


Each component should:


Have one responsibility.


一个组件只负责一个功能。


Avoid:


Large components with hundreds of lines.


禁止：

一个组件包含所有代码。


---

# Naming Rules（命名规则）


Use:


PascalCase for components.


Example:


```
ProductCard.tsx

ReviewSection.tsx

```


Use:


camelCase for functions.


Example:


```
getProductData()

formatPrice()

```


---

# File Organization（文件组织）


Recommended:


```
src/

├── app/

├── components/

├── data/

├── lib/

├── hooks/

├── utils/

├── types/

```


---

# Data Management（数据管理）


Separate data from UI.


Do not hardcode product information inside components.


Wrong:


```tsx
<h1>Product Name</h1>

```


Correct:


```tsx
<Product name={product.name}/>

```


---

# Product Data Structure（产品数据结构）


Products should contain:


Example:


```ts
{
name,

brand,

category,

price,

rating,

features,

specifications,

pros,

cons,

amazonUrl,

images

}

```


---

# SEO Implementation（SEO实现）


Every page must include:


Metadata:


- Title
- Description
- Keywords
- Open Graph


Use:


Next.js Metadata API


Example:


```ts
export const metadata = {}

```


---

# Structured Data（结构化数据）


Implement Schema when needed:


- Product
- Review
- FAQ
- Article
- Breadcrumb


Use JSON-LD.


---

# Image Optimization（图片优化）


Always use:


Next/Image


Rules:


Images must:


- Have width
- Have height
- Have alt text
- Use optimized formats


Preferred:


WebP


---

# Performance Rules（性能规则）


Optimize:


## Loading Speed


Target:


LCP < 2.5 seconds


---

## Images


Compress images.


Lazy load when possible.


---

## Code


Avoid:


Unused packages

Large dependencies

Duplicate code


---

# Responsive Design（响应式设计）


Must support:


Mobile

Tablet

Desktop


Test:


320px width


768px width


1440px width


---

# Mobile First（移动优先）


Design for mobile first.


Then expand to desktop.


---

# Styling Rules（样式规范）


Use Tailwind CSS.


Avoid excessive custom CSS.


Keep styles consistent.


---

# UI Consistency（界面一致性）


Maintain:


Same spacing

Same typography

Same buttons

Same cards


Across the entire website.


---

# Accessibility Rules（无障碍）


Follow:


Semantic HTML.


Use:


header

main

section

article

footer


Images require:


alt text


Buttons require:


clear labels


---

# SEO Friendly HTML（SEO友好HTML）


Use:


Correct heading structure.


Rules:


One H1 per page.


H2 for sections.


H3 for subsections.


---

# URL Routing（路由规则）


Use clean URLs.


Example:


```
/reviews/product-name

/comparisons/product-a-vs-product-b

/guides/best-product

```


Avoid:


```
/page?id=123

```


---

# Security Rules（安全规范）


Never expose:


API keys

Private information

Secrets


Use:


Environment variables.


---

# Dependency Rules（依赖规则）


Before installing packages:


Ask:


Do we really need this?


Avoid unnecessary dependencies.


---

# Code Review Rules（代码审核）


Before completion check:


Code:


- Clean
- Reusable
- No duplication


Performance:


- Fast loading
- Optimized images


SEO:


- Metadata exists
- Schema implemented


---

# Template Development Rules（模板开发）


The website should allow:


Change:


Brand

Products

Images

Content


Without rebuilding the entire system.


---

# Final Principle（最终原则）


The frontend is the foundation of the affiliate business.


Good code creates:


Better SEO

Better speed

Better user experience

Better scalability


Build a reusable affiliate website engine, not a single website.