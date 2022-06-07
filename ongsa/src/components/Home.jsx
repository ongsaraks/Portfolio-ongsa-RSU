import React from 'react'
import '../Style/Home.css'
import { motion } from 'framer-motion'
export default function Home() {
return (
<div className="home">
<div className="container-flex">
<div className="text-flex">
<div className="home-text">
<h1>Hi i'm <span>Ongsa Raksalam </span></h1>
<p>สวัดดีครับ</p>
</div>
</div>
<motion.div className="home-img"
 initial={{ x: -50 }}
whileInView={{ x: 0 }}
transition={{ type: "spring", stiffness: 100 }}
>
<img src="/img/GDafteRz.jpg" alt="" />
</motion.div>
</div>
</div>
)
}
