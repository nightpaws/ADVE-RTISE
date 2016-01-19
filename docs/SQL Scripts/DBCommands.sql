-- SELECT STATEMENTS
SELECT id, website, username, password, year, enabled FROM Account;
SELECT id, Accountid, Messageid FROM AccountMessages;
SELECT id, code, description, year FROM Class;
SELECT id, Staffid, Classid FROM ClassStaff;
SELECT id, Studentid, Classid FROM ClassStudent;
SELECT id, subject, message, `date` FROM Message;
SELECT id, forename, surname, username, mail, active FROM Staff;
SELECT id, forename, surname, username, regnum, mail, active, subscribed FROM Student;

-- INSERT STATEMENTS
INSERT INTO Account(id, website, username, password, year, enabled) VALUES (?, ?, ?, ?, ?, ?);
INSERT INTO AccountMessages(id, Accountid, Messageid) VALUES (?, ?, ?);
INSERT INTO Class(id, code, description, year) VALUES (?, ?, ?, ?);
INSERT INTO ClassStaff(id, Staffid, Classid) VALUES (?, ?, ?);
INSERT INTO ClassStudent(id, Studentid, Classid) VALUES (?, ?, ?);
INSERT INTO Message(id, subject, message, `date`) VALUES (?, ?, ?, ?);
INSERT INTO Staff(id, forename, surname, username, mail, active) VALUES (?, ?, ?, ?, ?, ?);
INSERT INTO Student(id, forename, surname, username, regnum, mail, active, subscribed) VALUES (?, ?, ?, ?, ?, ?, ?, ?);

-- UPDATE STATEMENTS
UPDATE Account SET website = ?, username = ?, password = ?, year = ?, enabled = ? WHERE id = ?;
UPDATE AccountMessages SET Accountid = ?, Messageid = ? WHERE id = ?;
UPDATE Class SET code = ?, description = ?, year = ? WHERE id = ?;
UPDATE ClassStaff SET Staffid = ?, Classid = ? WHERE id = ?;
UPDATE ClassStudent SET Studentid = ?, Classid = ? WHERE id = ?;
UPDATE Message SET subject = ?, message = ?, `date` = ? WHERE id = ?;
UPDATE Staff SET forename = ?, surname = ?, username = ?, mail = ?, active = ? WHERE id = ?;
UPDATE Student SET forename = ?, surname = ?, username = ?, regnum = ?, mail = ?, active = ?, subscribed = ? WHERE id = ?;

-- DELETE STATEMENTS
DELETE FROM Account WHERE id = ?;
DELETE FROM AccountMessages WHERE id = ?;
DELETE FROM Class WHERE id = ?;
DELETE FROM ClassStaff WHERE id = ?;
DELETE FROM ClassStudent WHERE id = ?;
DELETE FROM Message WHERE id = ?;
DELETE FROM Staff WHERE id = ?;
DELETE FROM Student WHERE id = ?;
