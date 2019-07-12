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
```bash
$ node -v
$ npm -v
$ ng --version (angular CLI)
$ tsc -v
$ tsc --help
```

### MOC API: JSON Server
```
Install: $ npm install -g json-server
Start: $ json-server --watch db.json
Localhost: http://localhost:3000/posts
```
* Clone: https://github.com/shahedbd/jsonServer


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
```bash
$ git clone https://github.com/johnpapa/angular-tour-of-heroes.git toh
$ cd toh
$ npm i or npm start
$ npm audit fix
```

### Search, filter, order and pagination.
```bash
npm install bootstrap --save
npm i ng2-search-filter --save
npm install ng2-order-pipe --save
npm install ngx-pagination --save
```
* Ref: https://ciphertrick.com/search-sort-pagination-angular/


### Project CRUD UI
![CRUD UI](https://github.com/shahedbd/ng7Practice/blob/master/src/ProjectNotes/MainUI.png "CRUD UI")



### Generic Service
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GenericService {
  apiName: string;
  baseurl = env.api;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.baseurl + this.apiName);
  }

  getById(id) {
    return this.http.get(this.baseurl + this.apiName + '/' + id);
  }

  createNew(body): Observable<any> {
    console.log(this.apiName);
    console.log(this.baseurl + this.apiName);
    return this.http.post(this.baseurl + this.apiName, body);
  }

  update(id, body) {
    this.http.put(`${this.baseurl + this.apiName}/${id}`, body)
      .subscribe(res => console.log('Updated. ID: ' + id));
  }

  deleteById(id) {
    return this.http.delete(this.baseurl + this.apiName + '/' + id)
      .subscribe(res => console.log('Deleted. ID: ' + id));
  }
}

```


### NgxMatSelectSearch 
* https://stackblitz.com/github/bithost-gmbh/ngx-mat-select-search-example?file=src%2Fapp%2Fapp.component.html
* https://www.npmjs.com/package/ngx-mat-select-search


### Export to
* https://www.npmjs.com/package/ngx-export-as
* ng build ngx-export-as

* https://www.npmjs.com/package/jspdf
* npm install jspdf --save
* https://github.com/simonbengtsson/jsPDF-AutoTable
* https://github.com/MrRio/jsPDF

### PDF Viewer
* https://github.com/VadimDez/ng2-pdf-viewer

### User Registration: 
https://stackblitz.com/edit/angular-2-5-registration-login-example?file=app%2F_directives%2Falert.component.html

### Hide Navbar Menu from Login page
https://loiane.com/2017/08/angular-hide-navbar-login-page/

### Local Storage
https://medium.com/@tiagovalverde/how-to-save-your-app-state-in-localstorage-with-angular-ce3f49362e31





