
INSERT INTO IdentityRoles
VALUES
('B5B8D19F-40A8-4EDB-A438-007E0556F2E2',	'Student'),
('C6924CD6-B1AA-4DD3-9337-259AFB5A4A28',	'Mentor'),
('143067D6-9045-4F7A-83D0-9BEE13A93749',	'Admin');



INSERT INTO IdentityUsers
VALUES
('92679149-0886-4FD3-BB04-66FE96E6C77E', NULL, 'Dobre Ianis', 'ianis@yahoo.com', '0742134088', '10000.Qwlva6qPjMfXot9gGLhYig==.6tV8d99pHpiw0nqWW8ARaYqTi2ytw40N5Owjaewidl0=', '2022-12-27 13:18:09.9697935', 1, 0, 'elev clasa a X-a pasionat de sport si matematica', 'L.T.C.B', 'B5B8D19F-40A8-4EDB-A438-007E0556F2E2'), 
('71855B64-30E2-4227-AFC9-F4521A941E9A', NULL, 'jeff smith', 'pat@example1.com', '1234567890', '10000.SMGQ+fVojFnHGr3Z5N2tHw==./H5wLX12FxpdNNQLbvW45HWmZTz/c7YkPBRzxkFD+p8=', '2023-01-16 19:05:57.3224430', 1, 0, 'biooo', 'Unibuc', 'C6924CD6-B1AA-4DD3-9337-259AFB5A4A28');



INSERT INTO Adresses
VALUES
('5634A72E-2CF8-4CB0-8D04-9BDC3EDED063',	'Bucuresti',	'Bucuresti',	'Liviu Rebreanu nr 40',	'71855B64-30E2-4227-AFC9-F4521A941E9A'),
('48E65DA7-C950-4B47-BBC4-981DD398AE90',	'Dabuleni',	'Dolj',	'S.V.39',	'92679149-0886-4FD3-BB04-66FE96E6C77E');








INSERT INTO Mentors
VALUES
('71855B64-30E2-4227-AFC9-F4521A941E9A',	0x10101010101010,	0x10101010101010);





INSERT INTO Students
VALUES
('92679149-0886-4FD3-BB04-66FE96E6C77E',	12, 'mate info L.G.S.');	



-- INSERT INTO Matches
-- VALUES
-- ('71855B64-30E2-4227-AFC9-F4521A941E9A',	'92679149-0886-4FD3-BB04-66FE96E6C77E',	'2022-12-27 21:56:41.2956587',	'Waiting');



INSERT INTO Reviews
VALUES
('CD439BB8-22C7-4F1A-B69F-A82144F03AAA',	'Meditatiile au decurs peste asteptari',	4,	'71855B64-30E2-4227-AFC9-F4521A941E9A',	'92679149-0886-4FD3-BB04-66FE96E6C77E',	'ReviewMentor');

