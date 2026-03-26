UPDATE
	employees
SET
	job_title = CASE
		WHEN hire_date < '2015-01-16' THEN 'Senior ' || job_title
		WHEN hire_date < '2020-03-04' THEN 'Mid-' || job_title
		ELSE job_title
	END,
	salary = CASE
		WHEN hire_date < '2015-01-16' THEN salary + 2500
		WHEN hire_date < '2020-03-04' THEN salary + 1500
		ELSE salary
	END;


--------------------
-- Looks like Judge want's explicitly to update all rows, was playing around and added a check
-- so no duoble updates occur in case of double execution of querry plus filtering non-affected rows regarding hire-date
--------------------
UPDATE employees
SET job_title = CASE
					WHEN hire_date < DATE '2015-01-16'
						AND job_title NOT LIKE 'Senior %'
						THEN CONCAT('Senior ', job_title)
					WHEN hire_date < DATE '2020-03-04'
						AND job_title NOT LIKE 'Mid-%'
						THEN CONCAT('Mid-', job_title)
					ELSE job_title
				END,
	salary = 	CASE
					WHEN hire_date < DATE '2015-01-16' 
						AND job_title NOT LIKE 'Senior %'
						THEN salary + 2500
					WHEN hire_date < DATE '2020-03-04' 
						AND job_title NOT LIKE 'Mid-%'
						THEN salary + 1500
					ELSE salary
				END 
WHERE 
	hire_date < DATE '2020-03-04'