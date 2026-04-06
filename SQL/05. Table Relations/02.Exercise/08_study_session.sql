CREATE TABLE IF NOT EXISTS students(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	student_name VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS exams(
	id INT GENERATED ALWAYS AS IDENTITY (START WITH 101 INCREMENT BY 1)PRIMARY KEY,
	exam_name VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS study_halls(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	study_hall_name VARCHAR(50),
	exam_id INT,
	CONSTRAINT fk_study_hall_exams
		FOREIGN KEY(exam_id)
		REFERENCES exams(id)
);

CREATE TABLE IF NOT EXISTS students_exams(
	student_id INT,
	exam_id INT,
	CONSTRAINT pk_students_exams PRIMARY KEY(student_id, exam_id),
	CONSTRAINT fk_students_exams_students
		FOREIGN KEY(student_id)
		REFERENCES students(id),
	CONSTRAINT fk_students_exams_exams
		FOREIGN KEY(exam_id)
		REFERENCES exams(id)
);

-- Insert students
INSERT INTO students(student_name) VALUES
    ('Mila'),
    ('Toni'),
    ('Ron');

-- Insert exams (IDs will be 100, 101, 102)
INSERT INTO exams(exam_name) VALUES
    ('Python Advanced'),
    ('Python OOP'),
    ('PostgreSQL');

-- Insert study halls
INSERT INTO study_halls(study_hall_name, exam_id) VALUES
    ('Open Source Hall', 102),
    ('Inspiration Hall', 101),
    ('Creative Hall', 103),
    ('Masterclass Hall', 103),
    ('Information Security Hall', 103);

-- Insert student-exam relations
INSERT INTO students_exams(student_id, exam_id) VALUES
    (1, 101),
    (1, 102),
    (2, 101),
    (3, 103),
    (2, 102),
    (2, 103);
