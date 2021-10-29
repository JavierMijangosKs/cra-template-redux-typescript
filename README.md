# KS material template using cra-template-redux-typescript

![build status](https://img.shields.io/github/workflow/status/reduxjs/cra-template-redux-typescript/Tests/master?style=flat-square)

KSquare material template with The official Redux+TS template for [Create React App](https://github.com/facebook/create-react-app).

To use this template:

1 Clone or download the repo.

2 Run the cra command

```
npx create-react-app [name of your app] --template file:./cra-template-redux-typescript
```

3 Create a ```.env``` file

```
REACT_APP_API_BASE_URL= http://localhost:8888/api/v1
```

4 Add the next line to the ```tsconfig``` file in the ```compilerOptions``` section

```
"baseUrl": "./src",
```
##
Cloning this repo pulls down the Redux template only; not a bundled and configured Create React App.

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
