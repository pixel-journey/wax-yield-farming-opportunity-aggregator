import { describe, expect, it } from "vitest";
import { prefer } from "./apr";

describe("rate comparison", () => {
  it("names the higher input and a tie", () => {
    expect(prefer({ id: "pool-a", bps: 400 }, { id: "pool-b", bps: 250 })).toEqual({
      higher: "pool-a",
      deltaBps: 150,
    });
    expect(prefer({ id: "pool-a", bps: 250 }, { id: "pool-b", bps: 250 }).higher).toBe("tie");
    expect(prefer({ id: "pool-a", bps: 250 }, { id: "pool-b", bps: 250 }).deltaBps).toBe(0);
  });

  it("picks the right side when it is higher", () => {
    expect(prefer({ id: "pool-a", bps: 100 }, { id: "pool-b", bps: 900 })).toEqual({
      higher: "pool-b",
      deltaBps: 800,
    });
  });

  it("refuses identical ids", () => {
    expect(() => prefer({ id: "pool-a", bps: 100 }, { id: "pool-a", bps: 200 })).toThrow(
      /two ids must differ/,
    );
  });

  it("refuses bad id shape", () => {
    expect(() => prefer({ id: "PoolA", bps: 100 }, { id: "pool-b", bps: 100 })).toThrow(/id must be/);
    expect(() => prefer({ id: "", bps: 100 }, { id: "pool-b", bps: 100 })).toThrow(/id must be/);
  });

  it("refuses bps outside 0..1000000 integer range", () => {
    expect(() => prefer({ id: "a", bps: -1 }, { id: "b", bps: 0 })).toThrow(/bps must be/);
    expect(() => prefer({ id: "a", bps: 1_000_001 }, { id: "b", bps: 0 })).toThrow(/bps must be/);
    expect(() => prefer({ id: "a", bps: 1.5 }, { id: "b", bps: 0 })).toThrow(/bps must be/);
  });
});
