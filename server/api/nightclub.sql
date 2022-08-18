DROP table if EXISTS nightclub CASCADE;

CREATE TABLE nightclub (
    id  varchar(30) PRIMARY KEY NOT NULL,
    name VARCHAR(30) not null,
    location varchar(30) not null,
    genre varchar(30) not null,
    yellowcap smallint not null default 40,
    redcap smallint not null default 50
);


INSERT INTO nightclub(id, name, location, genre, yellowcap, redcap)	
VALUES ('Arcane', 'Club Arcane', 'London', 'Garage', 70, 100),
        ('Studio52', 'Studio 52', 'Berlin', 'Techno', 32, 52),
        ('Underground', 'Club Underground', 'New York City', 'Drum ''n'' Bass', 30, 50),
        ('Soda', 'Club Soda', 'Chicago', 'House', 12, 20);

