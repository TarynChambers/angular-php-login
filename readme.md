build system was setup using yeoman generator-gulp-angular
https://github.com/Swiip/generator-gulp-angular

- Install node

- Install required tools gulp and bower:

> npm install -g gulp bower

to setup sample database:
import inventory.sql into phpmysql to create mysql database(inventory) with table(users).

browse to root project directory.

run these commands
- npm install
- bower install
- gulp build

to view the site go to localhost:(port)/userLogin/dist/
example(http://localhost:1337/userLogin/dist/)

> gulp serve 
this will start the site in the browser with browserSync but will not be able to connnect to the database. to view the site with the database and php support:

start xammp with mysql running then
in the browser go to localhost:(port)/userLogin/dist/
example(http://localhost:1337/userLogin/dist/)
