# Education — the higher of two typed rates

> **Rung:** `npm test` passes. Both rates are integers you pass. Neither is a farm, an APR from a pool, or a forecast.  
> **The test is the rule.** A fee that must sum to 10000 bps is a different course: [px-treasury-incoming-fee-splitter](https://github.com/pixel-journey/px-treasury-incoming-fee-splitter).

## Predict, then run

| Call | Locked result |
| --- | --- |
| `prefer({ id: "pool-a", bps: 400 }, { id: "pool-b", bps: 250 })` | `{ higher: "pool-a", deltaBps: 150 }` |
| both `250` | `{ higher: "tie", deltaBps: 0 }` |

An id must be 1 to 24 of `a-z`, `0-9`, or hyphen. Basis points must be an integer from 0 to 1,000,000. The two ids must differ. The function throws otherwise. The test does not lock those throws. Do not invent a third outcome.

The HTTP examples include an Atomic Packs `unboxassets` row. That request is unsent, and it is not this compare.
