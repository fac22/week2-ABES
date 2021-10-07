-- Start a "transaction"
-- if any of the commands inside fail
-- the entire transaction is rolled back
-- so your DB is never left is a half-broken state
BEGIN;

-- Delete existing tables
-- also "cascade" to delete any relations
DROP TABLE IF EXISTS users, blog_posts CASCADE;

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  -- maybe id NOT NULL is not necessary? we left it in to be on the safe side for now
  place_id INTEGER REFERENCES place(id),
  author_id INTEGER REFERENCES user(id) ON DELETE CASCADE,
  heading VARCHAR(50) NOT NULL,
  review TEXT
);

CREATE TABLE place (
  id SERIAL PRIMARY KEY NOT NULL,
  place_name VARCHAR(50) NOT NULL,
  rating INTEGER
);

CREATE TABLE user (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR (30) NOT NULL
  -- to handle username, we need a function: if a user doesn't enter a username --> pretend they entered 'Anonymous'. All non-username reviews are then attached to 'Anonymous' in the user table
);

INSERT INTO reviews (heading, review, place_id, author_id) VALUES
  ('Just OK!', "The service was slow and some of the food had actual poison in it! Otherwise lovely place to eat.", 1, 1)
;

INSERT INTO place (place_name, rating) VALUES 
  ('Picnic in the parc', 3), 
  ('Bringing your own lunch', 5)
;

INSERT INTO user (user) VALUES 
  ('Cyber_granny'),
  ('Anonymous')
;

--  Create tables and define their columns

-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY,
--   username VARCHAR(255) NOT NULL,
--   age INTEGER
-- );

-- CREATE TABLE blog_posts (
--   id SERIAL PRIMARY KEY,
--   user_id INTEGER REFERENCES users(id),
--   text_content TEXT
-- );

-- -- Insert some example data for us to test with

-- INSERT INTO users (username, age) VALUES
--   ('Sery1976', 28),
--   ('Notne1991', 3),
--   ('Moull1990', 41),
--   ('Spont1935', 72),
--   ('Precand', 19)
-- ;

-- INSERT INTO blog_posts (text_content, user_id) VALUES
--   ('Announcing of invitation principles in.', 1),
--   ('Peculiar trifling absolute and wandered yet.', 2),
--   ('Far stairs now coming bed oppose hunted become his.', 3),
--   ('Curabitur arcu quam, imperdiet ac orci ac.', 4),
--   ('Aenean blandit risus sed pellentesque.', 5)
-- ;

-- End the transaction and commit all changes
COMMIT;