DROP TABLE IF EXISTS mountains;

DROP TABLE IF EXISTS peaks;

CREATE TABLE mountains(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(50)
);


CREATE TABLE peaks(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(50),
	mountain_id INT,
	CONSTRAINT fk_mountain_id
		FOREIGN KEY (mountain_id)
		REFERENCES mountains(id) ON DELETE CASCADE
);


---------------------
-- even though judge does not care for the order, PGADMIN does because of the dependency of the constraint
-- delete child, then parent!

DROP TABLE IF EXISTS peaks;

DROP TABLE IF EXISTS mountains;

CREATE TABLE mountains(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(50)
);

CREATE TABLE peaks(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(50),
	mountain_id INT,

	CONSTRAINT fk_mountain_id
		FOREIGN KEY(mountain_id)
		REFERENCES mountains(id)
		ON DELETE CASCADE
);