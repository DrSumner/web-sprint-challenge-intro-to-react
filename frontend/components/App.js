import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function  App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  const [planetData, setplanetData] = useState(null)
  const [peopleData, setpeopleData] = useState(null)
useEffect(() => {


  axios
.get(urlPlanets)
.then( res =>{
  setplanetData(res.data)
  console.log(res.data)
})
.catch( err =>
console.log(err.message)
)

axios
.get(urlPeople)
.then( res =>{
  console.log(res.data);
  setpeopleData(res.data)
})
.catch( err =>
console.log(err.message)
)


}, [])


//  if(peopleData){
//   console.log(peopleData[0])
//   console.log(planetData.length)
//   console.log(typeof planetData)
//   console.log(typeof peopleData)
//   console.log(peopleData[0])
//  }




 const findPlanet = data => {
for (let i = 0; i< planetData.length; i++){
  
  if(planetData[i].id == data.homeworld){
    return planetData[i].name
  }
}
 }

 if(peopleData){
  peopleData.map(people =>
    console.log(findPlanet(people))
  )
}




 //if(peopleData && planetData){console.log( findPlanet(peopleData[0]))}

 
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {peopleData ? (peopleData.map(people => 
         
        <Character
        key = {people.id}
        name = {people.name}
        planet = {findPlanet(people)}
        
        />
      
      
      )) :
      <div> loading</div>
      }
    </div>
  )



  // return (
  //   <>
  //     {peopleData ? (
  //       <div>
  //         {peopleData.map( (people, index) => (
  //           <div key={index}>
  //             { findPlanet(people)}
  //           </div>
  //         ))}
  //       </div>
  //     ) : (
  //       <p>Loading...</p>
  //     )}
  //   </>
  // );



}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
