import React, { FC } from "react";
import { IUser } from "./types";
import { ReactComponent as Plus } from "../../../img/plus.svg";


interface UserItemProps {
  user: IUser;
}

const Productsitem: FC<UserItemProps> = ({ user }) => {
  return (
    <div className="content-products-item" id={user.id}>
      <div className="content-products-item-img">
        <img src={process.env.PUBLIC_URL + (user.image)} alt="Кроссовки" height="180px"/>
      </div>
      <div className="content-products-item-title">
        <span>{user.name}</span>
      </div>
      <div className="content-products-item-price">
        <div className="content-products-item-price-block">
          <div className="content-products-item-price-block-title">
            <span>Цена</span>
          </div>
          <div className="content-products-item-price-block-number">
            <span>{user.price} руб.</span>
          </div>
        </div>
        <div className="content-products-item-price-plus">
          <Plus />
        </div>
      </div>
    </div>
  );
};

export default Productsitem;
