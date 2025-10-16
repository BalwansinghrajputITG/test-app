import React from "react";
import Background from "../Components/Background";
import SelectCard from "../Components/SelectCard";
<<<<<<< HEAD
import Alert from "../Components/Alert";

=======
import { memo } from "react";
>>>>>>> 5d3dff4dfa55b0f9d39745b048b4c2755e1762fd
// import ShapeChangingLoader from "../Components/loader";

const Home = () => {
  return (
    <div>
      {/* <ShapeChangingLoader /> */}
<<<<<<< HEAD
      <Background/>

       <Alert message={"Your Welcome"} color="#006400"/>
=======
      <Background />
>>>>>>> 5d3dff4dfa55b0f9d39745b048b4c2755e1762fd
      <SelectCard />
    </div>
  );
};

export default memo(Home);
