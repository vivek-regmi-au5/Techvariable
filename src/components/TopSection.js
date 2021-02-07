import React from "react";
import FrequentlyOrderedCard from "./FrequentlyOrderedCard";
import Burger from "../images/burger.jpeg";
import Rice from "../images/rice.jpeg";
import Idli from "../images/idli.jpeg";
import Omlette from "../images/omlette.jpeg";
import Pizza from "../images/pizza.jpeg";
import Rolls from "../images/rolls.jpg";
import Salmon from "../images/salmon.jpg";
import Sandwich from "../images/sandwich.jpeg";
import Spegeti from "../images/spegetti.jpg";
import Carousel from "react-elastic-carousel";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
  media: {
    height: 240,
  },
  custom: {
    iLquPE: {
      boxSizing: "border-box",
      WebkitTransition: "all 0.3s ease",
      transition: "all 0.3s ease",
      fontSize: "1.6em",
      backgroundColor: "rgba(103,58,183,0.1)",
      color: "#999",
      boxShadow: "0 0 2px 0px #333",
      borderRadius: "50%",
      border: "none",
      padding: "0",
      width: "50px",
      height: "50px",
      minWidth: "50px",
      lineHeight: "50px",
      WebkitAlignSelf: "center",
      MsFlexItemAlign: "center",
      alignSelf: "center",
      cursor: "pointer",
      outline: "none",
    },
  },

  "slick-arrow": {
    backgroundColor: "red",
  },
});

const TopSection = () => {
  const xsmall = useMediaQuery("(min-width:1px)");
  const small = useMediaQuery("(min-width:550px)");
  const medium = useMediaQuery("(min-width:820px)");
  const large = useMediaQuery("(min-width:1160px)");

  var settingsXSmall = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var settingsSmall = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  var settingsMid = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  var settingsLarge = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const classes = useStyles();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 820, itemsToShow: 3 },
    { width: 1160, itemsToShow: 4 },
  ];

  const freqOrderData = [
    {
      title: "Hotel Saravana",
      location: "Indira Nagar",
      image: Burger,
    },
    {
      title: "Hotel Saravana",
      location: "Indira Nagar",
      image: Rice,
    },
    {
      title: "Hotel Saravana",
      location: "Indira Nagar",
      image: Idli,
    },
    {
      title: "Hotel Saravana",
      location: "Indira Nagar",
      image: Omlette,
    },
    {
      title: "Hotel Saravana",
      location: "Indira Nagar",
      image: Pizza,
    },
    {
      title: "Hotel Saravana",
      location: "Indira Nagar",
      image: Rolls,
    },
    {
      title: "Hotel Saravana",
      location: "Indira Nagar",
      image: Salmon,
    },
    {
      title: "Hotel Saravana",
      location: "Indira Nagar",
      image: Sandwich,
    },
    {
      title: "Hotel Saravana",
      location: "Indira Nagar",
      image: Spegeti,
    },
  ];

  return (
    <Container>
      <h1>Most frequently ordered</h1>
      {xsmall && small && medium && large ? (
        <Slider {...settingsLarge}>
          {freqOrderData.map((item) => {
            return <FrequentlyOrderedCard desc={item} />;
          })}
        </Slider>
      ) : xsmall && small && medium && !large ? (
        <Slider {...settingsMid}>
          {freqOrderData.map((item) => {
            return <FrequentlyOrderedCard desc={item} />;
          })}
        </Slider>
      ) : xsmall && small && !medium ? (
        <Slider {...settingsSmall}>
          {freqOrderData.map((item) => {
            return <FrequentlyOrderedCard desc={item} />;
          })}
        </Slider>
      ) : xsmall && !small ? (
        <Slider {...settingsXSmall}>
          {freqOrderData.map((item) => {
            return <FrequentlyOrderedCard desc={item} />;
          })}
        </Slider>
      ) : null}

      {/* <Carousel className={classes.custom} breakPoints={breakPoints}>
        {freqOrderData.map((item) => {
          return <FrequentlyOrderedCard desc={item} />;
        })}
      </Carousel> */}
      {/* <Grid container spacing={3}></Grid> */}
    </Container>
  );
};

export default TopSection;
