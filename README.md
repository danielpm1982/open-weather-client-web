# open-weather-client
This is a Single Page Application (SPA) REST API Client Web App, created with Node.js, npm, Webpack, Babel, Eslint, Vue-cli, Vue.js, Vue-router, Vuex, Axios, JavaScript ES6+ and TypeScript.

[**Description of this repository**]<br>
This is a Single Page Application (SPA) REST API Client Web App, created with Node.js, npm, Webpack, Babel, Eslint, Vue-cli, Vue.js, Vue-router, Vuex, Axios, JavaScript ES6+ and TypeScript.<br>
The objective of this project is simply to demonstrate how to use these technologies.<br>
This app basically access a REST Weather API Service (OpenWeather :: Current Weather), retrieves the weather info for the requested city and shows to the user.<br>
It is a Single-Page Application (SPA) that runs on the browser.<br>
There is a single and public index HTML page, where the rendered Vue.js views and their respective subcomponents are mounted into, along with their modularized HTML, CSS and TypeScript code (.ts files are compiled to .js files at runtime). Vue.js components are reactive and automatically updatable according to events and data change. The whole app state (data) and reusable accessor methods are easily reachable from all components when centralized into the Vuex store and managed there - both data and logic, as well as the session-based local persistence. Web Services REST API calls are performed through the promise-based Axios HTTP client.<br>

For running this project, you should have Node.js and npm installed globally. As soon as you have that installed, just clone this project locally, go to its root folder and, in your terminal, type:
- "npm install", for installing all needed Node.js modules;
- "npm run serve", for deploying the web app on a local server at: http://localhost:8080/

If you then wanna create a final bundle distro for deploying it somewhere else, type:
- "npm run build".

For a deployed Web version of this project, as a web app (with no Electron):<br>
http://danielpm1982.com/public/open-weather-client/index.html

For a Multi-Platform Desktop version of this app, using Electron.js, Vue.js and TypeScript:<br>
https://github.com/danielpm1982/open-weather-client/releases

For a simpler Desktop version of this project, without Vue.js (with and without TypeScript):<br>
https://github.com/danielpm1982/electronjs-hello-world/releases

This repository is a single-project repo with Git version control.

Some of my repositories are for backup only, each of them being a collection of tens of projects inside one same repo (with no individual version control for each project), and others are single-project repositores (with effective version control for that single project). As a distinction between them, the backup repos are named in uppercase with underscores (e.g. SPRING3) while the single-project ones are named in lowercase with dashes (e.g. springboot2-ac-di).

See all my public repositories at:<br>
https://github.com/danielpm1982?tab=repositories .

[**Copyright© License**]<br>
© 2020 Daniel Pinheiro Maia All Rights Reserved<br>
This GitHub repository - and all code (software) available inside - is exclusively for academic and individual learning purposes, and is **NOT AVAILABLE FOR COMMERCIAL USE**, nor has warranty of any type. You're authorized to fork, clone, run, test, modify, branch and merge it, at your own risk and using your own GitHub account, for individual learning purposes only, but you're **NOT ALLOWED to distribute, sublicense and/or sell copies of the whole or of parts of it** without explicit and written consent from its owner / author. You can fork this repository to your individual account at GitHub, clone it to your personal notebook or PC, analyse, run and test its code, modify and extend it locally or remotely (exclusively at your own GitHub account and as a forked repository), as well as send issues or pull-requests to this parent (original) repository for eventual approval. GitHub is in charge of explicitly showing whom this respository has been forked from. **If you wish to use any of this repository content in any way other than what is expressed above, or publish it anyway or anywhere other than as a forked repository at your own GitHub account, please contact this repository owner / author** using GitHub or the contact info below. For the meaning of the technical terms used at this license, please refer to GitHub documentation, at: <br> https://help.github.com/en/github .

[**Owner and Author of this GitHub Repository**]<br>
Daniel Pinheiro Maia<br>
[danielpm1982.com](http://www.danielpm1982.com)<br>
danielpm1982@gmail.com<br>
[linkedin.com/in/danielpm1982](https://www.linkedin.com/in/danielpm1982)<br>
Brazil<br>
.

