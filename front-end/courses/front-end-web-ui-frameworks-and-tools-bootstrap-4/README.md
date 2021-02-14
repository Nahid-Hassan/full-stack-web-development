# Front-End Web UI Frameworks and Tools: Bootstrap 4

## Table of Contents

- [Front-End Web UI Frameworks and Tools: Bootstrap 4](#front-end-web-ui-frameworks-and-tools-bootstrap-4)
  - [Table of Contents](#table-of-contents)
    - [Week-1: Front-End Web UI Frameworks Overview: Bootstrap](#week-1-front-end-web-ui-frameworks-overview-bootstrap)
      - [Basic Node.js and NPM(Node Package Manager)](#basic-nodejs-and-npmnode-package-manager)
      - [Additional Resources](#additional-resources)
      - [Exercise: Getting Started with Bootstrap](#exercise-getting-started-with-bootstrap)

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

#### Basic Node.js and NPM(Node Package Manager)

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

#### Additional Resources

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

#### Exercise: Getting Started with Bootstrap

**Exercise Resources**:

[Bootstrap4-starter.zip][1]

**Setting up the Project Folder**:

- Go to a convenient folder location on your computer and download the Bootstrap4-starter.zip file using the link provided at the top of this page.
- Unzip the file to see a folder named Bootstrap4 and a sub-folder under it named conFusion created. Move to the conFusion folder.
- Open a cmd window/terminal and move to the conFusion folder.
- At the prompt type

```shell
npm install
```

- This will install the lite-server node module to your project.
- Next, initialize a Git repository in the project folder, and then set up a .gitignore file with the contents as shown below:

```shell
node_modules
```

- Now do a commit of your project folder to the Git repository with the message "Initial Setup". You will be doing a commit of your project at the end of each exercise so that you retain the completed files of each exercise.
- Set up an online Git repository and synchronize your project folder with the online repository.

**Downloading Bootstrap**:

- You will use npm to fetch the Bootstrap files for use within your project. Thereafter you need to install JQuery and Popper.js as shown below since Bootstrap 4 depends on these two. At the prompt, type the following to fetch Bootstrap files to your project folder:

```shell
npm install bootstrap@4.0.0 --save
npm install jquery@3.3.1 popper.js@1.12.9 --save
```

- This will fetch the Bootstrap files and store is in your node_modules folder in a bootstrap folder. The bootstrap->dist folder contains the precompiled Bootstrap CSS and JS files for use within your project.
- Open your project folder in your editor, and then open the index.html file in the conFusion folder. This is your starting web page for the project. We have already created the web page with some content to get you started. We will use Bootstrap to style this web page, and learn Bootstrap features, classes and components along the way.
- Start your lite-server by typing npm start at the prompt. The index.html file should now be loaded into your default browser.

**Getting your Web page Bootstrap ready**:

- Open the index.html file in your favorites text editor. If you are using Visual Studio Code, Brackets, Sublime Text or similar editors, you can open the project folder in the editor and then view index.html.
- Insert the following code in the `<head>` of `index.html` file before the title.

```html
    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
```

- This will include Bootstrap CSS into your web page. Note the subtle change in the fonts of the content of the web page. This is the Bootstrap typography effect coming into play. The default Bootstrap typography sets the font to Helvetica Neue and selects the appropriate font size based on the choice of the heading style and paragraph style for the content.
- At the bottom of the page, just before the end of the body tag, add the following code to include the JQuery library, popper.js library and Bootstrap's Javascript plugins. Bootstrap by default uses the JQuery Javascript library for its Javascript plugins. Hence the need to include JQuery library in the web page.

```html
    <!-- jQuery first, then Popper.js, then Bootstrap JS. -->
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
```

- Now, do a Git commit with the message "Intro. to Bootstrap". You may push the commit to your online repository.



<!-- Addition urls-->
[1]: https://d3c33hcgiwev3.cloudfront.net/bOGnMCzEEeiTdA5yoE99Fg_6da6f2f02cc411e8b484f7e801bd0278_Bootstrap4-starter.zip?Expires=1613347200Signature=U4i4k~3q8OKzEJoFksadMLCLlganxQTShNnawNcVTSKG9x92~M7A5Jj2MG8zY~u6Mjq88wRKpJ37FNd-NpQQsUFtr1ffQVaN4g5TXe0yTA48deubXzpB825XtNGVAS0u2YXEsJuK3OfG2Kf63Y18mKDAgt8H4b10wDLw6DFwZY4_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A
