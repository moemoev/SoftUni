SELECT
	department_id,
	AVG(salary) AS avg_salary
FROM
	employees
GROUP BY
	department_id
ORDER BY 
	department_id ASC;

-------------------------
-- Do not round when transfering, you might loose values, i just did because it looked unpleasant.
-------------------------

SELECT
	department_id,
	ROUND(AVG(salary), 2) AS avg_salary
FROM
	employees
GROUP BY 
	department_id
ORDER BY 
	department_id;