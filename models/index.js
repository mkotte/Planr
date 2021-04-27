// ### DB models
// Model's: User's, Boards(Project Boards), Cards (ToDo, InProgress, etc), Task's(post's)

// #### User's Columns/Elements
// * ID(PK)
// * Email
// * Password (Encrypted using bcrypt)
// * Username (Email or pick your own, tbd)

// #### Board's Columns/Elements
// * ID (PK)
// * Name
// * User ID's (need to think of how to give user's access to specific project boards)

// #### Card's Columns/Elements
// * ID (PK) 
// * Title
// * Position
// * Board ID (FK)

// #### Task's(Posts) Columns/Elements
// * ID (PK)
// * Title
// * Comments/Descriptions
// * Position
// * Card ID (FK)

// TODO: create, then import models required here

// TODO: declare associations here

// TODO: export module here