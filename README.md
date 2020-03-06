# RPS Challenge
### Author   
[Janko Radakovic](https://github.com/MadFarmer101/Rock-Paper-Scissors)
## Built with  
React v.16.12.0, CSS   
**Testing frameworks:** Cypress  
**Deployed at:** [Netlify](https://rock-paper-scissors101.netlify.com/) 

## The code   
This application iThis application is everybodies favorite: Rock, Paper and Scissors game. You as a User play a game against the computer. You pick your item for the battle and Computer is programed to pick a random item. Selections are then compared and you can see a proper outcame message.

## Getting started
### Dependencies  
* Yarn
* React
* Cypress
* Chance
* Axios


### Setup   
To test this application, fork the repo to your own GitHub account and clone it to your local workspace. </br>

Install all of the dependencies:    
```
$ yarn install
```  
Run the unit tests:  
```
$ yarn test
```  
Start cypress and run the feature tests:  
```
$ yarn run cy:open
$ yarn start
```
### User Stories
```
As a User
In order to understand the application
I need to have a home page with all the info about the app.
```

```
As a User
In order to play a game by the rules
I need to be able to choose between 3 options and computer should randomly choose between 3 options. 
```

```
As a User
In order to play a game by the rules
The game should be tie if we both choose the same item. Paper should win against Rock. Rock should win against Scissors. Scissors should win against Paper. 
```

```
As a User
In order to keep track of the game progress
I need to be able to see a Scoreboard.
```

## Updates/Improvements   
- Add Scoreboard Feature.
- Revert everything to initial state after a round is played.
- Add shake animation before .showing a final choice.
- Add Lizard and Spock items 
## License  
[MIT-license](https://en.wikipedia.org/wiki/MIT_License)
### Acknowledgement  
[Craft Academy](https://craftacademy.se).  

