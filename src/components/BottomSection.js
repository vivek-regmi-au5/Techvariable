import React from "react";
import { Container, Grid } from "@material-ui/core";
import FilterBar from "./FilterBar";
import MainBody from "./MainBody";
import Burger from "../images/burger.jpeg";
import Rice from "../images/rice.jpeg";
import Idli from "../images/idli.jpeg";
import Omlette from "../images/omlette.jpeg";
import Pizza from "../images/pizza.jpeg";
import Rolls from "../images/rolls.jpg";
import Salmon from "../images/salmon.jpg";
import Sandwich from "../images/sandwich.jpeg";
import Spegeti from "../images/spegetti.jpg";
import MainFoodCard from "./MainFoodCard";

const BottomSection = () => {
  const freqOrderData = [
    {
      title: "Hotel Saravana",
      occasion: "birthday",
      location: "Indira Nagar",
      image: Burger,
      price: 699,
      rating: 2.3,
      totalRatings: 213,
      veg: true,
      type: "lunchbox",
    },
    {
      title: "Hotel Saravana",
      occasion: "christmas",
      location: "Indira Nagar",
      image: Rice,
      price: 599,
      rating: 4.2,
      totalRatings: 213,
      veg: true,
      type: "takeaway",
    },
    {
      title: "Hotel Saravana",
      occasion: "birthday",
      location: "Indira Nagar",
      image: Idli,
      price: 799,
      rating: 3.1,
      totalRatings: 213,
      veg: true,
      type: "dine",
    },
    {
      title: "Hotel Saravana",
      occasion: "marriage",
      location: "Indira Nagar",
      image: Omlette,
      price: 899,
      rating: 4.5,
      totalRatings: 213,
      veg: false,
      type: "lunchbox",
    },
    {
      title: "Hotel Saravana",
      occasion: "marriage",
      location: "Indira Nagar",
      image: Rolls,
      price: 999,
      rating: 2.9,
      totalRatings: 213,
      veg: true,
      type: "takeaway",
    },
    {
      title: "Hotel Saravana",
      occasion: "christmas",
      location: "Indira Nagar",
      image: Sandwich,
      price: 1299,
      rating: 2.6,
      totalRatings: 213,
      veg: false,
      type: "dine",
    },
    {
      title: "Hotel Saravana",
      occasion: "marriage",
      location: "Indira Nagar",
      image: Salmon,
      price: 1399,
      rating: 3.7,
      totalRatings: 213,
      veg: true,
      type: "lunchbox",
    },
    {
      title: "Hotel Saravana",
      occasion: "birthday",
      location: "Indira Nagar",
      image: Spegeti,
      price: 1199,
      rating: 4.9,
      totalRatings: 213,
      veg: false,
      type: "takeaway",
    },
    {
      title: "Hotel Saravana",
      occasion: "christmas",
      location: "Indira Nagar",
      image: Pizza,
      price: 1099,
      rating: 1.2,
      totalRatings: 213,
      veg: true,
      type: "lunchbox",
    },
  ];
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item sm={3}>
          <FilterBar />
        </Grid>
        <Grid item sm={9}>
          <MainBody />
          <Grid container spacing={1} justify={"space-between"}>
            {freqOrderData.map((item) => (
              <MainFoodCard desc={item} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BottomSection;
