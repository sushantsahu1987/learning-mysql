CREATE TABLE User (
    ID INT AUTO_INCREMENT, 
    Name VARCHAR(50) NOT NULL, 
    Gender VARCHAR(1) NOT NULL,
    PRIMARY KEY(ID)    
);

ALTER TABLE User AUTO_INCREMENT=100;

INSERT INTO User(Name, Gender) VALUES ('Sushant', 'M');
INSERT INTO User(Name, Gender) VALUES ('Khushboo', 'F');
INSERT INTO User(Name, Gender) VALUES ('Saurav', 'M');