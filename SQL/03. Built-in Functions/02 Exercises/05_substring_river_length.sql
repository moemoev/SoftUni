SELECT 
	(REGEXP_MATCHES("River Information" ,'([0-9]{1,4})'))[1]     -- returns first match of all matches
    --REGEXP_MATCHES("River Information" ,'([0-9]{1,4})'),       -- returns alls matches '{match1, match2, ...., matchn}'
	--SUBSTRING("River Information" ,'([0-9]{1,4})')             -- returns only the first match
FROM 
	view_river_info;