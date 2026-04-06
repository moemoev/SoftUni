CREATE TABLE products(
	product_name VARCHAR(100)
);

INSERT INTO 
    products(product_name)
VAlUES
	('Broccoli'),
	('Shampoo'),
	('Toothpaste'),
	('Candy');

ALTER TABLE 
    products
ADD COLUMN 
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY;