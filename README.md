# wax-yield-farming-opportunity-aggregator — Yield Farming Opportunity Aggregator

> **Status:** 🔒 Private (In Development) | Target Public Release: August 2026  
> **Category:** Advanced DeFi & Concentrated Liquidity Visualizers  
> **Parent Catalog:** [pixel-journey/wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

**A clean, tabular interface that scrapes active token distribution rewards across public liquidity pools, ranking them by pure, un-subsidized capital efficiency on WAX.**

---

## 1. Overview & Goal

This blueprint delivers a transparent, real-time aggregator that surfaces the best yield farming opportunities across WAX liquidity pools. It focuses on **net, unsubsidized returns** (excluding temporary incentives) so users can make sustainable decisions rather than chasing short-term emissions.

**Why it matters for WAX/Antelope:**
Many yield dashboards hide true economics behind flashy APYs. This tool brings clarity by showing sustainable fee income vs. inflationary rewards.

Exclusively uses **public infrastructure** (Alcor endpoints, pool state, and on-chain reward distributions via Hyperion where available).

**Target users:** Yield farmers, liquidity providers, portfolio managers, DAO treasuries.

**Success metrics:**
- Accurate net APY calculations
- Fast ranking and filtering
- Clear distinction between sustainable vs. subsidized yields

---

## 2. Concepts & Inspiration

**Core concepts:**
- Liquidity pool fee revenue vs. token emission schedules
- Capital efficiency metrics (fees earned per dollar of TVL)
- On-chain reward distribution parsing
- Historical performance for trend analysis

**User pain points:**
Current tools often show inflated APYs that collapse when emissions end. Users need a reliable way to compare true economic opportunity.

**Inspirations:**
- DeFiLlama yield aggregator (but WAX-native and more transparent)
- Yearn-style opportunity ranking
- Transparent fee vs. emission breakdowns

**Related blueprints:** Pairs beautifully with `wax-alcor-lp-behavioral-profiler`, `wax-concentrated-liquidity-roi-matrix`, and `wax-lp-impermanent-loss-heat-map`.

---

## 3. Design Specifications (Pixel Journey Standards)

### 3.1 Visual & Interaction Design
- Clean data-table-first layout with powerful filters and sorting
- Color coding: Green for high sustainable yield, amber for emission-heavy, red for low efficiency
- Subtle sparklines for 7/30-day trends
- Responsive: Excellent on desktop, usable on tablet

### 3.2 Key Views / Components
- `OpportunityTable.tsx` — Sortable, filterable table with columns for Pool, TVL, Fee APY, Emission APY, Net APY, Efficiency Score
- `PoolDetailModal.tsx` — Expanded view with historical charts and breakdown
- `FilterBar.tsx` — By protocol, asset pair, risk level, minimum TVL
- `EfficiencyScore.tsx` — Visual badge/rating component

### 3.3 Accessibility (A11y) & Inclusive Design
- WCAG 2.2 AA
- Full keyboard navigation and screen reader support for tables
- High contrast mode
- Reduced motion friendly

### 3.4 Performance & Optimization Targets
- Lighthouse 95+
- Fast client-side filtering and sorting (no server)
- Efficient caching of pool data

---

## 4. Technical Architecture

### 4.1 Core Tech Stack (Standardized)
- **Framework:** Next.js 15 (App Router) + TypeScript (strict)
- **Styling:** Tailwind CSS + shadcn/ui + framer-motion
- **State & Data:** @tanstack/react-query + zod
- **Wallet:** @wharfkit/session (optional for personalized views)
- **Blockchain Data:**
  - Alcor public endpoints for pool TVL, volume, and fees
  - Hyperion for historical reward distributions and emissions
- **Visualization:** Recharts for sparklines and mini charts
- **Utilities:** date-fns, lucide-react, sonner

### 4.2 Data Flow Diagram
```
Alcor Pool List + Current State
    ↓
Hyperion Reward & Emission History
    ↓
Client-side Net Yield Calculator
    ↓
React Query Cache + Local Filters
    ↓
Beautiful Interactive Table + Detail Views
```

### 4.3 Folder Structure
```
app/
├── (dashboard)/
│   └── page.tsx
├── components/
│   ├── table/
│   │   ├── OpportunityTable.tsx
│   │   └── PoolDetailModal.tsx
│   ├── filters/
│   │   └── FilterBar.tsx
├── hooks/
│   ├── useYieldOpportunities.ts
│   └── usePoolDetail.ts
├── lib/
│   ├── wax/
│   │   ├── alcor-client.ts
│   │   ├── hyperion-client.ts
│   │   └── yield-calculator.ts
│   └── utils.ts
├── types/
│   └── index.ts
public/
└── mock-data/
```

### 4.4 Security & Privacy Notes
- Read-only data fetching
- Optional wallet connection for personalized saved views only
- No secrets stored

---

## 5. Implementation Examples & Code Snippets

**1. Core yield calculation (simplified)**
```ts
// lib/wax/yield-calculator.ts
export function calculateNetYield(pool: PoolData, historicalRewards: RewardData[]) {
  const feeAPY = (pool.dailyFees / pool.tvl) * 365 * 100;
  const emissionAPY = calculateEmissionAPY(historicalRewards);
  return {
    feeAPY,
    emissionAPY,
    netAPY: feeAPY + emissionAPY,
    efficiencyScore: feeAPY / (feeAPY + emissionAPY) // higher = more sustainable
  };
}
```

**2. Data fetching hook**
```ts
// hooks/useYieldOpportunities.ts
export function useYieldOpportunities() {
  return useQuery({
    queryKey: ['yield-opportunities'],
    queryFn: fetchAndCalculateYields,
    refetchInterval: 30000,
  });
}
```

---

## 6. Demo & Testing Strategy
- Live Demo Toggle: Mock Data ↔ Mainnet
- Strong emphasis on accurate calculations with test vectors
- Playwright e2e for filtering, sorting, and modal flows
- Vitest for calculator logic
- Vercel previews

---

## 7. Roadmap & Development Phases

**Phase 0 — Scaffold (1 day)**
- Repo init, Tailwind + shadcn, basic table layout

**Phase 1 — Data Layer (3–4 days)**
- Alcor + Hyperion clients, yield calculator engine, TypeScript types, caching

**Phase 2 — Core UI (4 days)**
- Interactive table, filters, detail modal, sparklines, responsive

**Phase 3 — Polish & Edge Cases (2 days)**
- Loading/error states, a11y audit, performance, empty states

**Phase 4 — Documentation & Release (2 days)**
- Full README, screenshots, make public, update catalog

**Future Enhancements**
- Personalized watchlist with wallet connection
- Historical performance tracking
- Alerts for new high-efficiency opportunities

---

## 8. Visual References & Mockups
The table should feel like a professional DeFiLlama / Yearn interface but cleaner and more WAX-native. Strong visual hierarchy between sustainable fee income and temporary emissions. Efficiency score as a prominent badge.

---

## 9. Related Blueprints & Ecosystem Fit
- `wax-alcor-lp-behavioral-profiler` — Understand LP behavior on top opportunities
- `wax-concentrated-liquidity-roi-matrix` — Deep dive into specific pools
- `wax-lp-impermanent-loss-heat-map` — Risk context for high-yield pools

---

## 10. License, Contributing & Credits
- MIT License
- Built with public WAX infrastructure (Alcor, Hyperion)
- Pixel Journey Design System attribution

**Pixel Journey — Beautiful interfaces for public blockchain data.**
