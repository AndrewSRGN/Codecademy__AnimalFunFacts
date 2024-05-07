import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const title = "";
const showBackground = true;
const background = <img className="background" alt="ocean" src="/images/ocean.jpg" />;
const images = [];

const lastFact = {
    animal: "",
    factIndex: ""
};
const displayFact = (e) => {
    const animal = e.target.alt;
    const factsLength = animals[animal].facts.length;
    let randomIndex = Math.floor(Math.random() * factsLength)

    if (lastFact.animal === animal && lastFact.factIndex === randomIndex) {
        randomIndex = (randomIndex + 1) % factsLength;
    }

    const fact = animals[animal].facts[randomIndex];
    const factElement = document.getElementById('fact');

    lastFact.animal = animal;
    lastFact.factIndex = randomIndex;

    factElement.innerHTML = fact;
}

for (const animal in animals) {
    const image = (
        <img
            key={animal}
            className="animal"
            alt={animal}
            src={animals[animal].image}
            aria-label={animal}
            role="button"
            onClick={displayFact}
        />
    );

    images.push(image);
}

const animalFacts = (
    <div>
        <h1>{title || "Click an animal for a fun fact"}</h1>
        {showBackground && background}
        <p id="fact"></p>
        <div className="animals">{images}</div>
    </div>
);

root.render(animalFacts);