SELECT
	peak_name,
	LEFT(peak_name, 4) AS positive_left, -- Include the first 4
	LEFT(peak_name, -4)AS negative_left -- Exclude the last 4
FROM
	peaks;