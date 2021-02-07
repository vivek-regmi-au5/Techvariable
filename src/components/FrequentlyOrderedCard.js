import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  media: {
    height: 240,
  },
});

export default function FrequentlyOrderedCard({ desc }) {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={desc.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Grid container spacing={10} alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="p" component="h3">
                {desc.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {desc.location}
              </Typography>
            </Grid>
            <Grid item xs>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography
                  gutterBottom
                  variant="p"
                  component="h4"
                  style={{ color: "rgb(243, 52, 90)" }}
                >
                  RE-ORDER
                </Typography>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
