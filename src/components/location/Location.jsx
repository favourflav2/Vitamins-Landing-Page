import { Box, IconButton, Typography, useMediaQuery} from '@mui/material'
import React from 'react'
import { motion } from "framer-motion"
//import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import gym from "../../assets/gym.jpg"
import gym1 from "../../assets/gym1.jpg"
import gym2 from "../../assets/gym2.jpg"
import gym3 from "../../assets/gym3.jpg"
import gym4 from "../../assets/gym4.jpg"

export default function Location() {

    const arr = [
        {
            img:"https://images.unsplash.com/photo-1534438097545-a2c22c57f2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            desc: "4717 Lonely Oak Drive Mobile, Alabama 36575"
        },
        {
            img:"https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            desc: "3331 West Fork Street Miles City, Montana 12375"
        },
        {
            img:"https://images.unsplash.com/photo-1637666218229-1fe0a9419267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            desc: "1425 Hall Street Las Vegas, Nevada 89121"
        },
        {
            img:"https://images.unsplash.com/photo-1623874514711-0f321325f318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            desc: "3473 Mason Hill Los Angeles, California 32398"
        },
        {
            img:"https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            desc: "5601 Greenville Ave Stockton, California 18964"
        },
       
    ]
    const [state, setState] = React.useState(true)
    const isNonMobile = useMediaQuery('(min-width:640px)')

    React.useEffect(()=>{
        isNonMobile === true ? setState(true) : setState(false)
    },[isNonMobile])

    

  return (
    <Box className=" flex flex-col min-h-[500px] mt-[90px] mb-[50px]">
        <Typography className='text-3xl mb-5'>We are a growing and are located all over the U.S</Typography>
        <Typography className='text-gray-500 mt-2 w-[60%]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </Typography>
        
        <Box className='flex items-center mt-8 mb-4'>
            <Typography>Discover our showcase</Typography>
            <IconButton aria-label='View All Locations'>
                <NavigateNextIcon className='text-black'/>
            </IconButton>
        </Box>

        <motion.div className='cursor-grab overflow-hidden h-[250px] lick'>
            
            <motion.div className='cursor-grab flex   h-[250px] '
            animate={{
                scale: [1, 1, 1, 1, 1],
                rotate: [0, 30, 60, 240, 360],
            }}
            drag="x" 
            dragConstraints={{right: 0, left: state=== true? -600 : -800}} 
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }} 
            >
                {arr.map((item,index)=>(
                    <motion.div key={index} className={index === 0 ? 'cursor-grab flex flex-col min-w-[220px] xl:min-w-[340px] sm:items-center h-full sm:mr-3  ' : 'cursor-grab flex flex-col min-w-[220px] sm:items-center h-full sm:mx-3 xl:min-w-[340px]'}>
                         <img src={item.img} alt="" className=' pointer-events-none  rounded-3xl sm:w-full sm:h-[200px] mb-2 h-[150px] w-[80%]'/> 
                        <div className='text-gray-500 sm:text-base text-sm '>{item.desc}</div>
                        
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>

{/* <motion.div className="carousel">
                <motion.div
                className='inner-carousel'
                    animate={{
                        scale: [1, 1, 1, 1, 1],
                        rotate: [0, 30, 60, 240, 360],
                    }}
                    drag="x" 
                    dragConstraints={{right: 0, left:-1100}} 
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }} 
                >
                    {arr.map((image) => {
                        return (
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 2 }}
                                className="item"
                                transition={{ duration: 3 }}
                                key={image}
                            >
                                <img src={image.img} alt="" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div> */}

            
    </Box>
  )
}
