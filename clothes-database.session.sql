
--@block
CREATE TABLE Clothing_Item(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    fit ENUM('thight', 'normal', 'loose') NOT NULL,
    length ENUM('short', 'medium', 'long') NOT NULL,
    type VARCHAR(255) NOT NULL,
    imageURL VARCHAR(255) NOT NULL
);

--@block
CREATE TABLE Category(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

--@block
CREATE TABLE Clothing_Category(
    clothing_item_ID INT NOT NULL,
    category_ID INT NOT NULL,
    FOREIGN KEY (clothing_item_ID) REFERENCES Clothing_Item(id),
    FOREIGN KEY (category_ID) REFERENCES Category(id),
    PRIMARY KEY (clothing_item_ID, category_ID)
);

--@block
CREATE TABLE Outfit(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);
--@block
CREATE TABLE Outfit_Item(
    outfit_ID INT NOT NULL,
    clothing_item_ID INT NOT NULL,
    FOREIGN KEY (outfit_ID) REFERENCES Outfit(id),
    FOREIGN KEY (clothing_item_ID) REFERENCES Clothing_Item(id),
    PRIMARY KEY (outfit_ID, clothing_item_ID)
);

--@block
INSERT INTO Category (name)
VALUES (
    'shoes'
);

--@block
INSERT INTO Clothing_item (name, color, fit, length, type, imageURL)
VALUES (
    'helloKittyPyjamaShirt',
    'red',
    'loose',
    'medium',
    'shirt',
    '6.png'
);

--@block
ALTER TABLE Clothing_item
ADD COLUMN tags VARCHAR(255);

--@block
UPDATE Clothing_item
SET imageURL = '14.png'
WHERE id = 14;

--@block
SELECT * FROM Clothing_item;

--@block
INSERT INTO Clothing_item (name, color, fit, length, type, imageURL, tags)
VALUES (
    'ruffleSkirtWithSuspenders',
    'black',
    'normal',
    'medium',
    'ruffle skirt suspenders',
    '18.png',
    'ruffle corset suspenders'
);

--@block
DELETE FROM Clothing_Item WHERE id=21;
DELETE FROM Clothing_Item WHERE id=22;
DELETE FROM Clothing_Item WHERE id=23;
DELETE FROM Clothing_Item WHERE id=24;
DELETE FROM Clothing_Item WHERE id=25;

--@block
DELETE FROM Clothing_Category WHERE category_ID=3;

--@block
INSERT INTO Clothing_Category (clothing_item_ID, category_ID)
VALUES(
    18,
    2
);

--@block
SELECT ci.*
FROM Clothing_Item ci
JOIN Clothing_Category cc ON ci.ID = cc.Clothing_Item_ID
JOIN Category c ON cc.Category_ID = c.ID
WHERE c.Name = 'top';

--@block
SELECT MAX(id) AS lastid FROM clothing_item;