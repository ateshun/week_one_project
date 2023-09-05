import React from "react";
import "./App.css";
import NewPage from "./component/NewPage";
import sedan from "./images/icon-sedans.svg";
import suvs from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";

function App() {
  return (
    <div className="App">
      <div className="SEDAN">
        <NewPage
          icons={sedan}
          title="SEDAN"
          text="Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip."
          btn="Learn More"
        />
      </div>
      <div className="SUV">
        <NewPage
          icons={suvs}
          title="SUVS"
          text="Take an SUV for its spacious interior, power, and versatility.Perfect for your next family vacation and off-road adventures."
          btn="Learn More"
        />
      </div>
      <div className="LUXURY">
        <NewPage
          icons={luxury}
          title="LUXURY"
          text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
          btn="Learn More"
        />
      </div>
    </div>
  );
}

export default App;
