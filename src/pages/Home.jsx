import { Box } from "@mui/material";
import React from "react";
import Hero from "../components/hero/Hero";
import GymExp from "../components/gymExperience/GymExp";
import Location from "../components/location/Location";
import Products from "../components/products/Products";
import CEO from "../components/ceo/CEO";

export default function Home() {
  //const inNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box className="w-full   flex justify-center flex-col items-center mt-[70px]">
      <Box className="w-[90%]  flex flex-col">
        <Hero />

        <GymExp />

        <Location />

        <Products />

        <CEO />
       
      </Box>
    </Box>
  );
}
