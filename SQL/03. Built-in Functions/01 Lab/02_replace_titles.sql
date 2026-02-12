SELECT
	REPLACE(title, left(title, 3), '***')
AS title
FROM
	books
WHERE left(title, 3) = 'The';