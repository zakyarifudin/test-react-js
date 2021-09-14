import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CustomerList.scss";

export default function CustomerList() {
  const data = useSelector((state) => state);

  return (
    <div className="container">
      <div className="head-name">
        <div className="head-title">
          <h1>Customer List</h1>
          <div className="divider-loading" />
        </div>
      </div>
      <div className="card-grid">
        {data.customers.map((customer) => (
          <Link to={`/customer/${customer.email}`} key={customer.email}>
            <div className="card-item-border">
              <div className="card-item">
                <h2>{customer.email}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
