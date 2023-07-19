import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import heroPic from "../../assets/heroPic.jpg";

export default function Hero() {

 

  return (
    <Box className="flex sm:py-[50px] sm:mt-10 sm:h-[650px] h-[500px] w-full mb-5 ">
      {/* Left Side */}
      <Box className="sm:flex hidden flex-col justify-center w-[50%] p-5">
        {/* Header */}
        <Typography className=" font-bold text-3xl mb-5">
          Organic Vitamins & Supplemets
        </Typography>

        {/* Text */}
        <Typography className=" text-[20px] font-light text-gray-800 leading-9 ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Typography>

        {/* Buttons */}
        <Box className="flex items-center mt-5">
          <Button
            variant="contained"
            className="bg-black hover:bg-gray-500 mr-4"
          >
            Visit Store
          </Button>
          <Link>
            <Button variant="contained" className="bg-black hover:bg-gray-500">
              GitHub
            </Button>
          </Link>
        </Box>
      </Box>

      {/* Right Side */}
      <Box className="w-[50%] sm:block hidden">
        <img
          src="https://images.unsplash.com/photo-1620755848138-dd2cbb2781c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
          alt=""
          className="w-full h-full object-cover rounded-3xl"
        />
      </Box>

      {/* Mobile Side */}
      <Box className="w-full h-full sm:hidden flex justify-center">


        {/* Card */}
        <Box className="w-full h-full group">
          <Box className="relative overflow-hidden w-full h-full">
            <img src="https://images.unsplash.com/photo-1620755848138-dd2cbb2781c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="" className="w-full h-full object-cover rounded-2xl"/>
            <Box className="absolute h-full w-full flex flex-col justify-center items-center top-0 group-hover:bg-black/60 transition-all duration-300 opacity-0 group-hover:opacity-100">
              {/* Header */}
              <Typography className=" font-bold text-3xl text-gray-100 mb-5 p-3">
                Organic Vitamins & Supplemets
              </Typography>

              {/* Text */}
              <Typography className=" text-[20px] font-light text-gray-100 leading-9 p-3">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </Typography>

              {/* Buttons */}
              <Box className="flex items-center mt-5">
                <Button
                  variant="contained"
                  className="bg-black hover:bg-gray-500 mr-4"
                >
                  Visit Store
                </Button>
                <Link to="https://github.com/favourflav2/Vitamins-Landing-Page">
                  <Button
                    variant="contained"
                    className="bg-black hover:bg-gray-500"
                  >
                    GitHub
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>


      </Box>
    </Box>
  );
}
