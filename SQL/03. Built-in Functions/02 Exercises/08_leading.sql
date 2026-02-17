SELECT 
	continent_name,
	LTRIM(continent_name)
	-- TRIM(LEADING FROM continent_name) -> same effect, prefere upper version
FROM
	continents;