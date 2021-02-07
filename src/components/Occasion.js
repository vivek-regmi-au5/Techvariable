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

const OccasionFilter = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
  const [state, setState] = React.useState({
    birthday: false,
    marriage: false,
    christmas: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { birthday, marriage, christmas } = state;
  const error = [birthday, marriage, christmas].filter((v) => v).length !== 2;
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
        <Typography className={classes.heading}>Occasion</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={birthday}
                    onChange={handleChange}
                    name="birthday"
                  />
                }
                label="Birthday"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={marriage}
                    onChange={handleChange}
                    name="marriage"
                  />
                }
                label="Marriage"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={christmas}
                    onChange={handleChange}
                    name="christmas"
                  />
                }
                label="Christmas"
              />
            </FormGroup>
          </FormControl>
          <FormControl
            required
            error={error}
            component="fieldset"
            className={classes.formControl}
          ></FormControl>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default OccasionFilter;
