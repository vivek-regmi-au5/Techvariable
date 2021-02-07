import React from "react";
import ChipList from "./Chip";
import SortBy from "./SortBy";
import { Container, Grid } from "@material-ui/core";

const MainBody = () => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <ChipList />
        </Grid>
        <Grid item>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <SortBy />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainBody;
