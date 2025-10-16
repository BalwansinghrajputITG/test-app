import React from "react";
import Background from "../Components/Background";
import SelectCard from "../Components/SelectCard";
import Alert from "../Components/Alert";

// import ShapeChangingLoader from "../Components/loader";

const Home = () => {
  return (
    <div>
      {/* <ShapeChangingLoader /> */}
      <Background/>

       <Alert message={"Your Welcome"} color="#006400"/>
      <SelectCard />
    </div>
  );
};

export default Home;
