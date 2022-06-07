import React from 'react'
import '../Style/About.css'
import { motion } from 'framer-motion'
export default function About() {
    return (
        <div className="about">
            <div className="container-flex">
                <motion.div className="about-img"
                    initial={{ x: -50 }}
                    whileInView={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <img src="/img/GDafteRz.jpg" alt="" />
                </motion.div>
                <div className="text-flex">
                    <div className="about-text">
                        <h1>About</h1>
                        <p>ผมนายองศา รักสลามนะครับ เหตุผลที่ผมอยากมา CPE CAMP คือผมอยากจะมีประสบการณ์ในการเขียนReact ครับ</p>
                        </div>
                    </div>
                </div>
            </div>
            
            )
}