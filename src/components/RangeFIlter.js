import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: "500",
  },
  {
    value: 20,
    label: "1000",
  },
  {
    value: 50,
    label: "1500",
  },
  {
    value: 100,
    label: "2000",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function FilterRange() {
  const classes = useStyles();
  const [expand, setExpand] = useState(true);

  return (
    <Accordion expanded={expand}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        onClick={() => setExpand((prev) => !prev)}
      >
        <Typography className={classes.heading}>
          Price &#8377;500 to &#8377;2000
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <div className={classes.root}>
            <div className={classes.margin} />

            <Slider
              track="inverted"
              aria-labelledby="track-inverted-range-slider"
              getAriaValueText={valuetext}
              defaultValue={[20, 37]}
              marks={marks}
            />
          </div>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
