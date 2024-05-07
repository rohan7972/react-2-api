import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

const MyComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Crypto Market Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Total Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((coin, index) => (
                        <TableRow key={coin.id} coin={coin} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyComponent;
