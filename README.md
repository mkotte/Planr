# Project Idea
## Project Management System (ex: trello.com)
### Technology To Use
* Bootstrap -CSS-  
* MYSQl (Sequelize(ORM), + Professional Appearing Seed File's)
* Express (Handlebars.js)
* Node.js (dotenv, bcrypt)
* Heroku, for deployement
* Encryption/Authentication for access (bcrypt, google*?)
* SortableJS (New Technology)

### Desired Functionality
* Collaborative use between different user's on project boards
* Drag and drop functionality with posts/tasks, changing board to board
* Multiple in depth options for post/task content (i.e. comment's, checklists, due dates, assigned users etc)
* Login required for collaboration and save, otherwise not neccessary
* Professional appearance 
* Responsive UI

### Next Level Extra's
* Notification's for new task assignment's, completions etc
* Notification option's (could use email or text notifications)
* Tutorial for first time users (think similar to GitHub) 
* Templates for project boards (seeded information)
* Light / Dark switch
* Logo / Branding designs
* Alert's of completed tasks etc

### Difficulties / Uncharted Territories
* Updating for multiples user's 
* Login authentication's, how to store the information
* Drag and Drop Functionality
* HandleBars Frame
* Project Scope


If group is on board, task's need to be discussed and assigned based on priority.

---
Day - 1 
(Jesse - backend routing focus / willing to bounce around)
(Mitch - backend / db focus)
(Mike - flex)
(Anthony - frontend, html + handlebars focus)

## Tasks 
### Day 1 - Early Priorities
<!-- * Wire Framing, keeping mobile friendly in mind *(Mike - before class) -->
* HTML frame of project board, simple styling (Anthony)
* HTML frame of the home board (Anthony)
* Early stages of styling / theme selection w/ responsiveness in mind (bulma *css) (Anthony/Mike)
* Appending + Fetching relevant data to create the project boards using assets/index.js (Mike)
<!-- * Model mapping (Users, Projects, Cards, Posts, Comments) *(Mitch) -->
<!-- * API Routing (Jesse) -->
<!-- * Create server.js *(Mitch) -->

### Day 2 - Functionality Assesments
First take time to regroup, assess where we are currently and what everyone is working on. 
Then discuss what we want to accomplish by class or before day 3. 
Finally remind everyone to pull down, then break off and start working.

FRONTEND (Anthony / Mike)
* HTML BUTTON's (LOG IN / SIGN UP) and respective forms finished by end of class. (Anthony)
* HTML (handlebars) page for homepage/main near completetion (Anthony)
* HTML (handlebars) page for the rendered project boards presenting sample data (Mike)
* assets/script.js or assets/drag-n-drop.js file updating route positions OnEND() and near working by end of class (Mike) 
* Implement early Drag and Drop functionality (Mike)
* Add routes for handlebars routing to pages (Mike)

BACKEND (Jesse / Mitchell)
* Heroku settup(Mike, early priority)
* Fixing controllers/api/index.js (Jesse, first priority)
* Create simple seed files, for functionality assessment (Mitchell + Jesse)
* Debugging / testing routes (Mitchell + Jesse)
* If finished early, move on to day 3 work 

BY Day 3 we should have the project page displaying through handlebars(with seeded information), application deployed onto heroku, all completed routes tested + debugged and a semi-finished homepage displaying early log-in and sign-up information.


### Day 3 - Functionality Completion, Login/Auth
FRONTEND 
* Handlebars user page (Anthony)
* Project board view finished and drag-n-drop functionality working as expected (Mike)
* Create forms to create project boards, cards, tasks and task information (Anyone)

BACKEND (Jesse / Mitchell)
* Create user login's, cookies and properly encrypt information
* Create the functionality of sharing cards with other users (i.e. pushing updated boards to all users involved)


### Day 4/5 - Debugging, ReAssessing
Access where we are, what we have left to complete and what extra functionalities we would like to include

FRONTEND
* Finish styling for completed work
* Finish all responsiveness / neccesary media queries
* Look into mobile friendly options to incorporate such as hamburger nav menu's

BACKEND
* Test and complete all routing 
* Thouroughly debug 
* Thouroughly seed project starter template/s

TIME PERMITTING
* Add google oauth
* Create Light/Dark switch
* Look at setting up notifications, or a tutorial on how to use.

### Day 6 - Presentation 

---

### DB models
* Table/Model's: User's, Boards(Project Boards), Cards (ToDo, InProgress, etc), Task's(post's)

#### User's Columns/Elements
* ID(PK)
* Email
* Password (Encrypted using bcrypt)
* Username (Email or pick your own, tbd)

#### Board's Columns/Elements
* ID (PK)
* Name
* User ID's (need to think of how to give user's access to specific project boards)

#### Card's Columns/Elements
* ID (PK) 
* Title
* Position
* Board ID (FK)

#### Task's(Posts) Columns/Elements
* ID (PK)
* Title
* Comments/Descriptions
* Position
* Card ID (FK)







## Resources
[Bulma Install](https://bulma.io/documentation/customize/with-webpack/)

[Bulma Doc's](https://bulma.io/documentation/)

[Drag and Drop tutorial](https://www.youtube.com/watch?v=OHTudicK7nY)

[MVP Goal / reference](https://kanbanflow.com/)

[Simple WireFrame](https://docs.google.com/presentation/d/1TeOepEL9TuoyOichqtosXRYTOqUkCyeTl7oAkW3Yi5U/edit?usp=sharing)
