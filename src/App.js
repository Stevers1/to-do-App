import React from "react";
import Input from "./components/Input";
import Things from "./components/Things";
import InteractiveBar from "./components/InteractiveBar";



export default function App() {
  const [things, setThings] = React.useState([
    {
      id: 0,
      done: false,
      desc: "Test",
      active: "flex"
    },
    {
      id: 1,
      done: false,
      desc: "Test2",
      active: "flex"
    }
  ]);
  //Code that will display the array of objects from {things}

  const thingsDisplay = things.map((el, index) => {
    return (
      <Things
        item={el}
        key={index}
        id={index}
        name="done"
        checked={el.done}
        onChange={handleCheck}
        display={el.active}
      />
    );
  });

  //For the top input Description

  const [description, setDescription] = React.useState({
    id: things[things.length - 1].id + 1,
    done: false,
    desc: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setDescription((pevDescription) => {
      return {
        ...pevDescription,
        [name]: type == "checkbox" ? checked : value,
      };
    });
  }
  //onChange for the CHECKBOX
  function handleCheck(event) {

    const {id} = event.target

    const selected = things.find((el) => {
      return el.id == id
    })

    console.log(selected,"selected")
    setThings(prevThings => {
      const newThings = prevThings.map(obj => {
        if(obj.id ==id){
          return {...obj, done:!obj.done}
        }else return{...obj}
      })

      return newThings;
      
    })

  }
  function onEnter(e) {
    console.log(e.key)
    if(e.key === "Enter"){
      addOnClick();
    }
  }

  //For the Add plus button to add a new Thing to do
  function addOnClick() {


    let newId = things.length 
    setThings((prevThings) => [...prevThings, description]);

    setDescription((prevThings) => {
      return {
        id: newId + 1,
        done: false,
        desc: "",
        active: "wait"
      };
    });
  }

  function searchBar(e) {
    const {value}=e.target;
    setThings(prevThings =>{
      const searchDisplay = prevThings.map(el =>{
        if(el.desc.includes(value)){
          return{...el,active:"flex"}
        }else return{...el,active:"none"}
      })
      return searchDisplay
    })
  }

  // active button
  function activeClick() {

    setThings(prevThings => {
      console.log('Does it run?');
      
      const setDisplay = prevThings.map(el => {
        if(el.active=="none"){
          el.active="flex"
        }
        if(el.done===true){
          return {...el, active:"none"}
        }else return{...el}
      })
      return setDisplay;
    })
  }

  function completedButton() {
    setThings(prevThings => {
      const setDisplay=prevThings.map(element => {
        if(element.active=="none"){
          element.active="flex"
        }
        if(element.done === false){
          return{...element, active:"none"}
        }else return {...element}
      })
      return setDisplay;
    })
  }

  function allButton() {
    setThings(prevThings => {
      const setDisplay = prevThings.map(el => {
        if(el.active === "none"){
          return{...el, active:"flex"}
        }else return{...el}
      })
      return setDisplay
    })
  }
  console.log(Things)

  return (
    <main className="app_container">
      <Input onChange={handleChange} value={description.desc} handleEnter={onEnter}/>
      {thingsDisplay}
      <InteractiveBar searchBar={searchBar} onClickAll ={allButton} onClickCompleted={completedButton} onClick1={addOnClick} onClickActive = {activeClick} />
    </main>
  );
}
