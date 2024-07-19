import "./css/style.css";
import { Modal, Button } from "antd";
import React, { useState } from "react";
import { ReactComponent as ShopIcon } from "../../img/shop.svg";
import { ReactComponent as LoveIcon } from "../../img/love.svg";
import { ReactComponent as UserIcon } from "../../img/user.svg";
import { ReactComponent as Plus } from "../../img/plus.svg";



const Header: React.FC = () => {
  const [modal1Open, setModal1Open] = useState(false);
  return (
    <div className="header">
      <div className="header-wrap">
        <div className="header-logo">
          <div className="header-logo-img">
            <a href="/">
              <img src={require("../../img/logo.jpg")} height="40px" width="40px" alt="Логотип"/>
            </a>
          </div>
          <div className="header-logo-title">
            <div className="header-logo-title-span">
              <span>REACT SNEAKERS</span>
            </div>
            <div className="header-logo-title-p">
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
        </div>
        <div className="header-icons">
          <div
            className="header-icons-shop"
            onClick={() => setModal1Open(true)}
          >
            <ShopIcon />
            <div className="header-icons-shop-span">
              <span>1400 руб.</span>
            </div>
          </div>
          <div className="header-icons-love">
            <LoveIcon style={{ cursor: "pointer" }} />
          </div>
          <div className="header-icons-user">
            <a href="/auth">
              <UserIcon style={{ cursor: "pointer" }} />
            </a>
          </div>
        </div>
      </div>
      <Modal
        style={{ top: 5, right: 5, position: "fixed", }}
        width={360}
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
        footer={[
          <Button type="primary" style={{backgroundColor:'#90B894',padding:'0px 25px'}}>Купить</Button>,
          <Button className="clear-shop">Очистить корзину</Button>,
        ]}
      >
        <span style={{ fontSize: "22px", fontWeight: "bolder" }}>Корзина</span>
        <div className="shop-products">
          <div className="shop-products-item">
            <div className="shop-products-item-img">
              <img src={process.env.PUBLIC_URL + './img/nikeBlizzard.jpg'} alt="Кроссовки" height="140px" />
            </div>
            <div className="shop-products-item-title">
              <span>Мужские кроссовки NikeBlizzard Mid Suicide</span>
            </div>
            <div className="shop-products-item-price">
              <div className="shop-products-item-price-block">
                <div className="shop-products-item-price-block-title">
                  <span>Цена</span>
                </div>
                <div className="shop-products-item-price-block-number">
                  <span>12 999 руб.</span>
                </div>
              </div>
              <div className="shop-products-item-price-plus">
                <Plus />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
