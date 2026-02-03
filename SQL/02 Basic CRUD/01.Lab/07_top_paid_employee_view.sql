CREATE VIEW top_payed_employee
AS
SELECT 
	*
FROM employees
ORDER BY salary DESC
LIMIT 1;

SELECT
	*
FROM top_payed_employee