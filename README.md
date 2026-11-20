# The higher of two typed rates

**Trust label:** `educational-reference`  
**Catalog:** `wax-ecosystem-blueprint-catalog` (private index; not this public course)

400 bps beats 250 bps by 150. These numbers are not yields.

The earlier README described a live product. This tree does not ship that.

## What is actually in the repo

| Piece | Role |
| --- | --- |
| `src/apr.ts` | The pure rules |
| `src/apr.test.ts` | The claims in the verification log |
| `src/usecases.ts` | HTTP requests, built and not sent |
| `src/Demo.tsx` | Offline page |

The course is [EDUCATION.md](EDUCATION.md). `npm test` runs the rules. `npm run dev` opens the page.

## Related

- [fee splitter](https://github.com/pixel-journey/px-treasury-incoming-fee-splitter) — bps that must sum to 10000
- [step directions](https://github.com/pixel-journey/wax-token-correlation-coefficient-chart) — also not a market statistic
- These two numbers are not yields.

## Queries

`executed` is false. This repo did not call any host. No transaction is invented.
