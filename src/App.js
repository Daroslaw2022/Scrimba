import React from "react"
import Navbar from "./components/Navbar"
import "../src/style.css"
import Card from './components/Card'
import katie from './images/katie.jpg'
import data from './data'

export default function App() {
    const Cards= data.map(item => {
        
        return (
            <Card
            key={item.id}
            img={katie}
            item={item}
            /*rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            openSpots={item.openSpots}*/
            />
            )
        })
    return (
        <div>
            <Navbar />
            {Cards}
        </div>
    )
}