SELECT 
	SUBSTRING(description FROM 5)
FROM 
	currencies;

----
-- compare right() and substring()
----

SELECT
	RIGHT(description, -4) AS right,
	SUBSTRING(description, 5) AS substring
FROM
	currencies;