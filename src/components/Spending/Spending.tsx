import "./Spending.css";
import Chart from "../Chart/Chart";
import Total from "../Total/Total";

const Spending = () => {
  return (
    <div className="spending">
      <div className="spending__container">
        <h1 className="spending__title">Spending - Last 7 days</h1>
        <Chart />
        <Total />
      </div>
    </div>
  );
};

export default Spending;
