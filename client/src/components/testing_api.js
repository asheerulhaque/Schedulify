import React, { useState, useEffect } from 'react';

const Testing = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/');
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError('Error fetching data from the server');
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>React App</h1>
            {data ? (
                <div>
                    <h2>Data from the Server</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Testing;
