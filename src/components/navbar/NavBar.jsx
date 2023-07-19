import React from "react";
import { Box, IconButton, MenuItem, Typography, Menu as Drop, Button } from "@mui/material";
import {Twitter,GitHub,Instagram,Menu} from "@mui/icons-material";
import logo from '../../assets/logo.png'

import { Link } from "react-router-dom";

export default function NavBar() {
  //const inNonMobile = useMediaQuery("(min-width:640px)");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="w-full h-[70px]  flex justify-center items-center bg-white/80
    backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-10 ">

      {/* Content Box */}
      <Box className='flex sm:w-[90%] w-full h-full  justify-between items-center'>

      {/* Left Side */}
      <Box className="sm:flex hidden items-center">
        <img src={logo} alt="Logo" className="w-20"/>
        <Typography className="text-black font-bold text-2xl">Vitamins & Nutrition</Typography>
      </Box>

      {/* Middle Side */}
      <Box className="sm:flex hidden items-center">
        <Typography className=" font-light mx-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:border-b duration-300 hover:font-semibold"><Link>Home</Link></Typography>
        <Typography className=" font-light mx-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:border-b duration-300 hover:font-semibold"><Link>Locations</Link></Typography>
        <Typography className=" font-light mx-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:border-b duration-300 hover:font-semibold"><Link>Contact</Link></Typography>
      </Box>

      {/* Right Side */}
      <Box className="sm:flex hidden items-center">
        <IconButton className="mx-1" aria-label="Twitter">
            <Twitter className="text-base text-black" />
        </IconButton>
        <IconButton className="mx-1" aria-label="GitHub">
            <GitHub className="text-base text-black" />
        </IconButton>
        <IconButton className="mx-1" aria-label="Instagram">
            <Instagram className="text-base text-black" />
        </IconButton>
      </Box>
    
      {/* ---------------------- Mobile Section ----------------- */}
      {/* Mobile Left Side */}
      <Box className='sm:hidden block items-center w-[80px]'>
        <IconButton onClick={handleClick}>
            <Menu className="text-black text-lg"/>
        </IconButton>

        {/* DropDown */}
        <Drop
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>Locations</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Drop>
      </Box>

      {/* Mobile Middle Side */}
      <Box className="sm:hidden flex items-center">
      <img src={logo} alt="Logo" className="w-20"/>
      </Box>

      {/* Mobile Right Side */}
      <Box className="sm:hidden flex items-center">
        <IconButton className="">
            <Twitter className="text-sm text-black" />
        </IconButton>
        <IconButton className="">
            <GitHub className="text-sm text-black" />
        </IconButton>
        <IconButton className="">
            <Instagram className="text-sm text-black" />
        </IconButton>
      </Box>


      </Box>

    </Box>
  );
}
