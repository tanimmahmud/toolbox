--
-- Note: Using the DATETIME data type is better than TIMESTAMP, because TIMESTAMP only covers 1970 to 2037.
-- Unfortunately, it is not possible to use the MySQL NOW() function to assign a default value to a DATETIME field (see http://bugs.mysql.com/bug.php?id=27645).
--

CREATE TABLE `people` (
  `pid`   int(11)      NOT NULL auto_increment,
  `jid`   int(11)      NOT NULL,
  `name`  varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `bio`   text         NOT NULL,
  `date`  datetime     NOT NULL,
  primary key(`pid`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `jobs` (
  `jid`         int(11)      NOT NULL auto_increment,
  `title`       varchar(100) NOT NULL,
  `description` text         NOT NULL,
  primary key(`jid`)
) DEFAULT CHARSET=utf8;

INSERT INTO people (`pid`, `jid`, `name`, `email`, `bio`, `date`) VALUES
(1, 2, 'Jimmy', 'jimmy@jones.com', 'This is my bio.', '2006-04-06 13:06:13'),
(2, 3, 'Kenny', 'kenny@hello.net', 'I like grilled cheese sandwiches.', '2010-08-07 15:43:22'),
(3, 1, 'Susan', 'susan@website.org', 'I am a Harvard PHD with an expensive sports car.', NOW());

INSERT INTO jobs (`jid`, `title`, `description`) VALUES
(1, 'Architect', 'Responsible for designing buildings.'),
(2, 'Web Developer', 'Also known as Code Monkey.'),
(3, 'Master Chef', 'Responsible for cooking delicious meals.');