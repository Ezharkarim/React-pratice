import React, { useState } from "react";
import Card from "../component/Card";
import  Axios  from "axios";
import { useToggle } from "../hooks/useToggle";
const Practice = () => {
  const [items, setItems] = useState("");
  const [getdata, setGetdata] = useState("");
  const [listitems, setListitems] = useState([]);
  const handlechange = (e) => {
    setItems(e.target.value);
  };
  const additems = () => {
    const task = {
      id: listitems.length === 0 ? 1 : listitems[listitems.length - 1].id + 1,
      name: items,
      complete: false
    };
    setListitems([...listitems, task]);
  };
  const handledelete = (id) => {
    setListitems(listitems.filter((task) => task.id !== id));
  };
  const handlecomplete = (id) => {
    setListitems(
      listitems.map((task) => {
        if (task.id === id) {
          return { ...task, complete: true };
        } else {
          return task;
        }
      })
    );
  };
  const handleshow = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (resp) => {
        setGetdata(resp.data[0].excuse);
      }
    );
  };

  const [isVisible, toggle] = useToggle();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div style={{ alignItems: "center", position: "relative" }}>
          <input onChange={handlechange} placeholder="enter here..." />
          <button
            style={{ backgroundColor: "blue", width: "40px" }}
            onClick={additems}
          >
            Add
          </button>
        </div>
      </div>
      <div
        style={{
          borderWidth: "2px",
          padding: "2px",
          borderBlockColor: "2px",
          backgroundColor: "white"
        }}
      >
        {listitems.map((items) => {
          return (
            <Card
              name={items.name}
              id={items.id}
              complete={items.complete}
              handledelete={handledelete}
              handlecomplete={handlecomplete}
            />
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            display: " flex-column ",
            alignItems: "center",
            position: "relative"
          }}
        >
          <button
            style={{ backgroundColor: "blue", width: "40px" }}
            onClick={() => handleshow("family")}
          >
            family
          </button>
          <button
            style={{ backgroundColor: "blue", width: "40px" }}
            onClick={() => handleshow("party")}
          >
            party
          </button>
          <button
            style={{ backgroundColor: "blue", width: "40px" }}
            onClick={() => handleshow("office")}
          >
            office
          </button>
          <h1>{getdata}</h1>
        </div>
      </div>

      <div>
        <button className=" bg-zinc-400 hv100" onClick={toggle}>
          {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <h1>Hidden show</h1>}
      </div>
    </>
  );
};

export default Practice;
