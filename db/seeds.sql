-- INSERT INTO tableName (column 1, column 2) VALUES (value for column 1, value for column 2)

INSERT INTO Goals (goalName,  createdAt, updatedAt) VALUES ("Play Piano", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Goals (goalName, createdAt, updatedAt) VALUES ("Learn Spanish",  CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Goals (goalName,  createdAt, updatedAt) VALUES ( "Bake Homemade Bread", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Goals (goalName, createdAt, updatedAt) VALUES ("Learn to Make a Web Page",  CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Goals (goalName, createdAt, updatedAt) VALUES ("Learn to Sing",  CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ("Understand the Clefs and how they correspond to the Keys on the Piano", false,  1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ("Learn how to play the Major and Minor Scales", false,  1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ("Understand and learn how to play Chords", false,  1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ("Learn rhythm, note values, and meter", false,  1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ("Start playing songs", false,  1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ("Studying vocabulary for greetings and daily routine", false,  2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ("Listening to music and watching movies in Spanish", false,  2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ("Studying vocab for people/places/relations", false,  2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ("Studying vocab for verbs/objects/things", false,  2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Writing journal entries in Spanish", false,  2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Reading text in Spanish", false,  2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Conversations with native speakers", false,  2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Scaling and mixing", false,  3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Kneading", false,  3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Fermentation", false,  3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Shaping and Proofing", false,  3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Baking", false,  3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Introduction to the Web", false,  4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Intro to HTML", false,  4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Advanced HTML", false,  4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Intro to CSS", false,  4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "CSS Layout", false,  4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Intro to Javascript", false,  4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Variables and Functions", false,  4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Objects and the DOM", false,  4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Uploading to GitHub", false,  4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Publishing your page", false,  4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Understand the structure of the voice and the body ", false,  5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "How to breathe and support your voice", false,  5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "How to sing the basic vowels A, E, I, O, U", false,  5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Introduce scales switching vowels", false,  5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Basic scales using words", false,  5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Advanced Scales using words", false,  5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO milestones (milestoneName, completed, GoalId, createdAt, updatedAt) VALUES ( "Practice with a simple song", false,  5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO Users (name, email, password, createdAt, updatedAt) VALUES ("Joel", "Joel@gmail.com", "123", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Users (name, email, password, createdAt, updatedAt) VALUES ("Greg", "Greg@gmail.com", "123", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Users (name, email, password, createdAt, updatedAt) VALUES ("Fred", "Fred@gmail.com", "321", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);



