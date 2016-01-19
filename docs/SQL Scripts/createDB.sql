CREATE TABLE Account (
  id       int(11) NOT NULL AUTO_INCREMENT, 
  website  varchar(255) NOT NULL, 
  username varchar(255) NOT NULL, 
  password varchar(255) NOT NULL, 
  year     datetime NOT NULL, 
  enabled  tinyint NOT NULL, 
  PRIMARY KEY (id), 
  INDEX (id));
CREATE TABLE AccountMessages (
  id        int(11) NOT NULL AUTO_INCREMENT, 
  Accountid int(11) NOT NULL, 
  Messageid int(11) NOT NULL, 
  PRIMARY KEY (id));
CREATE TABLE Class (
  id          int(11) NOT NULL AUTO_INCREMENT, 
  code        varchar(255) NOT NULL UNIQUE, 
  description varchar(255) NOT NULL, 
  year        int(11) NOT NULL, 
  PRIMARY KEY (id));
CREATE TABLE ClassStaff (
  id      int(11) NOT NULL AUTO_INCREMENT, 
  Staffid int(11) NOT NULL, 
  Classid int(11) NOT NULL, 
  PRIMARY KEY (id));
CREATE TABLE ClassStudent (
  id        int(11) NOT NULL AUTO_INCREMENT, 
  Studentid int(11) NOT NULL, 
  Classid   int(11) NOT NULL, 
  PRIMARY KEY (id));
CREATE TABLE Message (
  id      int(11) NOT NULL AUTO_INCREMENT, 
  subject varchar(255) NOT NULL, 
  message text, 
  `date`  datetime NOT NULL, 
  PRIMARY KEY (id));
CREATE TABLE Staff (
  id       int(11) NOT NULL AUTO_INCREMENT, 
  forename varchar(255) NOT NULL, 
  surname  varchar(255) NOT NULL, 
  username varchar(255) NOT NULL UNIQUE, 
  mail     varchar(255) NOT NULL UNIQUE, 
  active   datetime NOT NULL, 
  PRIMARY KEY (id));
CREATE TABLE Student (
  id         int(11) NOT NULL AUTO_INCREMENT, 
  forename   varchar(255) NOT NULL, 
  surname    varchar(255) NOT NULL, 
  username   varchar(255) NOT NULL UNIQUE, 
  regnum     int(11) NOT NULL UNIQUE, 
  mail       varchar(255) NOT NULL UNIQUE, 
  active     datetime NOT NULL, 
  subscribed tinyint DEFAULT 0 NOT NULL, 
  PRIMARY KEY (id));
ALTER TABLE AccountMessages ADD INDEX FKAccountMes944452 (Accountid), ADD CONSTRAINT FKAccountMes944452 FOREIGN KEY (Accountid) REFERENCES Account (id);
ALTER TABLE AccountMessages ADD INDEX FKAccountMes653056 (Messageid), ADD CONSTRAINT FKAccountMes653056 FOREIGN KEY (Messageid) REFERENCES Message (id);
ALTER TABLE ClassStudent ADD INDEX FKClassStude673879 (Studentid), ADD CONSTRAINT FKClassStude673879 FOREIGN KEY (Studentid) REFERENCES Student (id);
ALTER TABLE ClassStudent ADD INDEX FKClassStude284209 (Classid), ADD CONSTRAINT FKClassStude284209 FOREIGN KEY (Classid) REFERENCES Class (id);
ALTER TABLE ClassStaff ADD INDEX FKClassStaff393057 (Staffid), ADD CONSTRAINT FKClassStaff393057 FOREIGN KEY (Staffid) REFERENCES Staff (id);
ALTER TABLE ClassStaff ADD INDEX FKClassStaff413189 (Classid), ADD CONSTRAINT FKClassStaff413189 FOREIGN KEY (Classid) REFERENCES Class (id);
