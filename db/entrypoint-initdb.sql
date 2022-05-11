CREATE TABLE Transaction (
    ID INT AUTO_INCREMENT, 
    Description VARCHAR(50) NOT NULL, 
    Price INT NOT NULL,
    isDeleted BIT DEFAULT 0, 
    PRIMARY KEY(ID)    
);

ALTER TABLE Transaction AUTO_INCREMENT=100;

INSERT INTO Transaction(Description, Price) VALUES ('Receipt 1', 11.22);
INSERT INTO Transaction(Description, Price) VALUES ('Receipt 2', 22.12);
INSERT INTO Transaction(Description, Price) VALUES ('Receipt 3', 9.80);
INSERT INTO Transaction(Description, Price) VALUES ('Receipt 4', 19.90);
INSERT INTO Transaction(Description, Price) VALUES ('Receipt 5', 22.11);
INSERT INTO Transaction(Description, Price) VALUES ('Receipt 6', 33.90);
INSERT INTO Transaction(Description, Price) VALUES ('Receipt 7', 11.11);