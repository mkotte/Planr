USE project_db

CREATE TABLE task(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    email VARCHAR (30) NOT NULL,
    password VARCHAR(30) NOT NULL, 
)

INSERT INTO task(id, username, email, password)
VALUES(1, "jrutter", "jrutter@email.email", "jrpassword!"), (2, "mschimmoeller", "mschimmoeller@email.com", "mspassword@"), (3, "mkotte", "mkotte@email.email", "mkpassword#"), (4, "adecapite", "adecapite@email.email", "adpassword$")