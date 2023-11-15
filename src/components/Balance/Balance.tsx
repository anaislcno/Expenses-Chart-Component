import "./Balance.css";
import Logo from "./../../assets/images/logo.svg";

const Balance = () => {
  return (
    <div className="balance">
      <div className="balance__container">
        <h2 className="balance__title">My balance</h2>
        <p className="balance__p">$921.48</p>
      </div>
      <img src={Logo} />
    </div>
  );
};

export default Balance;
