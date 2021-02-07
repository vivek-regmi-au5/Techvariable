import React from "react";
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

export default function SortBy() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.sortBy}>
      <div>Sort by: &nbsp;&nbsp;&nbsp;&nbsp;</div>

      <FormControl variant="outlined" className={classes.formControl}>
        <TextField
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          select
          className={classes.textField}
          value={age}
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
