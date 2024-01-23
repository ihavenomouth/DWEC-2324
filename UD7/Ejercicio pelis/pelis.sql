CREATE TABLE IF NOT EXISTS gente (
  gente_id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  esactor INTEGER NOT NULL DEFAULT 0,
  esdirector INTEGER NOT NULL DEFAULT 0
);

INSERT INTO gente (nombre, esactor, esdirector) VALUES
('Jim Carrey', 1, 0),
('Tom Shadyac', 0, 1),
('Lawrence Kasdan', 0, 1),
('Kevin Kline', 1, 0),
('Ron Livingston', 1, 0),
('Mike Judge', 0, 1),
('Macaulay Culkin', 1, 0),
('Chris Columbus', 0, 1),
('Jason James Richter', 1, 0),
('Simon Wincer', 0, 1),
('Val Kilmer', 1, 0),
('Antony Hoffman', 0, 1);


CREATE TABLE IF NOT EXISTS tipos_peli (
  tipo_id INTEGER PRIMARY KEY AUTOINCREMENT,
  label TEXT NOT NULL
);


INSERT INTO tipos_peli (label) VALUES
('Sci Fi'),
('Drama'),
('Adventure'),
('War'),
('Comedy'),
('Horror'),
('Action'),
('Kids');




CREATE TABLE IF NOT EXISTS peliculas (
  peli_id INTEGER PRIMARY KEY AUTOINCREMENT,
  peli_nombre TEXT NOT NULL,
  peli_tipo INTEGER NOT NULL DEFAULT 0,
  peli_anno INTEGER NOT NULL DEFAULT 0,
  peli_actor_principal INTEGER unsigned NOT NULL DEFAULT 0,
  peli_director INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY(peli_director) REFERENCES gente(gente_id),
  FOREIGN KEY(peli_actor_principal) REFERENCES gente(gente_id),
  FOREIGN KEY(peli_tipo) REFERENCES tipos_peli(tipo_id)
);

INSERT INTO peliculas (peli_nombre, peli_tipo, peli_anno, peli_actor_principal, peli_director) VALUES
('Bruce Almighty', 5, 2014, 1, 2),
('Office Space', 5, 1999, 5, 6),
('Grand Canyon', 2, 1991, 4, 3),
('Liberad a Willy', 8, 1993, 9, 10),
('Solo en casa', 8, 1990, 7, 8),
('Planeta Rojo', 1, 2000, 11, 12);




