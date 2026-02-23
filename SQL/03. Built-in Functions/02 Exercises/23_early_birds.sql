ALTER TABLE 
	bookings
ADD COLUMN 
	early_birds INTERVAL;
	

UPDATE
	bookings
SET
	early_birds = AGE(starts_at, booked_at);
	

SELECT 
	id,
	early_birds
FROM 
	bookings
WHERE 
	(starts_at - booked_at) >= '10 months';