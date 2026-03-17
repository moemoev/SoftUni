--------
-- Both approaches work, using build in function left() matches the topic of the lecture, 'LIKE' is preferred
--------
SELECT 
	title
FROM 
	books
WHERE 
	left(title, 3) = 'The'
ORDER BY 
	id ASC;



SELECT 
	title
FROM
	books
WHERE
	TITLE like 'The %'
ORDER BY
	id ASC;
