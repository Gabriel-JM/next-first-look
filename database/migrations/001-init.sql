-- Up

create table person (
  id integer primary key autoincrement,
  name text,
  email text,
  password text
);

create table vehicle (
  id integer primary key autoincrement,
  brand text,
  model text,
  ownerId integer references person(id)
);

-- Down
drop table person;
drop table vehicle;
