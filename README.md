### Battleship State Tracker

The Game and code is being designed considering the main parameters of considerations as follows:

## Readability

- Adequate Commends and helper usage is being defined along the code
- Code standards including camelCase, meaningful names and being followed 

## Maintainability

- The code is divided into adequate readable blocks with code being divided into multiple independant piece of code.

## Testability

- The provided console alongside game provides debugging and testing options

## Extensibility

- The code is designed to have extension in aspects like

a) The Battle ship positions are defined in 2D Array[][], which has one battleship at the moment, which can be extended by adding other battleships into it


### Code Set up

Step1) Clone the Project
Step2) Inside the main enclosing project folder

- npm install (Install the packages)
- npm start (Run the Project)

# By Default

Game has two battleship being placed, in a location being defined in battleships array in `Game.js`

## Code Structure

`Game.js`
- This file defines the Game logic, battleship positions, Victory and End Logic

`Board.js`
- This File defines the UI and attaches the listeners to each action being defined in Game.js

`App.js`
- This file is the main starting file, where the game client is being defined to start the application, including the building environment and number of players
