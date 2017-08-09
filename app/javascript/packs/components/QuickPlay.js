import React from 'react'
import CareerStats from './CareerStats'
import Heros from './Heros'
const QuickPlay = props => {

let OverallGames = props.data.careerStats.allHeroes.game.gamesWon
// let data2 = props.data.careerStats
// var filter_allH = Object.keys(data2).filter((filt) => filt != "allHeroes")
let Heroes = Object.keys(props.data.careerStats).map((key,index) => {
  let name = key.replace(":","-")
  let replaced_name = name.replace("ú","u")
  let replaced = replaced_name.replace("ö",'o')
  let upperCased = replaced.toUpperCase();
  if (key !== "allHeroes") {
  return(
    <Heros
      key={index}
      nameC = {upperCased}
      name={replaced}
      data = {props.data.careerStats[key]}
      oGames= {OverallGames}
    />
  )}
})


// <p>{data.assist.selfHealing}</p>
// console.log(props.data.careerStats)
// console.log(filter_allH)
// <CareerStats
//   data={props.data.careerStats.allHeroes.assists}
// />
  return(
    <div>
      <h4>Quick Play</h4>
    <div className="row">
      {Heroes}
    </div>

    </div>
  )
}



export default QuickPlay
