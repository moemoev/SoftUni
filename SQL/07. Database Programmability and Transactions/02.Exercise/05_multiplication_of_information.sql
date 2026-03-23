SELECT
	b.booking_id,
	c.first_name
FROM
	bookings AS b
CROSS JOIN
	customers AS c

-- just a showcase to show what CROSS JOINS do, think twice before using this 