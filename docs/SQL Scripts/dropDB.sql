ALTER TABLE AccountMessages DROP FOREIGN KEY FKAccountMes944452;
ALTER TABLE AccountMessages DROP FOREIGN KEY FKAccountMes653056;
ALTER TABLE ClassStudent DROP FOREIGN KEY FKClassStude673879;
ALTER TABLE ClassStudent DROP FOREIGN KEY FKClassStude284209;
ALTER TABLE ClassStaff DROP FOREIGN KEY FKClassStaff393057;
ALTER TABLE ClassStaff DROP FOREIGN KEY FKClassStaff413189;
DROP TABLE IF EXISTS Account;
DROP TABLE IF EXISTS AccountMessages;
DROP TABLE IF EXISTS Class;
DROP TABLE IF EXISTS ClassStaff;
DROP TABLE IF EXISTS ClassStudent;
DROP TABLE IF EXISTS Message;
DROP TABLE IF EXISTS Staff;
DROP TABLE IF EXISTS Student;
