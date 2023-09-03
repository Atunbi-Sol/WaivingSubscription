import React from "react";
import "./Sub.css";

const Sub = ({ plan, theme, price, isBasic, isMaster, isPro, yearSub, onPurchase }) => {
  return (
    <div className="price-box --card">
      <div className={`box --p2 ${theme}`}>
        <p className="--text-light">{plan}</p>
        <h4 className="--text-light">
          <span>$</span>
          <span className="basic">{price}</span>
          {yearSub && (
            <p className="--text-light">
              <del>25% Off </del>{" "}
            </p>
          )}
        </h4>
        {isPro && <p className="--text-light">Everythinh in Basic, plus </p>}
        {isMaster && <p className="--text-light">Everythinh in Pro, plus </p>}
      </div>
      <div className="features">
        <ul>
          {isBasic && <li>Unlimitedd Pages</li>}
          {isBasic && <li>Unlimited Bandwidth</li>}
          {isBasic && <li>500GB Storage</li>}

          {isPro && <li>10 Backups</li>}
          {isPro && <li>Email Support</li>}
          {isPro && <li>GitHuB Tool</li>}

          {isMaster && <li>20 Backups</li>}
          {isMaster && <li>Push Notification</li>}
          {isMaster && <li>Priority Support</li>}
        </ul>
        <button className={`btn ${theme}`} onClick={onPurchase}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Sub;
