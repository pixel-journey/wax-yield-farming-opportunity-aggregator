# Security

## Scope

Pure comparison of two caller-supplied rates. No farm contracts are read or written.

## Non-claims

- Higher bps is **not** a yield, APR, or deposit recommendation.
- Do not auto-stake from educational numbers.
- Do not paste private keys into demos or prompts.

## Host checklist (if a product later stakes)

1. Re-read the live farm ABI and reward token precision (**PXJ is always 8** when PXJ is involved).
2. Prefer WharfKit SessionKit with explicit confirm.
3. Pin chain id before broadcast.
