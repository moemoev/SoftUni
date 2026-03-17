SELECT
	population,
	-- LENGTH(CAST(population AS VARCHAR)) AS "length",
	LENGTH(population::VARCHAR) AS length_2
FROM
	countries;