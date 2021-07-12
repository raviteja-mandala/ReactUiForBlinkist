import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

axios.defaults.baseURL = 'http://localhost:3000/';

const useAxios = ({ url, method, body = null, headers = null }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
alert(1);
    const fetchData = () => {
        alert(3);
        axios[method](url, JSON.parse(headers), JSON.parse(body))
            .then((res) => {
                alert('hi'+JSON.stringify(res));
                setResponse(res.data);
            })
            .catch((err) => {
                alert('vi'+err);
                setError(err);
            })
            .finally(() => {
                alert('fi');
                setloading(false);
            });
    };

alert(2);
    useEffect(() => {
        alert(4);
        fetchData();
        alert(5);
    }, [method, url, body, headers]);
    alert(7);
    return { response, error, loading };
};

export default useAxios;