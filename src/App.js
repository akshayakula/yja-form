import React, { useState } from 'react'
import axios from 'axios'
import firebaseConfig from "./firebase"
import firebase from "firebase/app"
import "firebase/firestore"
import logo from './logo.png'


import './App.css';

function App() {
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [center, setCenter] = useState("")
  let [birth, setBirth] = useState("")
  let [diet, setDiet] = useState("")
  let [needs, setNeeds] = useState("")


  const ref = firebase.firestore().collection("submissions")

  const handleOnSubmit = async (event) => {
    event.preventDefault()
    ref.doc(name).set({ "name": name, "email": email, "center": center, "dob": birth, "diet": diet, "needs": needs })
  }


  return (
    <div className="App">
      <br></br>
      <img src={logo} height="200" width="200"></img>
      <br></br>
      <br></br>
      Name: <input class="rounded-input" type="name" name="name" value={name} onChange={(event) => { setName(event.target.value) }} />
      <br></br>
      <br></br>
      Email: <input class="rounded-input" type="email" name="email" value={email} onChange={(event) => { setEmail(event.target.value) }} />
      <br></br>
      <br></br>
      Center: <input class="rounded-input" type="center" name="center" value={center} onChange={(event) => { setCenter(event.target.value) }} />
      <br></br>
      <br></br>
      Date of Birth: <input class="rounded-input" type="date" name="birth" value={birth} onChange={(event) => { setBirth(event.target.value) }} />
      <br></br>
      <br></br>
      Dietary Preferences: <input class="rounded-input" type="diet" name="diet" value={diet} onChange={(event) => { setDiet(event.target.value) }} />
      <br></br>
      <br></br>
      Any Special Needs?: <input class="rounded-input" type="needs" name="needs" value={needs} onChange={(event) => { setNeeds(event.target.value) }} />
      <br></br>
      <br></br>
      <button class="rounded-input" type="submit" value="Submit" onClick={(event) => handleOnSubmit(event)} > submit </ button>
    </div >
  );
}

export default App;
