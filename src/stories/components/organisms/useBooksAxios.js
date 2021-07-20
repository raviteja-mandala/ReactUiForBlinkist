import axios from "axios";
import { useEffect, useState } from "react";

//axios.defaults.baseURL = 'http://localhost:3000/';

const useBooksAxios = (url, method) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    setTimeout(() => {
      axios[method](url) // JSON.parse(headers), JSON.parse(body))
        .then((res) => {
          setResponse(res.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setloading(false);
        });
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, [method, url]);

  return [response, setResponse, error, loading];
};

export default useBooksAxios;
