SELECT 
	continent_name,
	RTRIM(continent_name)
	-- TRIM(TRAILING FROM continent_name) -> same effect, prefere upper version
FROM
	continents;