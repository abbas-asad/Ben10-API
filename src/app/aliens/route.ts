import { NextResponse } from "next/server"

export const GET = () => {

     return NextResponse.json([
          {
               "id": 1,
               "name": "Alien X",
               "description": "A swift alien with incredible speed and agility, capable of evading any attack.",
               "image": "/images/alien1.png"
          },
          {
               "id": 2,
               "name": "Way Big",
               "description": "A giant alien with immense strength, able to withstand the toughest battles.",
               "image": "/images/alien2.png"
          },
          {
               "id": 3,
               "name": "Humungousaur",
               "description": "A massive, dinosaur-like alien with the power to smash through obstacles and enemies.",
               "image": "/images/alien3.png"
          },
          {
               "id": 4,
               "name": "Big Chill",
               "description": "A cold, ghostly alien with the ability to phase through solid objects and freeze enemies.",
               "image": "/images/alien4.png"
          },
          {
               "id": 5,
               "name": "Swampfire",
               "description": "A plant-based alien with the ability to control fire and regenerate from injuries.",
               "image": "/images/alien5.png"
          },
          {
               "id": 6,
               "name": "Goop",
               "description": "A gelatinous alien that can morph its shape and uses anti-gravity technology to control its movement.",
               "image": "/images/alien6.png"
          },
          {
               "id": 7,
               "name": "Brainstorm",
               "description": "A highly intelligent alien with the ability to manipulate electrical energy and solve complex problems.",
               "image": "/images/alien7.png"
          },
          {
               "id": 8,
               "name": "Cannonbolt",
               "description": "A round, armored alien that can curl into a ball for high-speed offense and defense.",
               "image": "/images/alien8.png"
          },
          {
               "id": 9,
               "name": "Jet Ray",
               "description": "A sleek, ray-like alien with the ability to fly at supersonic speeds and alter its size.",
               "image": "/images/alien9.png"
          },
          {
               "id": 10,
               "name": "Echo Echo",
               "description": "A four-armed alien capable of producing sound-based attacks with incredible precision and force.",
               "image": "/images/alien10.png"
          }
     ])

}