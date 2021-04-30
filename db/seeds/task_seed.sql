USE project_db

CREATE TABLE task(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    description VARCHAR (200) NOT NULL,
    positionX INT NOT NULL,
    positionY INT NOT NULL,
    card_id INT NOT NULL,
    PRIMARY KEY (id), 
    FOREIGN KEY (card_id) REFERENCES card(id)
)

INSERT INTO task(id, title, description, positionX, positionY, card_id)
VALUES (1,'big-task', 'we do a big task here', 20, 5, 15),(2, 'little task', 'we do a little task here', 5,5,5), (3, 'medium task', 'we do a medium task here', 10, 9, 8), (4, 'woah', 'w0o0o0o0o0o0o0o0o0o0o0o0o0o0o0ah', 0, 1, 0)