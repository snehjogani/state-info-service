## User State Info Service
    CSCI5410 Serverless Data Processing Assignment 2

#### Developement Requirements

For development, you will only need Node.js and a node global package, Npm, installed in your environement.

#### Node
- ##### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- ##### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- ##### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following commands.

    $ node --version
    v12.16.1

    $ npm --version
    6.13.4

If you need to update `npm`, just run the following command.

    $ npm install npm -g


### Setting up the service

    $ git clone https://github.com/snehjogani/registration-service.git
    $ cd registration-service
    $ npm install

### Running the service

    $ npm start
