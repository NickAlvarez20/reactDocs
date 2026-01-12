import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function MyButton() {
  return <button>Here's a button</button>;
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there, I am a developer. <br/> Did you read the documents?</p>
    </>
  )
}

export default function App() {
  return (
    <>
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
      <div>
        <AboutPage/>
      </div>
    </>
  );
}



