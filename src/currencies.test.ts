import { getCurrencyData } from "./getCurrencyData";
import { withRecording } from "./test-utils/withRecording";

describe("currenciesApi", () => {
  it("returns correct currencies for date 1", async () => {
    await withRecording(__dirname, "kaseta", async () => {
      const data = await getCurrencyData("2022-03-24");
      expect(data.rates[0].bid).toBe(3.6929);
    });
  });

  it("returns correct currencies for date 2", async () => {
    await withRecording(__dirname, "kaseta2", async () => {
      const data = await getCurrencyData("2022-03-17");
      expect(data.rates[0].bid).toBe(3.6929);
    });
  });
});
