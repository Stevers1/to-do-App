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
    },
    {
      id: 1,
      done: false,
      desc: "Test2",
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

  //For the Add plus button to add a new Thing to do
  function addOnClick() {

    let newId = things.length 
    setThings((prevThings) => [...prevThings, description]);

    setDescription((prevThings) => {
      return {
        id: newId + 1,
        done: false,
        desc: "",
      };
    });
  }

  function activeClick() {
    setThings(prevThings => {
      return prevThings.filter(el => {
        return el.done === false
      })
    })
  }
  console.log(Things)

  return (
    <main className="app_container">
      <Input onChange={handleChange} value={description.desc} />
      {thingsDisplay}
      <InteractiveBar onClick1={addOnClick} onClickActive = {activeClick} />
    </main>
  );
}
