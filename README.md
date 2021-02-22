Group 13 Final Project

Set Up Instructions:

First, navigate to project page: https://github.com/ChrisTheBrave/inst377-project-group-13.

Click "Fork" button in the top right corner of your screen.

Once you've forked the repo to your page, click the "Code" button and clone the repo so you can have it on your machine locally.

In your terminal, type `git remote -v` to check that origin points to forked version.

We will be utilizing the `fork-and-branch` gitflow for this project.

Once the project is on your local machine, create a remote pointing back to the original repository (the one you forked on GitHub). In your terminal type `git remote add upstream https://github.com/ChrisTheBrave/inst377-project-group-13.git`

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

Before you start coding, create a separate line of changes (a “branch”) that is independent from the main line. This will ensure no changes are made to main and additional changes will be made via pull request.

The git branching flow is as follows:
1. Create and checkout a feature branch.
2. Make changes to the files.
3. Commit and push your changes to the branch.

Create a branch by typing in your terminal `git checkout -b <new branch name>` ***(Example `git remote -b file-tree`)***

Use `git add` and `git commit` as you usually would to make changes to your branch. 

Remember branches are for small changes. Please don't revamp the entire app on your branch or we all gonna have a hard time lol

To push your branch, in your terminal type `git push <origin> <new-feature>` ***(Example `git push origin file-tree`)***

Note: The generic form of this command is `git push <remote> <branch>`. In this case, you’re pushing changes in the new-feature branch to the origin remote.

Once you have pushed your branch, open a pull request on github for your feature to be reviewed and merged into main.

