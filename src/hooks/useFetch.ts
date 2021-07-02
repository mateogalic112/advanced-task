import React from "react";
import { AxiosError, AxiosResponse } from "axios";

import axiosInstance from "../config/API";

import { ColorResponse } from "../models/ColorResponse";

const useFetch = (clicked: boolean) => {
  const [data, setData] = React.useState<ColorResponse | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      await axiosInstance
        .get("")
        .then((res: AxiosResponse<ColorResponse>) => setData(res.data))
        .catch((error: Error | AxiosError) => setError(error.message))
        .finally(() => setLoading(false));
    })();
  }, [clicked]);

  return { data, loading, error };
};

export default useFetch;
