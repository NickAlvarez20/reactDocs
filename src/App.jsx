import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


// Intro Section
function MyButton() {
  return <button>Here's a button</button>;
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there, I am a developer. <br /> Did you read the documents?
      </p>
    </>
  );
}

// About me Section
const user = {
  name: "Nick Alvarez",
  imageUrl: "/headshot_CityStars.jpg",
  imageSize: 90,
};
function DisplayAboutMe() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
    </>
  );
}

// Hobby section
const hobbies = [
  {
    name: "Guitar",
    imageUrl: "/AboutMe/Hobbies/alvarez-guitar-hobby.jpg",
    imageSize: 90,
    isInstrument: true,
    id: 1,
  },
  {
    name: "Coding",
    imageUrl: "/AboutMe/Hobbies/coding-hobby.jpg",
    imageSize: 90,
    isInstrument: false,
    id: 2,
  },
  {
    name: "Piano",
    imageUrl: "/AboutMe/Hobbies/piano-hobby.jpg",
    imageSize: 90,
    isInstrument: true,
    id: 3,
  },
  {
    name: "Reading",
    imageUrl: "/AboutMe/Hobbies/reading-hobby.jpg",
    imageSize: 90,
    isInstrument: false,
    id: 4,
  },
];
function HobbyList() {
  const listItems = hobbies.map((hobby) => (
    <li key={hobby.id} style={{color: hobby.isInstrument ? 'white': 'cyan'}}>
      {hobby.name}
      <div>
        <img
          className="hobbies-img-styling"
          src={hobby.imageUrl}
          alt={"Photo of " + hobby.name}
          style={{ width: hobby.imageSize, height: hobby.imageSize }}
        />
      </div>
    </li>
  ));
  return <ul className="hobbies-list">{listItems}</ul>;
}

function FavoritesHobbies() {
  return (
    <>
      <h1>Favorite Hobbies</h1>
      <p>
        While I enjoy many different activities, these are a few of my
        favorites.
      </p>
      <div className="hobbies-container">
        <HobbyList />
      </div>
    </>
  );
}



// Main Webpage with components

export default function App() {
  return (
    <>
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
      <div>
        <AboutPage />
      </div>
      <div>
        <DisplayAboutMe />
      </div>
      <div>
        <FavoritesHobbies />
      </div>
    </>
  );
}
