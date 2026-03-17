SELECT
	REPLACE(title, left(title, 3), '***')
AS title
FROM
	books
WHERE left(title, 3) = 'The';


---------

SELECT
	CONCAT_WS(' ', '***', right(title, -4))
FROM
	books
WHERE
	left(title, 4) = 'The ';