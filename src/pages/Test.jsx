import React from 'react'
import {motion } from "framer-motion"
const Test = () => {
    return <>
    <div className="container">
    <motion.h2 animate={{fontSize:50, color:"blue", x:100,marginTop:200  }}>
        Lorem ipsum dolor sit amet.
    </motion.h2>

    </div>

    </>
}

export default Test
