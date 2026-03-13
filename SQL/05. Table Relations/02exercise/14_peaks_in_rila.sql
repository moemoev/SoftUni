SELECT 
	M.mountain_range,
	p.peak_name,
	P.elevation
FROM 
	peaks AS P
JOIN
	mountains AS M
ON 
	P.mountain_id = M.id
WHERE 
	M.mountain_range = 'Rila'
ORDER BY
	elevation DESC;