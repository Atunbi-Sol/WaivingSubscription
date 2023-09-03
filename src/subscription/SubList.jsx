import React, { useState, useEffect } from "react";
import "./SubList.css";
import Sub from "../subscription/Sub";

const SubList = () => {
  const [basic, setBasic] = useState(15.99);
  const [pro, setPro] = useState(25.99);
  const [master, setMaster] = useState(35.99);
  const [yearly, setYearly] = useState(false);

  const handleClick = () => {
    setYearly(!yearly);
  };

  //Calc Percentage Values
  const calPercent = (num, per) => {
    return ((num * 12) / 100) * per;
  };

  useEffect(() => {
    if (yearly) {
      setBasic(calPercent(basic, 70).toFixed(0));
      setPro(calPercent(pro, 70).toFixed(0));
      setMaster(calPercent(master, 70).toFixed(0));
    } else {
      setBasic(15.99);
      setPro(25.99);
      setMaster(35.99);
    }
  }, [yearly]);
  return (
    <section className="main">
      <div className="container --center-all">
        <div className="title">
          <h2>Pricing</h2>
          <div className="--line"></div>
          <div className="--flex-center --my2">
            <p>Monthly</p>
            <div className="--mx2">
              <span className={yearly ? "toggle-btn toggled" : "toggle-btn"} onClick={handleClick}>
                <div className={yearly ? "ball move" : "ball"}></div>
              </span>
            </div>
            <p>Yearly</p>
          </div>
        </div>

        <div className="sub-plans">
          <Sub plan={"Basic"} theme={"theme1"} price={basic} isBasic={true} yearSub={yearly} onPurchase={() => alert(basic)} />
          <Sub plan={"Pro"} theme={"theme2"} price={pro} isPro={true} yearSub={yearly} onPurchase={() => alert(pro)} />
          <Sub plan={"Master"} theme={"theme3"} price={master} isMaster={true} yearSub={yearly} onPurchase={() => alert(master)} />
        </div>
      </div>
    </section>
  );
};

export default SubList;
