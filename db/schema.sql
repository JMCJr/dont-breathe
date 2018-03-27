-- \c dont_breathe

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  password_digest VARCHAR NOT NULL,
  counter INTEGER
);

DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  com_text VARCHAR(255),
  city VARCHAR(255),
  air_qual VARCHAR(255),
  user_id INTEGER REFERENCES users
);