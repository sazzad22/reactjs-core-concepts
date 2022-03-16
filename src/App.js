import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

//declaring variables as objects
const number = 5656;
const myObject = {
  name: "king Najashi",
  job: "king of abisinia",
};
//for adding style , fisrt declare an object and inside it set the properties and values.

//? css
const textStyle = {
  color: 'brown',
  backgroundColor: 'white' //no hiphen is allowed in js react
}

function App() { //This one is called root component. It sits at the top of the tree

  const names = ['Ali Ibn Abu-talib', 'Uthman Ibn Affan', 'Khalid Ibn Walid'];

  const myObjects = [
    { name: 'sofia', detailss: 'Mother of the belivers, From the tribe banu nadjir' },
    { name: 'Ayisha', detailss: 'Mother of the belivers, Daughter of Abu Bakar' },
    { name: 'Jainab', detailss: 'Mother of the belivers, From the tribe Quraish' },
    
  ]

  return (
    <div className="App">
      <h2> List of component named Person</h2>
      <Person></Person>
      <Person></Person>
      
      <Person></Person>
      <br />
      <h3>Companions of the prophet</h3>

      <Friend name="Abu Bakar As-siddiq" title="As-siddiq"></Friend>
      <Friend name="Bilal inb Rabah" title="First caller of the Azan"></Friend>
      <Friend name="Saad ibn Mu'az" title="Leader of the Aus from Yathrib"></Friend>

      <h3>Dynamic components from  array data</h3>


      {
        names.map(name => <Companions name={name} ></Companions>)
      }

      <h3>Wives of the prophet</h3>
      {
        myObjects.map(wife => <Wives name={wife.name} detail={wife.detailss} ></Wives>)
      }




      {/* 
      //state ,setCount , useState method
      */}
      <Counter></Counter>



    </div>
  );
}

//creating new component
function Person() { //here person is a new component
  return (
    <div className='person'>
      <h1>Imam Abu Hanifa</h1>
      <h4>A tabe'tba'i and a great Imam</h4>
    </div>
  )
}

function Friend(props) {
  return (
    <div className="companions">
      <h2>Companion Name:{props.name} </h2>
      <p>A rightous companion of the prophet </p>
      <p>Title:{props.title}</p>

    </div>
  )
}

//multiple components created dynamically from as array where the created components are used only once inside the call back function of method map
function Companions(props) {
  return (
    <div className='companions2'>
      <h2>{props.name}</h2>
      <p>{props.detail}</p>
    </div>
  )
}


// the attribute is like an obj, the object is passed in as props. To get specific key of an object, one must write the exact key name of the attribute.
function Wives(props) {
  return (
    <div className="wives">
    <h2>{props.name}</h2> 
    <p>{props.detail}</p>
    </div>
  )
  
}



//state ,setCount , useState method
function Counter() {
  const [count,setCount] = useState(10) //useState method must be imported first to use it. const []= useState is used to import this func in my own code
  
  // const abc = useState(10); //useState is a method that returns an array. This particular useState returns [10,f()]
  
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 10);


  return (
    <div>
      <h1>Counter:{count}</h1>

<button onClick={increaseCount} >Increase</button>

<button onClick={decreaseCount}>Decrease</button>

    </div>
  )
}

export default App;
