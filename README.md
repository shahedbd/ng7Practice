# Angular 7 Practice Examples

## Installation
* NodeJS:<br /> 
https://nodejs.org/en/
* IDE/Code Editor: VS Code <br /> https://code.visualstudio.com/

```bash
Install Typescript:
$ sudo npm install -g typescript

Install npm:
$ npm install npm@latest -g

Install angula CLI: 
$ npm uninstall -g @angular/cli
$ npm cache verify
$ npm cache clean
$ npm install -g @angular/cli
```
### Check Version
```
$ node -v
$ npm -v
$ ng --version (angular CLI)
$ tsc -v
$ tsc --help
```
### Format Code
* ⇧⌥F


### Tutorials:
* Typescript: https://www.typescriptlang.org/docs/handbook/basic-types.html <br />
https://github.com/shahedbd/TypeScriptBasic
* Angular: https://angular.io/tutorial/toh-pt0
* Mock JSON API: https://github.com/shahedbd/jsonServer
* Video Tutorials:
https://www.youtube.com/watch?v=q256X6-u9Q8&index=8&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ


## Create New Project
```bash
$ ng new ng7Practice
$ cd ng7Practice
$ ng serve --open
* Go to: http://localhost:4200/

* Kill port: kill -2 $(lsof -t -i:4200)
```

## Install Bootstrap
```bash
$ npm install bootstrap --save

* Initialize: add it inside the angular.json file
"styles": [
   "src/styles.css",
   "./node_modules/bootstrap/dist/css/bootstrap.min.css"
 ],
```

## Angular CLI Useful Commands:
```bash
$ ng g component my-new-component
$ ng g directive my-new-directive
$ ng g pipe my-new-pipe
$ ng g service my-new-service
$ ng g class my-new-class
$ ng g guard my-new-guard
$ ng g interface my-new-interface
$ ng g enum my-new-enum
$ ng g module my-module

* Shortcut: 
$ ng g c my-new-component
```

## Run project from github:
```
$ git clone https://github.com/johnpapa/angular-tour-of-heroes.git toh
$ cd toh
$ npm i
$ npm audit fix
```


