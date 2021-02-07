import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
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
import ChipList from "./Chip";
import SortBy from "./SortBy";
import FormatFIlter from "./FormatFIlter";
import OccasionFilter from "./Occasion";
import RangeFilter from "./RangeFIlter";

const rawData = [
  {
    title: "Hotel Saravana",
    occasion: "birthday",
    location: "Indira Nagar",
    image: Burger,
    price: 699,
    rating: 2.3,
    totalRatings: 213,
    veg: false,
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
    veg: false,
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

const BottomSection = () => {
  const [sortBy, setsortBy] = useState();
  const [format, setFormat] = useState({
    lunchbox: false,
    takeaway: false,
    dine: false,
  });
  const [menuData, setMenuData] = useState(rawData);

  useEffect(() => {
    if (sortBy === "price") {
      let newMenuData = [...menuData];
      newMenuData = newMenuData.sort((a, b) => a.price - b.price);
      setMenuData(newMenuData);
    }
    if (sortBy === "rating") {
      let newData = [...menuData];
      newData = newData.sort((a, b) => b.rating - a.rating);
      setMenuData(newData);
    }
  }, [sortBy]);

  // useEffect(() => {
  //   setMenuData(rawData);
  // }, [format]);

  useEffect(() => {
    var lunchData = [];
    var takeawayData = [];
    var dineData = [];
    if (!format.lunchbox && !format.takeaway && !format.dine) {
      setMenuData(rawData);
    }
    if (!format.lunchbox && !format.takeaway && format.dine) {
      dineData = rawData.filter((item) => item.type === "dine");
      setMenuData(dineData);
    }
    if (!format.lunchbox && format.takeaway && !format.dine) {
      takeawayData = rawData.filter((item) => item.type === "takeaway");
      setMenuData(takeawayData);
    }
    if (format.lunchbox && !format.takeaway && !format.dine) {
      lunchData = rawData.filter((item) => item.type === "lunchbox");
      setMenuData(lunchData);
    }
    if (format.lunchbox && !format.takeaway && format.dine) {
      lunchData = rawData.filter((item) => item.type === "lunchbox");
      dineData = rawData.filter((item) => item.type === "dine");
      setMenuData([...lunchData, ...dineData]);
    }
    if (format.lunchbox && format.takeaway && !format.dine) {
      lunchData = rawData.filter((item) => item.type === "lunchbox");
      takeawayData = rawData.filter((item) => item.type === "takeaway");
      setMenuData([...lunchData, ...takeawayData]);
    }

    if (!format.lunchbox && format.takeaway && format.dine) {
      takeawayData = rawData.filter((item) => item.type === "takeaway");
      dineData = rawData.filter((item) => item.type === "dine");
      setMenuData([...takeawayData, ...dineData]);
    }
    if (format.lunchbox && format.takeaway && format.dine) {
      takeawayData = rawData.filter((item) => item.type === "takeaway");
      dineData = rawData.filter((item) => item.type === "dine");
      lunchData = rawData.filter((item) => item.type === "lunchbox");
      setMenuData([...lunchData, ...takeawayData, ...dineData]);
    }
  }, [format]);

  useEffect(() => {
    console.log("sortBy: ", sortBy);
    console.log("format: ", format);
    console.log("menu data: ", menuData);
  });
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item sm={3}>
          <div style={{ paddingLeft: "15px" }}>
            <h4>Filters</h4>
          </div>
          <>
            <FormatFIlter format={format} setFormat={setFormat} />
            <RangeFilter />
            <OccasionFilter />
          </>
        </Grid>
        <Grid item sm={9}>
          <div>
            <div style={{ paddingLeft: "8px" }}>
              <h4>Results({menuData.length})</h4>
            </div>
            <Grid container>
              <Grid item>
                <ChipList />
              </Grid>
              <Grid item>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "1rem",
                  }}
                >
                  <SortBy sortBy={sortBy} setsortBy={setsortBy} />
                </div>
              </Grid>
            </Grid>
          </div>
          <Grid container spacing={1} justify={"space-between"}>
            {menuData.map((item) => (
              <MainFoodCard desc={item} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BottomSection;
