CREATE VIEW
	view_continents_countries_currencies_details
AS
SELECT
	CONCAT_WS(': ',TRIM(CON.continent_name),CON.continent_code) AS continent_details,
	CONCAT_WS(' - ', COU.country_name, COU.capital, COU.area_in_sq_km, 'km2') AS country_information,
	CONCAT(CUR.description, ' ', '(', CUR.currency_code, ')') AS currencies
FROM
	continents AS CON
JOIN 
	countries COU
ON
	CON.continent_code = COU.continent_code
JOIN
	currencies AS CUR
ON 
	COU.currency_code = CUR.currency_code
ORDER BY
	country_information ASC,
	currencies ASC;