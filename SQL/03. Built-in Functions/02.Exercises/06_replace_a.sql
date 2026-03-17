SELECT
	REPLACE(mountain_range, 'a', '@') AS repalce_a,
	REPLACE(mountain_range, 'A', '$') AS repalce_A     -- REPLACE() is case-sensitive!
FROm
	mountains;