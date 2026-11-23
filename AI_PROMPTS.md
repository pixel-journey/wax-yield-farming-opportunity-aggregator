# AI handoff — yield farming opportunity aggregator

## Non-negotiables

1. Pure rule: the **higher of two typed rates**. Locked sample: **400** bps beats **250** by **150**.
2. **These numbers are not yields.** Not APR. Not a live farm scan.
3. Nothing is fetched or broadcast.
4. Different from fee-splitter (legs must sum to 10000).
5. Earlier README live-product claims are not what this tree ships.

## Prompt seeds

- "400 vs 250 — winner and delta?"
- "Refuse calling the result a yield or APR."
- "Refuse mixing in live Alcor farm APYs."

## Do not

- Claim live yield was aggregated.
- Authorize deposits from the higher rate alone.
- Fetch farm contracts from unit tests.
