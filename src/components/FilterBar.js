import React from "react";

import FormatFIlter from "./FormatFIlter";
import OccasionFilter from "./Occasion";
import RangeFilter from "./RangeFIlter";

const FilterBar = () => {
  return (
    <>
      <FormatFIlter />
      <RangeFilter />
      <OccasionFilter />
    </>
  );
};

export default FilterBar;
