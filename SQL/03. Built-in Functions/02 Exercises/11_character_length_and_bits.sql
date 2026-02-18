SELECT
	CONCAT(M.mountain_range, ' ', P.peak_name) AS mountain_information,
	CHAR_LENGTH(CONCAT(M.mountain_range, ' ', P.peak_name)) AS characters_length,
	BIT_LENGTH(CONCAT(M.mountain_range, ' ', P.peak_name)) AS bits_of_a_string
FROM
	mountains AS M
JOIN
	peaks as P
ON
	P.mountain_id = M.id;