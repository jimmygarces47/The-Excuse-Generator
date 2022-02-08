/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let generateExcuse = () => {
    let who = ["the dog", "my granma", "his turtle", "my bird"];
    let what = ["eat", "pissed", "crushed", "broked"];
    let when = [
      "before the class",
      "right in time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    let prueba = who.length;
    let whoIndex = Math.floor(Math.random() * 3);
    let whatIndex = Math.floor(Math.random() * 3);
    let whenIndex = Math.floor(Math.random() * 3);
    console.log(prueba);

    return who[whoIndex] + " " + what[whatIndex] + " " + when[whenIndex];
  };
  console.log(generateExcuse());

  console.log("Hello Rigo from the console!");
};
