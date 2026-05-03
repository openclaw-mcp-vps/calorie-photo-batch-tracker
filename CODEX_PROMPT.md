# Build Task: calorie-photo-batch-tracker

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: calorie-photo-batch-tracker
HEADLINE: Bulk analyze meal photos for calorie tracking
WHAT: Upload multiple meal photos at once, AI identifies foods and portions, automatically logs calories to MyFitnessPal/Cronometer with batch editing capabilities
WHY: Manual calorie logging takes 15+ minutes daily, photo apps only handle one meal at a time
WHO PAYS: Fitness enthusiasts and people tracking nutrition
NICHE: health-tracking
PRICE: $$8/mo

ARCHITECTURE SPEC:
A Next.js web app with file upload for batch photo processing, AI food recognition via OpenAI Vision API, calorie calculation, and API integrations with MyFitnessPal/Cronometer. Users upload multiple meal photos, review AI-detected foods/portions in a batch editor, then sync to their preferred tracking app.

PLANNED FILES:
- app/page.tsx
- app/upload/page.tsx
- app/batch-editor/page.tsx
- app/api/analyze-photos/route.ts
- app/api/calculate-calories/route.ts
- app/api/sync-myfitnesspal/route.ts
- app/api/sync-cronometer/route.ts
- app/api/webhooks/lemonsqueezy/route.ts
- components/PhotoUploader.tsx
- components/BatchEditor.tsx
- components/FoodItem.tsx
- lib/openai.ts
- lib/nutrition-db.ts
- lib/myfitnesspal-api.ts
- lib/cronometer-api.ts
- lib/lemonsqueezy.ts
- lib/auth.ts

DEPENDENCIES: next, react, tailwindcss, openai, uploadthing, @lemonsqueezy/lemonsqueezy.js, next-auth, prisma, @prisma/client, zod, react-hook-form, lucide-react, axios

REQUIREMENTS:
- Next.js 15 with App Router (app/ directory)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components (npx shadcn@latest init, then add needed components)
- Dark theme ONLY — background #0d1117, no light mode
- Stripe Payment Link for payments (hosted checkout — use the URL directly as the Buy button href)
- Landing page that converts: hero, problem, solution, pricing, FAQ
- The actual tool/feature behind a paywall (cookie-based access after purchase)
- Mobile responsive
- SEO meta tags, Open Graph tags
- /api/health endpoint that returns {"status":"ok"}
- NO HEAVY ORMs: Do NOT use Prisma, Drizzle, TypeORM, Sequelize, or Mongoose. If the tool needs persistence, use direct SQL via `pg` (Postgres) or `better-sqlite3` (local), or just filesystem JSON. Reason: these ORMs require schema files and codegen steps that fail on Vercel when misconfigured.
- INTERNAL FILE DISCIPLINE: Every internal import (paths starting with `@/`, `./`, or `../`) MUST refer to a file you actually create in this build. If you write `import { Card } from "@/components/ui/card"`, then `components/ui/card.tsx` MUST exist with a real `export const Card` (or `export default Card`). Before finishing, scan all internal imports and verify every target file exists. Do NOT use shadcn/ui patterns unless you create every component from scratch — easier path: write all UI inline in the page that uses it.
- DEPENDENCY DISCIPLINE: Every package imported in any .ts, .tsx, .js, or .jsx file MUST be
  listed in package.json dependencies (or devDependencies for build-only). Before finishing,
  scan all source files for `import` statements and verify every external package (anything
  not starting with `.` or `@/`) appears in package.json. Common shadcn/ui peers that MUST
  be added if used:
  - lucide-react, clsx, tailwind-merge, class-variance-authority
  - react-hook-form, zod, @hookform/resolvers
  - @radix-ui/* (for any shadcn component)
- After running `npm run build`, if you see "Module not found: Can't resolve 'X'", add 'X'
  to package.json dependencies and re-run npm install + npm run build until it passes.

ENVIRONMENT VARIABLES (create .env.example):
- NEXT_PUBLIC_STRIPE_PAYMENT_LINK  (full URL, e.g. https://buy.stripe.com/test_XXX)
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  (pk_test_... or pk_live_...)
- STRIPE_WEBHOOK_SECRET  (set when webhook is wired)

BUY BUTTON RULE: the Buy button's href MUST be `process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
used as-is — do NOT construct URLs from a product ID, do NOT prepend any base URL,
do NOT wrap it in an embed iframe. The link opens Stripe's hosted checkout directly.

After creating all files:
1. Run: npm install
2. Run: npm run build
3. Fix any build errors
4. Verify the build succeeds with exit code 0

Do NOT use placeholder text. Write real, helpful content for the landing page
and the tool itself. The tool should actually work and provide value.


PREVIOUS ATTEMPT FAILED WITH:
Codex exited 1: Reading additional input from stdin...
OpenAI Codex v0.121.0 (research preview)
--------
workdir: /tmp/openclaw-builds/calorie-photo-batch-tracker
model: gpt-5.3-codex
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019ded7c-0568-7c82-9f12-bec31fd792b1
--------
user
# Build Task: calorie-photo-batch-tracker

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: calorie-photo-batch-tracker
HEADLIN
Please fix the above errors and regenerate.