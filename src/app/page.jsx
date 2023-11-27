"use client"
import Image from 'next/image'
import aliens from "@/lib/aliens.js"
import { useState } from "react"
import Divider from "@/Components/Divider.jsx"

export default function Home() {
  const [alienDetails, setAlienDetails] = useState(aliens);

  return (
    <main>
      <Divider section='1' />
      <div className="blueSquare"></div>
      <Divider section='2' />
      <img src="https://hmh-react-intro.netlify.app/meme.webp" alt="meme image" />
      <Divider section='3'/>
      <div className="alien">
        <h2>Alien Planets</h2>
        <div className='container'>
        {alienDetails.map((otherPlanets)=>{
          return (
            <div className='alienCard' key={otherPlanets.id}>
            <p>{ otherPlanets.emoji } </p>
            <p>{ otherPlanets.name } </p>
            <p>{ otherPlanets.name }  is { otherPlanets.distanceFromEarth } from earth. { otherPlanets.name } is {otherPlanets.hasLife ? "believed to have life" : "believed to not have life"}. The atmosphere of {otherPlanets.name} is {otherPlanets.atmosphere}.</p>
          </div>
        )
        })}
        </div>
      </div>
    </main>
  )
}
