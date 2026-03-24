import { useState, useEffect } from "react";
import axios from "axios";

export const useApiHooks = (url,params) => {
  const [text, setText] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log("url", url);
  console.log("params", params);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url,{params});
      console.log(res);
      setText(res.data.categories ||  res.data.meals || []);
    } catch (error) {
      setError(error);
      console.error("Error data fetching", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url,JSON.stringify(params)]);
  return [text, error, loading];
};
