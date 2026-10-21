/**
 * Which of two caller-supplied rates is higher.
 * A rate is not a yield and not a forecast.
 */

export type Offer = { id: string; bps: number };

const ID = /^[a-z0-9-]{1,24}$/;

function check(offer: Offer): string | null {
  if (!ID.test(offer.id)) return "id must be 1 to 24 of a-z, 0-9, or hyphen";
  if (!Number.isInteger(offer.bps) || offer.bps < 0 || offer.bps > 1_000_000) return "bps must be an integer from 0 to 1000000";
  return null;
}

export function prefer(left: Offer, right: Offer): { higher: string; deltaBps: number } {
  const problem = check(left) ?? check(right);
  if (problem) throw new Error(problem);
  if (left.id === right.id) throw new Error("the two ids must differ");
  if (left.bps === right.bps) return { higher: "tie", deltaBps: 0 };
  const winner = left.bps > right.bps ? left : right;
  return { higher: winner.id, deltaBps: Math.abs(left.bps - right.bps) };
}
