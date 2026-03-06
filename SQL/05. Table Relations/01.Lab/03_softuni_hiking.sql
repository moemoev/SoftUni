SELECT
	R.start_point,
	R.end_point,
	R.leader_id,
	CONCAT(C.first_name, ' ', C.last_name) AS leader_name
FROM
	routes As R
JOIN
	campers AS C
ON
	C.id = R.leader_id;