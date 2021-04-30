USE project_db;

CREATE TABLE card (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    position INT NOT NULL,
    PRIMARY KEY (id),
    board_id INT NOT NULL,
    FOREIGN KEY(board_id) REFERENCES board(id)
);

INSERT INTO card (id, title, position, board_id)
VALUES (0, "title0", 0, 0), (1, "title1", 1, 1), (2, "title2", 2, 2);