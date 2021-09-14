import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CustomerDetail.scss";

export default function CustomerDetail({ match }) {
  const data = useSelector((state) => state);
  let customer = {};

  data.customers.map((cus) => {
    if (cus.email === match.params.email) {
      customer = cus;
    }
  });

  return (
    <div className="container">
      <Link to="/">
        <button className="button"> Back</button>
      </Link>
      <div className="head-name">
        <div className="head-title">
          <h1>Customer "{customer.fullname}"</h1>
          <div className="divider-loading" />
        </div>
      </div>
      <div className="card-grid">
        <div className="card-item-border">
          <div className="card-item">
            <h2>{customer.email}</h2>
            <p>{customer.fullname}</p>
            <p>{customer.phone}</p>
            <p>{customer.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
