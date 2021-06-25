import { Api, query } from "../lib/apollo";
import { Rate } from "./types";

export class HomeService {
  constructor(private api: Api) {}

  async getRates(currency: string): Promise<Rate[]> {
    return this.api
      .query({
        query: query`
        query GetRates {
          rates(currency: "${currency}") {
            name,
            rate,
            currency
          }
        }
      `,
      })
      .then((res) => res.data?.rates);
  }

  async getOnlyCurrencys(currency: string): Promise<Rate[]> {
    return this.api
      .query({
        query: query`
        query GetRates {
          rates(currency: "${currency}") {
            currency
          }
        }
      `,
      })
      .then((res) => res.data?.rates);
  }
}
