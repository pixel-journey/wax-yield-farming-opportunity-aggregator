# Education — the higher of two typed rates

> **Rung:** `npm test` passes. Both rates are integers you pass. Neither is a farm, an APR from a pool, or a forecast.  
> **The test is the rule.** Fee sum to 10000 bps: [px-treasury-incoming-fee-splitter](https://github.com/pixel-journey/px-treasury-incoming-fee-splitter).

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Pick the higher id and report deltaBps |
| Intermediate | Handle ties and id/bps bounds |
| Masterclass | Refuse to call the integer an APR |

---

## Beginner — one scene

| Call | Locked result |
| --- | --- |
| `prefer({ id: "pool-a", bps: 400 }, { id: "pool-b", bps: 250 })` | `{ higher: "pool-a", deltaBps: 150 }` |
| both `250` | `{ higher: "tie", deltaBps: 0 }` |

```bash
npm test
```

---

## Intermediate — rules

| Rule | Detail |
| --- | --- |
| Id | 1..24 of `a-z`, `0-9`, hyphen; the two ids must differ |
| bps | integer 0 .. 1_000_000 |
| Tie | equal rates → `higher: "tie"` |

### Attack → test

| Attack | Lab behavior |
| --- | --- |
| Same id twice | throws |
| Treat bps as live APR | arguments only |
| Third outcome | none — higher is a or b or tie |

### Exercises

1. 400 vs 250 — higher? (**pool-a**.)  
2. Equal rates — higher? (**tie**.)  
3. Is this a farm aggregator API? (**No**.)

---

## Masterclass

Real yield products need TVL, emission schedules, and risk. This file only compares two integers you typed.

---

## What this course will not teach

- Live farm discovery
- APR / APY conversion
- Deposit recommendations
