import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const FormatFIlter = ({ format, setFormat }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

  const handleChange = (event) => {
    setFormat({
      ...format,
      [event.target.name]: event.target.checked,
    });
  };

  const { lunchbox, takeaway, dine } = format;
  const [expand, setExpand] = useState(true);

  const classes = useStyles();
  return (
    <Accordion expanded={expand}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        onClick={() => setExpand((prev) => !prev)}
      >
        <Typography className={classes.heading}>Format</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={lunchbox}
                    onChange={handleChange}
                    name="lunchbox"
                  />
                }
                label="Lunchbox"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={takeaway}
                    onChange={handleChange}
                    name="takeaway"
                  />
                }
                label="Takeaway"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={dine}
                    onChange={handleChange}
                    name="dine"
                  />
                }
                label="Dine"
              />
            </FormGroup>
          </FormControl>
          <FormControl
            required
            component="fieldset"
            className={classes.formControl}
          ></FormControl>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FormatFIlter;
