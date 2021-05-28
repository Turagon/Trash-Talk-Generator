## Trash-Talk-Generator

### Function
You can select any character shown in the webpage by clicking the photo or icon, then click the button at lower-left corner, it will generate a line of trash talk automatically

### Major codes
1. app.js --> in charge of routing
2. main.handlebars & index.handlebars --> for web rendering
3. ttgenerator.js --> data processing in order to generate random response
4. roles.json --> data of all characters

### Install and Executing
1. Create a folder and clone this repository to the folder
2. make sure your computer has node.js installed already
3. use terminal access the folder and install express, express-handlebars and body-parser (cmd: npm i XXXX)
4. once the environment is settled, please run nodemon app.js command in your terminal, if it is successfully boot up, there's "server on" showed in the terminal
5. open your browser and open with URL localhost:3000

### Developement Environment
Node.js 14.16.0
express 4.17.1
express-handlebars 5.3.2
body-parser 1.19.0
