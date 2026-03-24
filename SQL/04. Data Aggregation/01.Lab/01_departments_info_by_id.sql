SELECT
	department_id,
	COUNT(*) AS employee_count
FROM
	employees
GROUP BY
	department_id
ORDER BY 
	department_id ASC;

-------------------------------------

SELECT
	department_id,
	COUNT(id) AS employee_count
FROM
	employees
GROUP BY 
	department_id
ORDER BY 
	department_id ASC;


-- As long as there are no Table Aggregations (JOINS) counting rows (*) and counting primary keys, which by definition are not null,
-- will net the same result. COUNT(*) might be more explicit for "count rows"