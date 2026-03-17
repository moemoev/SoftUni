SELECT
	latitude,
	ROUND(latitude, 2),
	TRUNC(latitude, 2)
FROM
	apartments;

-- playing around ...

SELECT
	latitude,
	ROUND(latitude, 2) AS round,
	TRUNC(latitude, 2) AS trunc,
	CASE
		WHEN ROUND(latitude, 2) = TRUNC(latitude, 2) THEN true::BOOLEAN
		ELSE false::BOOLEAN
	END AS "round = trunc"
FROM
	apartments;