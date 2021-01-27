-- Up

create table person (
  id integer primary key autoincrement,
  name text,
  email text
);

create table vehicle (
  id integer primary key autoincrement,
  brand text,
  model text,
  ownerId integer references person(id)
);

insert into person(name, email) values ('Gabriel', 'gabriel@email.com');
insert into person(name, email) values ('Bruno', 'bruno@email.com');

insert into vehicle(brand, model, ownerId) values ('Audi', 'R8', 1);
insert into vehicle(brand, model, ownerId) values ('Mercedes', 'Benz', 2);

-- Down
drop table person;
drop table vehicle;
