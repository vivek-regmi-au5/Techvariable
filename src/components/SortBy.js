import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: 0,
    minWidth: 139,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  drop: {
    marginTop: "4px",
    marginBottom: "4px",
  },
  sortBy: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

export default function SortBy({ sortBy, setsortBy }) {
  const classes = useStyles();
  const [sort, setsort] = useState();

  const handleChange = (event) => {
    console.log("prop sortBy: ", sortBy);
    setsort(event.target.value);
    setsortBy(event.target.value);
  };
  useEffect(() => {
    setsort(sortBy);
  }, [sortBy]);

  return (
    <div className={classes.sortBy}>
      <div>Sort by: &nbsp;&nbsp;&nbsp;&nbsp;</div>

      <FormControl variant="outlined" className={classes.formControl}>
        <TextField
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          select
          className={classes.textField}
          value={sort}
          onChange={handleChange}
          InputLabelProps={{ shrink: false }}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
          variant="outlined"
        >
          <MenuItem value={"price"}>Price</MenuItem>
          <MenuItem value={"rating"}>Rating</MenuItem>
        </TextField>
      </FormControl>
    </div>
  );
}
