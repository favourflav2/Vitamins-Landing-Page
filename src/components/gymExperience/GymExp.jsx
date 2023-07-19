import React from 'react'
import { Box, Typography} from "@mui/material";
import Card from '../card/Card';
import supp from "../../assets/supp.jpg"
import trainer from "../../assets/trainer.jpg"
import gym from "../../assets/gym.jpg"

export default function GymExp() {
    const arr =[{img:"https://images.unsplash.com/photo-1622013267639-b405db50e477?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", desc:"Vitamins & Supplements"},{img:"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", desc:"Personal Trainers"},{img:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", desc:"Gym Locations"}]
  return (
    <Box className="w-full min-h-[600px]  flex flex-col sm:mt-1 mt-14 mb-20">
        
        {/* Title */}
        <Typography className='text-3xl mb-3'>We also deliver a great <span className=' text-teal-500 font-bold'>Gym Experience</span></Typography>

        {/* Details */}
        <Typography className='text-gray-500 w-[75%] mb-10'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Typography>

        <Box className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mb-2 mt-5">
            {arr.map((item,index)=>(
                <Card key={index} item={item}/>
            ))}
        </Box>
        
    </Box>
  )
}
