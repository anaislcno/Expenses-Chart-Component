import Attribution from "./components/Attribution/Attribution";
import Balance from "./components/Balance/Balance";
import Spending from "./components/Spending/Spending";

function App() {
  return (
    <>
      <div className="container">
        <Balance />
        <Spending />
        <Attribution />
      </div>
    </>
  );
}

export default App;
