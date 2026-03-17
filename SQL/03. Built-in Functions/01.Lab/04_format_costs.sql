SELECT 
	title,
	ROUND(cost, 3) AS modified_price
FROM
	books;


SELECT
	title,
	TRUNC(cost, 3) AS modified_price 
FROM 
	books