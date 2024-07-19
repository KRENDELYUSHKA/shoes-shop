import React from "react";
import { useState, useEffect } from "react";
import { IUser } from "../redux/products/types";
import axios from "axios";

import "./css/style.css";
import ProductsList from "../redux/products/ProductsList";

const Content = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
      fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://api.npoint.io/da22cce2d4c8dbc1f989"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div>
      <div className="content">
        <div className="content-title">
          <span>Все кроссовки</span>
        </div>
          <ProductsList users={users} />
      </div>
    </div>
  );
};

export default Content;
