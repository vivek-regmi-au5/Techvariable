import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
    borderRadius: "3px",
  },
}));

export default function ChipList() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Dine" },
    { key: 1, label: "Takeaway" },
    { key: 2, label: "Birthday" },
    { key: 3, label: "Lunchbox" },
    { key: 4, label: "Marriage" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <div className={classes.root}>
      {chipData.map((data) => {
        return (
          <li key={data.key}>
            <Chip
              label={data.label}
              onDelete={handleDelete(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
    </div>
  );
}
