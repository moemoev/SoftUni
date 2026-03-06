SELECT
	*
FROM
	departments AS D
JOIN 
	employees AS E
ON 
	D.id = E.department_id