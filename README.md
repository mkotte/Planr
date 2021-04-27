<!-- 
# Project Idea
## Project Management System (ex: trello.com)
### Technology To Use
* Bulma -CSS-  (*New Technology / npm package*)
* MYSQl (Sequelize(ORM), + Professional Appearing Seed File's)
* Express (Handlebars.js)
* Node.js (dotenv, bcrypt)
* Heroku, for deployement
* Encryption/Authentication for access (bcrypt, google*?)

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
(Jesse - backend (routing) focus / willing to bounce around)
(Mitch - backend / db focus, preferred)
(Mike - flex)
(Anthony - tbd)

## Tasks 
### Day 1 - Early Priorities
* Wire Framing, keeping mobile friendly in mind *(Mike - before class)
* HTML frame of project board, simple styling (Anthony/Mike)
* HTML frame of the home board (Anthony/Mike)
* Early stages of styling / theme selection w/ responsiveness in mind (bulma *css) (Anthony/Mike)
* Model mapping (Users, Projects, Cards, Posts, Comments) *(Mitch)
* API Routing (Jesse)
* Appending + Fetching relevant data to create the project boards using assets/index.js (Anthony/Mike)
* Create server.js *(Mitch)

### Day 2/3 - Functionality
FRONTEND
* HTML pages, homepage/main and project pages
* Create forms to create project boards, cards, posts and comments (possibly use handlebars.js for cards/posts/comments)
* Implement early Drag and Drop functionality

BACKEND
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
* Seed project starter template/s

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

--> 