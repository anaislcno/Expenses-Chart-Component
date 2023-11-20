import "./Total.css";

const Total = () => {
  return (
    <>
      <hr />
      <div className="total">
        <div className="left">
          <h2 className="total__text grey">Total this month</h2>
          <p className="total__nb">$478.33</p>
        </div>
        <div className="right">
          <p className="total__text">+2.4%</p>
          <p className="total__text grey">from last month</p>
        </div>
      </div>
    </>
  );
};

export default Total;
