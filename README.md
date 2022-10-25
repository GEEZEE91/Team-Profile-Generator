# Team Profile Generator
  
 
 
  
 ## Description 
  Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.
  
The app will prompt the user for info regarding the team manager and then subsequently specific information for each team member. The user can add as many team members as required, consiting of a mix of engineers and interns. Once all team members are added a are HTML page is created that can be easily viewed in a web browser.

The app is currently built with a software engineering team in mind however this can be used as a template and changed to represent the team you are creating.

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  

## Installation 
  First step, clone the repo 
  
    git clone https://github.com/GEEZEE91/Team-Profile-Generator.git
  
  Open command line terminal and install dependencies
    
    npm i

## Usage 
  To use the app run the below command in the terminal
  
    node index.js

  Follow prompts and answer questions in regards to you team.
  
  First enter Team Manager information.
  
  Than add as many Engineers and/or Interns as your team requires. 
  
  Once finished adding team members select Generate Team option and a HTML page with employee cards, based on the answers provided in generated.
  
  The generated HTML can be found under ./dist/teamindex.html
  
![Terminal ](https://user-images.githubusercontent.com/3950562/197588925-cf108e92-32f8-492d-ae47-f35b631bc6fe.png)

The below image displays an example what the final HTML page will look like.
![Generated Team](https://user-images.githubusercontent.com/3950562/197588957-7a638620-58d9-4c29-9720-7a661c7547c5.png)

Video Link to how the application can be used
https://github.com/GEEZEE91/Team-Profile-Generator/blob/main/assets/teamgenerator.mp4


 ## Tests
Once dependencies are installed the user can run the command below

    npm test
All tests should PASS

![image](https://user-images.githubusercontent.com/3950562/197588621-75746710-2f66-4e00-9f39-9f999b5bf178.png)

## License 
This project is license under MIT
  ![Github license](http://img.shields.io/badge/license-MIT-blue.svg)
  
## Questions
  If you have any questions about this projects, please contact me directly at gina.zivkovic91@gmail.com. You can view more of my projects at https://github.com/geezee91.
