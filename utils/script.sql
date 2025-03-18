CREATE TABLE usertype (
    user_type_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE user (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    user_type_id INT NOT NULL,
    FOREIGN KEY (user_type_id) REFERENCES usertype(user_type_id)
);

CREATE TABLE history (
    movement_id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    table_name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES "user"(user_id)
);

CREATE TABLE me (
    me_id SERIAL PRIMARY KEY,
    profile_image VARCHAR(255),
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone_number NUMERIC NOT NULL,
    birth_date DATE NOT NULL
);

CREATE TABLE social (
    social_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    url VARCHAR(255) NOT NULL,
    me_id INT NOT NULL,
    FOREIGN KEY (me_id) REFERENCES me(me_id)
);

CREATE TABLE hobbies (
    hobby_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    me_id INT NOT NULL,
    FOREIGN KEY (me_id) REFERENCES me(me_id)
);

CREATE TABLE professional (
    professional_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    company VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    me_id INT NOT NULL,
    FOREIGN KEY (me_id) REFERENCES me(me_id)
);

CREATE TABLE education (
    education_id SERIAL PRIMARY KEY,
    cycle VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    start_year NUMERIC NOT NULL,
    finish_year NUMERIC,
    school VARCHAR(255) NOT NULL,
    me_id INT NOT NULL,
    FOREIGN KEY (me_id) REFERENCES me(me_id)
);

CREATE TABLE skill_type(
    skill_type_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE skill(
    skill_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    level VARCHAR(255) NOT NULL,
    me_id INT NOT NULL,
    FOREIGN KEY (me_id) REFERENCES me(me_id)
    skill_type_id INT NOT NULL,
    FOREIGN KEY (skill_type_id) REFERENCES skill_type(skill_type_id)
);