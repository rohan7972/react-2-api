// TableRow.js
import React from 'react';

const TableRow = ({ coin }) => {
    return (
        <tr>
            <td>{coin.name}</td>
            <td>
                <img src={coin.image} alt={coin.symbol} style={{ width: '24px', height: '24px' }} />
                {coin.symbol.toUpperCase()}
            </td>
            <td>{coin.current_price}</td>
            <td>{coin.total_volume}</td>
        </tr>
    );
};

export default TableRow;
