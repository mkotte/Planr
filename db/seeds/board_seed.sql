USE project_db

CREATE TABLE board (
    id INT NOT NULL AUTO_INCREMENT,
    boardName VARCHAR(100) NOT NULL,
    userID VARCHAR(100) NOT NULL,
    PRIMARY KEY  (id)
);

INSERT INTO board (id, boardName, userID)
VALUES (0, "Name0", "User0"), (1, "Name0", "User0"), (2, "Name0", "User0");