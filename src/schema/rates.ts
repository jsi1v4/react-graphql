import { query } from "../lib/apollo";

export const GET_RATES = query`
  query GetRates($currency: String!) {
    rates(currency: $currency) {
      name,
      rate,
      currency
    }
  }
`;

export const GET_ONLY_CURRENCYS = query`
  query GetRates($currency: String!) {
    rates(currency: $currency) {
      currency
    }
  }
`;
