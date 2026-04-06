SELECT
	V.driver_id,
	V.vehicle_type,
	CONCAT(C.first_name, ' ', C.last_name) AS driver_name
FROM
	vehicles AS V
JOIN
	campers AS C
ON
	V.driver_id = C.id;

