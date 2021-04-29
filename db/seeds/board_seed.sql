USE project_db

CREATE TABLE board (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    userID VARCHAR(100) NOT NULL,
    PRIMARY KEY  (id)
);

INSERT INTO board (id, name, userID)
VALUES (1, "Name1", "User1"), (2, "Name2", "User2"), (2, "Name3", "User3");