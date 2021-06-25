import { useCallback, useEffect, useState } from "react";

import { useQuery } from "../lib/apollo";
import { GET_RATES } from "../schema/rates";
import { Rate } from "../providers/types";

export const useHomeController = () => {
  const [param, setParam] = useState<string>("USD");
  const [getRates, { data }] = useQuery<{ rates: Rate[] }>(GET_RATES);

  const fetch = useCallback(
    (currency: string) => {
      getRates({ variables: { currency } });
    },
    [getRates]
  );

  const handleParams = (currency: string) => {
    setParam(currency);
  };

  useEffect(() => {
    fetch(param);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  return { param, rates: data?.rates, handleParams };
};
