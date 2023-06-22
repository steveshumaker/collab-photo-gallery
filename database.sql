CREATE TABLE pictures (
"id" serial primary key,
"path" varchar(200),
"description" varchar(200),
"likes" integer
);

INSERT INTO pictures (path, description, likes)
VALUES ('https://i.ibb.co/J3dWWKP/goat-small.jpg', 'A goat in the wild', 0),
		('https://i.ibb.co/XJbGfb0/harley.jpg', 'Santas elf', 0),
		('https://i.ibb.co/GWLD31s/iceland.jpg', 'Northern Iceland!', 0),
		('https://i.ibb.co/T28nJ5f/prague.jpg', 'The Astronomical Clock of Prague', 0);


SELECT * FROM pictures;

DROP TABLE pictures;