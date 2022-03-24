import { getCurrencyData } from "./getCurrencyData";
import { withRecording } from "./test-utils/withRecording";

describe("currenciesApi", () => {
  it("returns correct currencies for today", async () => {
    await withRecording(__dirname, "kaseta", async () => {
      const data = await getCurrencyData();
      expect(data.rates[0].bid).toBe(3.6929);
    });
  });

  it("returns correct currencies for today", async () => {
    await withRecording(__dirname, "kaseta2", async () => {
      const data = await getCurrencyData();
      expect(data.rates[0].bid).toBe(3.6929);
    });
  });
});
