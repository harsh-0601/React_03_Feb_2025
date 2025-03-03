import React from "react";
import "./styles.css";

const transactions = [
  { card: "*4920", type: "Credit", date: "Jun 24, 2023", time: "10:00 am", status: "Verified", amount: "2890.00", brand: "mastercard" },
  { card: "*4230", type: "Debit", date: "Jun 20, 2023", time: "11:00 am", status: "Rejected", amount: "-49.00", brand: "visa" },
  { card: "*5510", type: "Credit", date: "Jun 19, 2023", time: "2:00 pm", status: "Pending", amount: "-80.00", brand: "visa" },
  { card: "*0983", type: "Debit", date: "Jun 18, 2023", time: "11:00 am", status: "Verified", amount: "-30.00", brand: "amex" },
  { card: "*4443", type: "Credit", date: "Jun 17, 2023", time: "10:00 am", status: "Verified", amount: "1500.00", brand: "mastercard" },
  { card: "*7635", type: "Debit", date: "Jun 14, 2023", time: "9:00 am", status: "Rejected", amount: "-200.00", brand: "visa" },
];

const getStatusClass = (status) => {
  switch (status) {
    case "Verified": return "status-verified";
    case "Rejected": return "status-rejected";
    case "Pending": return "status-pending";
    default: return "";
  }
};

const TransactionsTable = () => {
  return (
    <div className="transactions-container">
      <h2 className="title">Recent transactions</h2>
      <p className="subtitle">Transactions overview</p>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Card</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn, index) => (
            <tr key={index}>
              <td>
                <span className={`card-icon ${txn.brand}`}></span>
                {txn.card} <span className="card-type">{txn.type}</span>
              </td>
              <td>{txn.date} <br /><span className="transaction-time">{txn.time}</span></td>
              <td className={getStatusClass(txn.status)}>{txn.status}</td>
              <td className="amount">{txn.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
