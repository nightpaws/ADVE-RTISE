CREATE TABLE Account (
  id       INT(11)      NOT NULL AUTO_INCREMENT,
  website  VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  year     DATETIME     NOT NULL,
  enabled  TINYINT      NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE AccountMessages (
  id        INT(11) NOT NULL AUTO_INCREMENT,
  Accountid INT(11) NOT NULL,
  Messageid INT(11) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE Class (
  id          INT(11)      NOT NULL AUTO_INCREMENT,
  code        VARCHAR(255) NOT NULL UNIQUE,
  description VARCHAR(255) NOT NULL,
  year        INT(11)      NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE ClassStaff (
  id      INT(11) NOT NULL AUTO_INCREMENT,
  Staffid INT(11) NOT NULL,
  Classid INT(11) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE ClassStudent (
  id        INT(11) NOT NULL AUTO_INCREMENT,
  Studentid INT(11) NOT NULL,
  Classid   INT(11) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE Message (
  id      INT(11)      NOT NULL AUTO_INCREMENT,
  subject VARCHAR(255) NOT NULL,
  message TEXT,
  `date`  DATETIME     NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE Staff (
  id       INT(11)      NOT NULL AUTO_INCREMENT,
  forename VARCHAR(255) NOT NULL,
  surname  VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL UNIQUE,
  mail     VARCHAR(255) NOT NULL UNIQUE,
  active   DATETIME     NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE Student (
  id         INT(11)           NOT NULL AUTO_INCREMENT,
  forename   VARCHAR(255)      NOT NULL,
  surname    VARCHAR(255)      NOT NULL,
  username   VARCHAR(255)      NOT NULL UNIQUE,
  regnum     INT(11)           NOT NULL UNIQUE,
  mail       VARCHAR(255)      NOT NULL UNIQUE,
  active     DATETIME          NOT NULL,
  subscribed TINYINT DEFAULT 0 NOT NULL,
  PRIMARY KEY (id)
);
ALTER TABLE AccountMessages ADD INDEX FKAccountMes944452 (Accountid), ADD CONSTRAINT FKAccountMes944452 FOREIGN KEY (Accountid) REFERENCES Account (id);
ALTER TABLE AccountMessages ADD INDEX FKAccountMes653056 (Messageid), ADD CONSTRAINT FKAccountMes653056 FOREIGN KEY (Messageid) REFERENCES Message (id);
ALTER TABLE ClassStudent ADD INDEX FKClassStude673879 (Studentid), ADD CONSTRAINT FKClassStude673879 FOREIGN KEY (Studentid) REFERENCES Student (id);
ALTER TABLE ClassStudent ADD INDEX FKClassStude284209 (Classid), ADD CONSTRAINT FKClassStude284209 FOREIGN KEY (Classid) REFERENCES Class (id);
ALTER TABLE ClassStaff ADD INDEX FKClassStaff393057 (Staffid), ADD CONSTRAINT FKClassStaff393057 FOREIGN KEY (Staffid) REFERENCES Staff (id);
ALTER TABLE ClassStaff ADD INDEX FKClassStaff413189 (Classid), ADD CONSTRAINT FKClassStaff413189 FOREIGN KEY (Classid) REFERENCES Class (id);
