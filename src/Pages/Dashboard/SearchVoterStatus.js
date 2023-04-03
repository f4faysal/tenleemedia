import React, { useState } from "react";
import Barcode from "react-barcode";
import DashbordNavbar from "../../Components/DashbordNavbar";

const SearchVoterStatus = () => {
  const [data, setData] = useState("Not Found");
  return (
    <div>
      <DashbordNavbar></DashbordNavbar>
      <div className="h-3"></div>
      {/* <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div> */}
      {/* <>
        <BarcodeScannerComponent
          width={500}
          height={500}
          onUpdate={(err, result) => {
            if (result) setData(result.text);
            else setData("Not Found");
          }}
        />
        <p>{data}</p>
      </> */}
      <Barcode value="barcode-example" />;
    </div>
  );
};

export default SearchVoterStatus;
