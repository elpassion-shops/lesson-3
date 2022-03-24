import fetch from "node-fetch";
import { ExchangeRates } from "./types/ExchangeRates";
import nock from "nock";
import { resolve } from "path";

async function getCurrencyData() {
  const response = await fetch(
    "http://api.nbp.pl/api/exchangerates/rates/c/usd/2016-04-04/?format=json"
  );
  return (await response.json()) as ExchangeRates;
}

describe("currenciesApi", () => {
  it("works", async () => {
    nock.load(resolve(__dirname, "__tapes__", "getCurrencies.json"));
    const data = await getCurrencyData();
    expect(data.rates[0].bid).toBe(3.6929);
  });
});
