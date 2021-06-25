import { useCallback, useEffect, useState } from "react";

import { useHomeContext } from "../providers";
import { Rate } from "../providers/types";

export const useHomeController = () => {
  const service = useHomeContext();

  const [param, setParam] = useState<string>("USD");
  const [rates, setRates] = useState<Rate[]>();

  const fetch = useCallback(
    (currency: string) => {
      setRates(undefined);
      service.getRates(currency).then(setRates).catch(console.error);
    },
    [service]
  );

  const handleParams = (currency: string) => {
    setParam(currency);
  };

  useEffect(() => {
    fetch(param);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  return { param, rates, handleParams };
};
