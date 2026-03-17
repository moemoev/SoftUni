SELECT
	peak_name,
	RIGHT(peak_name, 4) AS positive_right, -- Include the last 4
	RIGHT(peak_name, -4) As negative_right -- Exclude the last 4
FROM
	peaks;