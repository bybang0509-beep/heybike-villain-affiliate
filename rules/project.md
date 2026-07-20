# Project Rules（项目总规则）

## Role（角色）

You are working on an Amazon Affiliate Review Website project.

你正在开发一个 Amazon 联盟测评网站项目。

This project is designed to generate organic traffic from Google and monetize through affiliate commissions.

这个项目的目标是通过 Google 自然搜索获得流量，并通过 Amazon Affiliate 获取佣金。


---

# Project Goal（项目目标）


The website must be:

网站必须：

- SEO optimized（SEO优化）
- Conversion focused（注重转化）
- Fast loading（高速加载）
- Mobile friendly（移动端友好）
- Easy to scale（方便扩展）
- Easy to maintain（方便维护）


The website is not an online store.

该网站不是传统电商网站。


The main purpose:

核心目的：

Help users make purchase decisions.

帮助用户做购买决策。


---

# Website Type（网站类型）


Supported website models:


## Single Product Affiliate Site（单产品联盟站）


Example:

例如：

Any Product Review Website

Example: Electric Bike Review, Tech Gadget Review, Fitness Equipment Review


Structure:

结构：

Homepage

↓

Product Review

↓

Comparison Pages

↓

Buying Guides

↓

Blog Content


---

## Brand Affiliate Website（品牌联盟站）


Example:

例如：

Electric Bike Brand Review Website


Structure:

结构：

Homepage

Products

Reviews

Comparisons

Buying Guides

Blog

FAQ

About

Contact


---

# Technology Stack（技术栈）


Default technology:


Frontend:

前端：

- Next.js
- React
- TypeScript


Styling:

样式：

- Tailwind CSS


UI Components:

组件：

- shadcn/ui


Images:

图片：

- WebP format


Deployment:

部署：

- Vercel


Version Control:

版本：

- GitHub



---

# Project Structure（项目目录结构）


Use this structure:


```
project/

├── app/
│
│── components/
│
│── data/
│
│── content/
│
│── public/
│
│── styles/
│
│── utils/
│
│── config/
│
│── README.md
│
└── package.json

```


---

# App Structure（页面结构）


Use Next.js App Router.


Example:


```
app/

├── page.tsx
├── layout.tsx
├── about/
│   └── page.tsx
│
├── reviews/
│   └── page.tsx
│
├── comparisons/
│   └── page.tsx
│
├── buying-guides/
│   └── page.tsx
│
├── blog/
│   └── page.tsx
│
└── products/
    └── page.tsx

```


---

# Component Rules（组件规则）


Create reusable components.


Do not write repeated code.


Common components:


```
components/

├── Header

├── Footer

├── Hero

├── ProductCard

├── Rating

├── ProsCons

├── ComparisonTable

├── SpecificationTable

├── CTAButton

├── FAQ

├── ReviewBox

├── Breadcrumb

```

---

# Naming Rules（命名规范）


Use English names only.


正确：

```
ProductCard.tsx

ReviewSection.tsx

ComparisonTable.tsx

```


禁止：

```
产品卡片.tsx

首页组件.tsx

```


理由：

保持国际开发规范。


---

# URL Structure（URL规则）


URLs must be:

必须：

- Short
- Clean
- SEO friendly


Correct:

正确：

```
/product-name-review

/product-a-vs-product-b

/best-product-category

```


Wrong:

错误：

```
/product?id=12345

/article123

/page-new

```


---

# Content Structure（内容结构）


All content should be separated from code.


Example:


```
content/

├── reviews/

│   └── product-review.md


├── comparisons/

│   └── product-a-vs-b.md


├── guides/

│   └── best-product-category.md

```


Benefits:

优点：

- Easy editing
- Easy AI generation
- Easy migration
- Better maintenance


---

# Product Data Rules（产品数据规则）


Product information should be stored separately.


Example:


```
data/products.ts

```


Include:


- Product name
- Brand
- Model
- Price
- Specifications
- Features
- Images
- Amazon link


Never hardcode product information everywhere.


---

# Image Management（图片管理）


Images must follow:


Folder:

```
public/images/

```


Structure:


```
images/

├── products/

├── reviews/

├── comparisons/

├── blog/

└── icons/

```


Filename rules:


Correct:

```
product-name-category-review.webp

```


Wrong:

```
IMG001.webp

photo-new.webp

```


---

# Content Publishing Rules（内容发布规则）


Before publishing any page:


Must have:


SEO:

- Title
- Meta Description
- Keywords
- Schema


Content:

- Introduction
- Main sections
- FAQ
- CTA


Technical:

- Mobile responsive
- Fast loading
- No errors


---

# Reusability Rules（复用规则）


The project should be designed as a template.


Future websites should be created by changing:


- Brand name
- Product data
- Images
- Content


The framework should remain unchanged.


Example:


Brand A Website

↓

Brand B Website

↓

Brand C Website


Same system.

Different data.


---

# Scalability Rules（扩展规则）


The website should support:


Future additions:


- More products
- More categories
- More articles
- More comparison pages
- More languages


Do not build a one-time website.


Build an expandable affiliate platform.


---

# Code Quality Rules（代码质量）


Always:


- Write clean code
- Use reusable components
- Add comments when necessary
- Avoid unnecessary dependencies
- Keep performance high


Never:


- Duplicate code
- Install unnecessary packages
- Create messy structures


---

# Final Project Principle（最终原则）


Build a professional affiliate website system.

建立专业联盟网站系统。


The goal is:

目标：

One website → Template

Template → Multiple profitable websites


Create assets, not temporary pages.