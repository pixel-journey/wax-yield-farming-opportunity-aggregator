import { HISTORY_ORIGIN, historyActions } from "./api";
import { prefer } from "./apr";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const pick = prefer({ id: "pool-a", bps: 400 }, { id: "pool-b", bps: 250 });

export const USE_CASES: UseCase[] = [
  {
    title: "The market list is not a rate",
    detail: `${pick.higher} is higher by ${pick.deltaBps} bps because those numbers were typed in. GET /api/markets is not parsed.`,
    request: { method: "GET", url: "https://wax.alcor.exchange/api/markets", executed: false },
    transaction: null,
  },
  {
    title: "Swap transfers are not an APR",
    detail: "No deposit and no farm action is built.",
    request: historyActions(HISTORY_ORIGIN, "swap.alcor", "eosio.token:transfer", 20),
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (pick.higher !== "pool-a" || pick.deltaBps !== 150) throw new Error("prefer");
}
