"use client";

import { prefer } from "./apr";

export function Demo() {
  const pick = prefer({ id: "pool-a", bps: 400 }, { id: "pool-b", bps: 250 });
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>The higher of two numbers you typed</h1>
      <p className="lede">400 bps against 250 bps. These are not yields. No farm was queried.</p>
      <p>
        Higher {pick.higher}. Difference {pick.deltaBps} bps.
      </p>
    </main>
  );
}
