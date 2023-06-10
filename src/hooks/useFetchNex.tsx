import {useState, useEffect} from 'react'

export const useFetch = (url: string, options: any, deps = []) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(url, options);
          const json = await res.json();
          setResponse(json);
        } catch (error: any) {
          setError(error);
        }
      };
      url && fetchData();
    }, deps);
    return { response, error };
};