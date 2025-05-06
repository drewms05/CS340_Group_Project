const TableRowInvoices = ({ rowObject }) => {
    return (
        <tr>
            {Object.values(rowObject).map((value, index) => (
                <td key={index}>{value}</td>
            ))}
        </tr>
    );
};

export default TableRowInvoices;