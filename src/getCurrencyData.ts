import { ExchangeRates } from "./types/ExchangeRates";
import fetch from "node-fetch";

export async function getCurrencyData(date: string) {
  const response = await fetch(
    `http://api.nbp.pl/api/exchangerates/rates/c/usd/${date}/?format=json`
  );
  return (await response.json()) as ExchangeRates;
}
