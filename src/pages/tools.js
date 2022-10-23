import React from "react";
import Caluculator from "../toolsScreen/calculator";
import CheckList from "../toolsScreen/checklist";

const Tools = ({ props }) => {
  return (
    <div>
      <Caluculator />
      <CheckList />
    </div>
  );
};

export default Tools;