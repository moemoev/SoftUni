CREATE TABLE minions_birthdays (
	id SERIAL Primary KEY,
	name VARCHAR(50) DEFAULT '',
	date_of_birth DATE NOT NULL,
	age INT CHECK(age >= 0),
	present VARCHAR(100) DEFAULT '',
	party TIMESTAMPTZ 
	-- constraints for judge not neccessary, still wanted some
);