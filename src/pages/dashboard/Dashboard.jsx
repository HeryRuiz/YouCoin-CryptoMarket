import React, { useState, useEffect } from "react";
import DashNav from "./DashNav";
import DashFooter from "./DashFooter";
import DashTop from "./DashTop";
import DashBottom from "./DashBottom";
import DashTwo from "./DashTwo";
import Loading from "./Loading";
import DashFour from "./DashFour";

function Dashboard() {
  const [category, setCategory] = useState("one");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <DashNav setCategory={setCategory}/>
        <DashTop
          setCategory={setCategory}
          category={category}
        />
        {category === "one" ? (
          <DashBottom />
        ) : category === "two" ? (
          <DashTwo />
        ) : category === "four" ?(
          <DashFour />
        ):''}
        <DashFooter />
      </>
    );
  }
}
export default Dashboard;
