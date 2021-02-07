import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarRateIcon from "@material-ui/icons/StarRate";
import Veg from "../images/veg.png";
import NonVeg from "../images/nonveg2.jpg";

const useStyles = makeStyles({
  media: {
    height: 200,
  },
  root: {
    width: "100%",
    minWidth: "300px",
    maxWidth: "452px",
  },
  imgBox: {
    display: "inline-block",
    position: "relative",
  },
  icon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(255, 255, 255, .5)",
    borderRadius: 100,
    padding: 10,
    paddingBottom: 8,
  },
  ratingLow: {
    display: "flex",
    padding: "0px 10px",
    alignItems: "center",
    paddingLeft: "5px",
    backgroundColor: "rgb(243, 52, 90)",
    color: "white",
  },
  ratingMid: {
    display: "flex",
    padding: "0px 10px",
    alignItems: "center",
    paddingLeft: "5px",
    backgroundColor: "rgb(245, 142, 46)",
    color: "white",
  },
  ratingHigh: {
    display: "flex",
    padding: "0px 10px",
    alignItems: "center",
    paddingLeft: "5px",
    backgroundColor: "rgb(38, 184, 148)",
    color: "white",
  },
});

export default function MainFoodCard({ desc }) {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={desc.image}
            title={desc.title}
          />
          <div className={classes.icon}>
            <FavoriteBorderIcon style={{ color: "white" }} />
          </div>

          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs>
                <Typography gutterBottom variant="p" component="h3">
                  {desc.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Rs. {desc.price}/- head &#8729; 10 dishes
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={10} alignItems="center">
              <Grid item>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center ",
                  }}
                >
                  <div
                    className={
                      desc.rating <= 3
                        ? classes.ratingLow
                        : desc.rating >= 4
                        ? classes.ratingHigh
                        : classes.ratingMid
                    }
                  >
                    <div style={{ marginTop: "3px" }}>
                      <StarRateIcon fontSize="small" />
                    </div>
                    <div>{desc.rating}</div>
                  </div>
                  <div className={classes.ratingCount}>
                    {desc.totalRatings} Ratings
                  </div>
                </div>
              </Grid>
              <Grid item>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <img src={desc.veg ? Veg : NonVeg} alt="veg" width="20px" />
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
