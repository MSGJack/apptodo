CREATE DATABASE new_todo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(225) NOT NULL 
);