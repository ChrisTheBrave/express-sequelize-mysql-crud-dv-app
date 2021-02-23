Set Up Instructions:

Click "Fork" button in the top right corner of your screen.

Once you've forked the repo to your page, click the "Code" button and clone the repo so you can have it on your machine locally.

In your terminal, type `git remote -v` to check that origin points to forked version.

We will be utilizing the `fork-and-branch` gitflow for this project.

Once the project is on your local machine, create a remote pointing back to the original repository (the one you forked on GitHub). In your terminal type `git remote add upstream https://github.com/ChrisTheBrave/express-sequelize-mysql-crud-dv-app.git`

Now that you’ve forked a project repository, cloned it down to your local system, and added a Git remote to your clone that points to the original project repository on GitHub, you can start making changes to your local Git repository.

Before you run any of this, make sure you create a new user (other than root) in mysql to handle your database.

CREATING NEW USER IN MYSQL:
**newuser can be whatever you choose and remember IDENTIFIED BY is your password**
First log in as root user like you would normally. Then run code below.

CREAT USER 'newuser'@'localhost' IDENTIFIED BY 'newuser';
GRANT ALL PRIVILEGES ON *.* TO 'newuser'@'localhost';
FLUSH PRIVILEGES;

Then test the new user you created by logging back in
mysql -u newuser -p

SETUP
Create `.env` file at the root of your project, which will be ignored by your .gitignore file so its not uploading your personal data.

In your `.env` file, paste this code with your own configurations for the new user you created:
`PORT=8080`
`DB_HOST=localhost`
`DB_USERNAME=username` username of the user you created
`DB_PASSWORD=password` password for username you created
`DB_NAME=database` name of database we will be using

Run `npm i` to install the required modules for this project.
To start the server run `node server.js`

If your set up is correct, you should see something similar in your terminal:

Server is running on port 8080.

Executing (default): CREATE TABLE IF NOT EXISTS `neighborhoods` (`neighborhood_id` INTEGER auto_increment , `neighborhood_name` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`neighborhood_id`)) ENGINE=InnoDB;

Executing (default): SHOW INDEX FROM `neighborhoods`



