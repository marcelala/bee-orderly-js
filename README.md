# EIKA- React Shopping List

## Overview

EIKA is a React.js single page web application where users can input an item's information and add it to their shopping list.
The app can be visited by clicking [here](https://react-list-eika.web.app/).\
<br/>

---
---
<br/>

## Table of Contents
<br/>

- [Overview](#overview)
- [Specification](#specification)
- [Project Organisation](#project-organisation)
- [How to run the project](#how-to-run-the-project)
- [Dependencies](#dependencies-&-tools-used)
- [Attributions](#attributions-&-helpful-links)
  <br/>

---
---
<br/>

## Specification
<br/>

The goal of this project was to build a simple single page application to enable the user to create a shopping-list using React.
<br/>

---
---
<br/>

## Project Organisation
<br/>

### Component tree
The UI component tree allows to visualize the different parts of the application.
<br/>

![UI component tree](./public/planning/ui-components.png)
<br/>

The `Item` and `ItemForm` components can been seen in more detail below.
<br/>

![Item Component]()
<br/>

![Item Form]()
<br/>
<br/>

-----

<br/>

### Hierarchy diagram
<br/>

This diagram was drawn to make it easier to comprehend the relationships between the components and the global state.
<br/>
<br/>

![Hierarchy Diagram]()

<br/>

The global state was managed in this appication by React's Context API and useReducer hook. the diagram below displays the reducer methods.

<br/>

![State Management]()

<br/>

----
----

<br/>

## How to run the project

<br/>

To run the project in the **development mode**, follow the instructions below:

Download or clone the repository in your computer:

```
$ git clone https://github.com/marcelala/shopping-list.git
```

In the repository folder:

- install project dependencies with

```
npm install
```

- start the development server with

```
npm start
```

- open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To run the project in the **production mode**, use this command intstead:

```
npm run build
```
<br/>

----
----

<br/>

## Dependencies & Tools Used

<br/>


- As a project generated with `create-react-app`, it includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency.
- The project setup also uses [Webpack](https://webpack.js.org/) for handling all assets, as Webpack offers a custom way of “extending” the concept of `import` beyond JavaScript.
- [SASS](https://github.com/sass/sass) Sassy CSS for styling
- [Firebase](https://firebase.google.com/) for hosting the application.

<br/>

## DevDependencies

<br/>

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [SASS](https://github.com/sass/sass)
- [Jest](https://jestjs.io/)

<br/>

-----
-----

<br/>

## Attributions & Helpful Links

<br/>

- This project was developed by Marcela Felix Fortis mentored by [Eduardo Alvarez](https://github.com/elalienx) with support from [Novare Potential]().
- Noto Sans font is by from Google Fonts.
- All icons by FontAwesome [(Creative Commons Attribution 4.0 International license)](https://fontawesome.com/license).
- Images from Unsplash.
- The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). For more information on how to perform common tasks, visit [this page](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
