/*
CREATE TABLE 
	bookings_calculation
AS
SELECT 
	booked_for
FROM
	bookings
WHERE 
	apartment_id = 93;

ALTER TABLE
	bookings_calculation
ADD COLUMN multiplication NUMERIC,
ADD COLUMN modulo NUMERIC;

UPDATE
	bookings_calculation
SET
	multiplication = booked_for * 50,
	modulo = booked_for % 50;
*/
-- Initial try in three steps, can be done within one query

CREATE TABLE 
	bookings_calculation
AS
SELECT
	booked_for,
	(booked_for * 50)::NUMERIC AS multiplication,  -- both approaches work
	CAST(booked_for % 50 AS  NUMERIC) AS modulo    -- might be more explicit
FROM 
	bookings
WHERE 
	apartment_id = 93;
