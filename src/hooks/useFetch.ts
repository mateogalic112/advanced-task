import React from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

import { ColorResponse } from "../models/ColorResponse";

const useFetch = (url: string) => {
  const [data, setData] = React.useState<ColorResponse | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    (function () {
      setLoading(true);
      axios
        .get(url)
        .then((res: AxiosResponse<ColorResponse>) => setData(res.data))
        .catch((error: Error | AxiosError) => setError(error.message))
        .finally(() => setLoading(false));
    })();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
