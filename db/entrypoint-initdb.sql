CREATE TABLE Transaction (
    ID INT AUTO_INCREMENT, 
    Description VARCHAR(50) NOT NULL, 
    Price FLOAT NOT NULL,
    Category VARCHAR(25) NOT NULL,
    isDeleted BIT DEFAULT 0, 
    PRIMARY KEY(ID)    
);

ALTER TABLE Transaction AUTO_INCREMENT=100;

INSERT INTO Transaction(Description, Price, Category) VALUES ('Receipt 1', 11.22, 'Grocery');
INSERT INTO Transaction(Description, Price, Category) VALUES ('Receipt 2', 22.12, 'Cash');
INSERT INTO Transaction(Description, Price, Category) VALUES ('Receipt 3', 9.80, 'Grocery');
INSERT INTO Transaction(Description, Price, Category) VALUES ('Receipt 4', 19.90, 'Dining');
INSERT INTO Transaction(Description, Price, Category) VALUES ('Receipt 5', 22.11, 'Dining');
INSERT INTO Transaction(Description, Price, Category) VALUES ('Receipt 6', 33.90, 'Maintenance');
INSERT INTO Transaction(Description, Price, Category) VALUES ('Receipt 7', 11.11, 'Fuel');
INSERT INTO Transaction(Description, Price, Category) VALUES ('Receipt 7', 2678, 'Pet');