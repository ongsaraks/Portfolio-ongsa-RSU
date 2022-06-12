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
<img src="https://scontent.fbkk29-1.fna.fbcdn.net/v/t1.6435-9/137303855_861636761268716_2707164544925441675_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGvAajNJL9R0wqhvspMNgZuT5-2o26u8nNPn7ajbq7ycyOczhPOUVYcTEtqS7toLJGfUN75UeQ97FvRtSx-n_9q&_nc_ohc=IHqHtHgz-rAAX9edcXN&_nc_ht=scontent.fbkk29-1.fna&oh=00_AT99x7M4FqGls7AADkFk1N472arf2MI26zhhRuQAnD1Dzg&oe=62CA5B70" alt="" />
</motion.div>
</div>
</div>
)
}
