# Live-Ludo-Game--Vanilla-JS-Node.js--Express.js--SASS-PostgreSQL-WecSocket.io

This project is about building a live Ludo Game.
The project will have 4 players which will be able to interact with each other from different computers.
The game rules itself are standard Ludo Game rules, with no exceptions (for now). In some future, I will add live chat feature 
so that players can communicate. 
Technologies I will be using are:

1) Frontend - HTML, CSS (with SASS preprocessor) and Vanilla Javascript. I was thinking about using Vue.js framework to make things faster, but with this project I really want to push my current Javascript knowledge to the edge. Hopefully that will be enough of a challenge.
2) Backend - Node.js and Express.js for interacting with Web Sockets and database; I will be using Web Sockets for live session of the game and the chat feature
3) DataBase Management System - PostgreSQL --> this may change, at the time of writing this document I consider relational database as the right solution for this kind of project, and because I have solid experience with it, but one thing at the time.

18.9.2022
Board finished!

19.9.2022
Dice finished!
- dice sides, dice rings, dice body, and dice animation

20.9.2022
Player created! And some player movement, but still work in the progress.
I made utillity function for finding origin (center) point of any given HTML element in the browser.
Prototyped player movement with tracking current mouse position and handling dummy player`s top and left properties.

21.9.2022
- further prototyping player movement - now through the waypoints which will be saved in the array 

22.9.2022
- all player`s possible path waypoints done
- player moves on the board squares in the interval of 2 seconds, but not in the predefined paths

23.9.2022
- yellow player, green player, red player and blue player path DEFINED!
- dummy player now can move through previosly predefined path!
- dice animation modified
- waypoint entity extended with new properties

24.9.2022
- making utillity function for dice numbers
- displaying each dice side when random number is gotten

25.9.2022
- dice now shows right side according to value of random number
- dice animation FULLY FINISHED! Dice now rotates for 1 second than stops and shows random generated number side

26.9.2022
- all player`s starting positions DEFINED!
- major code cleanup for better readability
- player instantiate on their starting positions

27.9.2022
- added wrapper function, which rotates dice and returns a random generated number at one call
- script code has moved to JS files
- board, cube and dummy player stats are moved into one single HTML script, and style is patched (HTML merging)
- added displayed generated dice number to the screen, and it`s styling
- added dice button styles
- major script cleanups
- added general application UI styling script

BUGS to fix: 
a) fix player positions, it is slighlty offset from central positions

28.9.2022
- added flicker color animation class which for player´s start area wrapper when is next player´s turn