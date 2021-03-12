# Turn based RPG Game
I have created a turn-based RPG game using phaser, javascript, and HTML5.With two characters chasing balls that move in all directions.

## Built With

- HTML5
- CSS3
- BOOTSTRAP4
- Javascript
- Webpack

## Live Demo

[Live Demo](https://romantic-albattani-29c047.netlify.app/)

## Getting Started

-To play this game online click [here](https://romantic-albattani-29c047.netlify.app/)

PreloaderScene :
- Will load all the assets needed for the game scene and it will show the progress until it loads everything.
- Then it will pass you to the title scene which has a play button that opens the game scene.
- The game scene is the main scene where you play the game.
- In the game, there are two characters and also balls the goes in all direction.
- These balls disappear if they overlap with any of those two characters.
- The characters are the players 
- Since this is a turn-based game the players have idele and active states
- One can change the state of a character using the spacebar.
- When all the balls disappear it will take you to the credits scene.
- In the credits scene it will tell the final score which is the highest of the two scores.
- And there is a form where you can fill in the username and click submit
- It will submit the final score and the username to the leaderboard API.
- At the bottom there is a leaderboard button click it.
- The button will take you to the leaderboard scene.
- Then you will see a list of users with their scores and rank. 





## Technologies used
- JavaScript
- A bit of HTML and CSS for the front end
- Phaser 3
 - Webpack
- Eslint
- Babel
- Jest in the tests
- Github

[Leaderboard API service][LB-API] for the leaderboard
## To get a local copy

.
- Run the following commands on the terminal
- git clone https://github.com/Lidya1234/RPG-game
- cd RPG-game
- npm install
- npm install --only=dev
- npm start (This is the development mode)
- npm run build (This is the production mode)

# For running the test cases:

- Run "npm test"




### Setup

- install code editor
- Browser

## Testing

- Run `npm install` to install required packages for testing and the whole project.
- Run `npm run test` to run the tests
- Tests are located in `src/test`.

## Author Details

👤 **Lidya Ghebreigziabher**

- Github: [@Lidya-github](https://github.com/Lidya1234)

- Twitter: [@Lidya-twitter](https://twitter.com/Lidya42676629)

- Linkedin: [Lidya-linkedin-link](https://www.linkedin.com/in/lidya-ghebreigziabher-4a94391aa/)



## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!