# Create Affiliate Website Workflow（联盟网站创建流程）


## Trigger（启动条件）


When the user requests:


"Create an Amazon affiliate website"


or


"Create a product review website"


Start this workflow.


---

# Phase 1: CEO Analysis（CEO分析）


CEO Agent must first analyze:


## Business Goal（商业目标）


Identify:


- Website type
- Product category
- Target audience
- Monetization model


Example:


Amazon Affiliate + Google Traffic + Product Reviews


---

## Product Research（产品研究）


Collect:


- Product information
- Market positioning
- Competitors
- User problems


---

## Website Strategy（网站策略）


Define:


- Website structure
- Content strategy
- SEO direction
- Conversion strategy


---

# Phase 2: SEO Planning（SEO规划）


Assign:


SEO-Agent


Tasks:


Create:


- Keyword strategy
- Search intent analysis
- Site architecture
- URL structure
- Internal linking plan


Output:


SEO roadmap.


---

# Phase 3: Content Planning（内容规划）


Assign:


Content-Agent


Tasks:


Create:


- Review topics
- Comparison topics
- Buying guides
- FAQ topics


Content must focus on:


Buyer problems and decision support.


---

# Phase 4: UI/UX Design（设计阶段）


Assign:


UIUX-Agent


Tasks:


Create:


- Visual direction
- Page layouts
- Component structure
- User journey


Design goals:


- Premium
- Trustworthy
- Easy to understand


---

# Phase 5: Frontend Development（开发阶段）


Assign:


Frontend-Agent


Tasks:


Build:


- Next.js application
- Components
- Pages
- SEO structure
- Responsive design


Follow:


frontend.md


---

# Phase 6: Content Implementation（内容部署）


Content-Agent provides:


- Page content
- Product information
- FAQ
- Comparison data


Frontend-Agent integrates content.


---

# Phase 7: Quality Testing（质量测试）


Assign:


QA-Agent


Check:


SEO

Content

UX

Performance

Affiliate compliance


---

# Phase 7.5: Iteration Loop（迭代循环）


If QA finds issues:
如果QA发现问题：


1. QA reports problems with Impact and Solution
   QA报告问题（含影响和解决方案）
2. Responsible agent fixes issues
   负责的agent修复问题
3. QA re-tests
   QA重新测试
4. Repeat until all checks PASS
   循环直到所有检查通过


---

# Phase 8: Final Review（最终审核）


CEO reviews:


## Business Level


Does this website:


- Help users?
- Build trust?
- Have monetization opportunities?


## Technical Level


Does this website:


- Perform well?
- Rank potential?
- Scale?


---

# Output（最终输出）


CEO provides:


## Website Plan


Including:


- Structure
- Pages
- Content plan
- Design direction
- Development status


---

# Team Communication Format（团队沟通格式）


Every agent report:


## Completed


What was done.


## Findings


Important discoveries.


## Recommendations


Next actions.


---

# Phase Dependency Rules（阶段依赖）


Sequential (must wait for previous):
顺序执行（必须等待上一阶段）


1 → 2 → 3 → 4 → 5 → 7 → 8


Parallel (can run simultaneously):
并行执行（可同时进行）


- Phase 3 (Content Planning) and Phase 4 (Design) can overlap
  阶段3（内容规划）和阶段4（设计）可重叠
- Phase 6 (Content) can start once Phase 5 (Development) has components ready
  阶段6（内容部署）可在阶段5（开发）组件就绪后开始


Gate checkpoints:
关卡检查点


- Between Phase 2→3: CEO approves SEO roadmap
  阶段2→3之间：CEO审批SEO路线图
- Between Phase 4→5: CEO approves design direction
  阶段4→5之间：CEO审批设计方向
- Between Phase 5→6: QA approves development baseline
  阶段5→6之间：QA审批开发基线
- Between Phase 7→8: All QA checks must PASS
  阶段7→8之间：所有QA检查必须通过


---

# Core Rule（核心规则）


Never create websites only for search engines.


Create websites that users trust and want to use.
