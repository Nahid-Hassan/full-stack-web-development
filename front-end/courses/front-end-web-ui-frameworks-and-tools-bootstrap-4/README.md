# Front-End Web UI Frameworks and Tools: Bootstrap 4

## Table of Contents

- [Front-End Web UI Frameworks and Tools: Bootstrap 4](#front-end-web-ui-frameworks-and-tools-bootstrap-4)
  - [Table of Contents](#table-of-contents)
    - [Week-1: Front-End Web UI Frameworks Overview: Bootstrap](#week-1-front-end-web-ui-frameworks-overview-bootstrap)

### Week-1: Front-End Web UI Frameworks Overview: Bootstrap

- What is Full Stack Developer
- Basic Git: `init`, `status`, `commit`, `checkout`, `reset`

Add remote repository

```shell
# git remote add origin <remote_repository_url>
> git remote add origin https://github.com/Nahid-Hassan/full-stack-web-development.git
```

**More on Git**: `clone`, `remote add origin`

- Install Node.js

**Basic Node.js and NPM(Node Package Manager)**:

`Set up package.json` file in the project folder for configuring your Node and NPM for this project

- Install a NPM module and make use of it within your project
- Initializing package.json

At the command prompt in your git-test folder, type

```shell
npm init
```

- Follow along the prompts and answer the questions as follows: accept the default values for most of the entries, except set the entry point to index.html
- This should create a package.json file in your git-test folder.

`Installing an NPM Module`

- Install an NPM module, lite-server, that allows you to run a Node.js based development web server and serve up your project files. To do this, type the following at the prompt:

```shell
npm install lite-server --save-dev
```

- Next, open package.json in your editor and modify it as shown below.

```json
{
  "name": "git-test",
  "version": "1.0.0",
  "description": "This is the Git and Node basic learning project",
  "main": "index.html",
  "scripts": {
    "start": "npm run lite",
    "test": "echo \"Error: no test specified\" && exit 1",
    "lite": "lite-server"
  },
```

Next, `start the development server` by typing the following at the prompt:

```shell
npm start
```

- This should open your `index.html` page in your default browser.
- If you now open the index.html page in an editor and make changes and save, the browser should immediately refresh to reflect the changes.

`Setting up .gitignore`

- Next, create a file in your project directory named .gitignore (Note: the name starts with a period)Then, add the following to the .gitignore file

```vim
node_modules
```

- Then do a git commit and push the changes to the online repository. You will note that the node_modules folder will not be added to the commit, and will not be uploaded to the repository.

**Additional Resources**:

Additional Resources (Git)

- Git site http://git-scm.com.
- Installing Git chapter from Pro Git
- Git reference manual
- Quick reference guides: GitHub Cheat Sheet (PDF)  |  Visual Git Cheat Sheet (SVG | PNG)
- Atlassian comprehensive Git tutorial

Additional Resources (Node.js and NPM)

- Nodejs.org
- Npmjs.com
- Node API Documentation
- NPM Documentation
- lite-server
