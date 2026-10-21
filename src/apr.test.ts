import { describe, expect, it } from "vitest";
import { prefer } from "./apr";

describe("rate comparison", () => {
  it("names the higher input and a tie", () => {
    expect(prefer({ id: "pool-a", bps: 400 }, { id: "pool-b", bps: 250 })).toEqual({ higher: "pool-a", deltaBps: 150 });
    expect(prefer({ id: "pool-a", bps: 250 }, { id: "pool-b", bps: 250 }).higher).toBe("tie");
  });
});
