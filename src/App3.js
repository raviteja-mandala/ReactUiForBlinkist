import { useState, useEffect } from 'react';
import axios from 'axios';
import useAxios from './useAxios';
import React from 'react';
import ReactDOM from 'react-dom';

const App3 = () => {
alert(31);


    const { response, loading, error } = useAxios({
        method: 'get',
        url: '/posts',
        //headers: JSON.stringify({ accept: '*/*' }),
        // body: JSON.stringify({
        //     userId: 1,
        //     id: 19392,
        //     title: 'title',
        //     body: 'Sample text',
        // }),
    });
    alert(32);
    const [data, setData] = useState([]);

    useEffect(() => {
        alert(33);
        alert(90+JSON.stringify(response));
        if (response !== null) {
            setData(response);
        }
    }, [response]);

    alert(34);

    return (
        <div>
            <h1>Posts</h1>

            {loading ? (
                <p>loading...</p>
            ) : (
                <div>
                    {error && (
                        <div>
                            <p>{error.message}</p>
                        </div>
                    )}
                    <div>{data && <p>{data.id}</p>}</div>
                </div>
            )}
        </div>
    );
};

export default App3;