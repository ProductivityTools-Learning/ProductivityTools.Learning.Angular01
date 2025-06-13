# Angular

Download [nvm](https://stackoverflow.com/questions/8191459/how-do-i-update-node-js)

Update node

```shell
nvm list available
nvm install 22.16.0
```

Basic comamnds

```shell
npm install -g @angular/cli
ng new angular-hello-world
ng serve --open
ng build
ng test
```

## Basic concepts

- Module - groups components it is like UserModule, AdminModule. I try like
- Compnent - smaller part (Let us try Module: Pages, component pageslist, pagesdetails)

```shell
ng generate module habits
ng generate component home-page
ng gnerate service product
ng generate directive highlight-price
ng generate pipe pw-uppercase
```

- component - easy
- service - should return data
- directive -*ngFor *ngIf, for example can be used to format data
- pipe - class that transforms data for display in template (UpperCasePipe)
- decorator - allows to do aspect programming like logging
- module contains all connected elements (product, person, shared)

```angular
<ul>
  <li *ngFor="let product of products">
    {{ product }}
  </li>
</ul>
```

Module that has `root` will be created in one instance

```
@Injectable({
   providedIn: 'root'
})

```

## Page tutorial

```
ng generate module habits
ng generate component habits\habit-list
remove content of the app.html
ng generate service habits
```


## Typescript

```shell
npm install typescript --save-dev
tsc input.ts
```

```ts
function greet(name: string): string {
  return “Hello, “ + name;
}
````

```ts
interface Person{
    name: string;
    age: number;
}

let person: Person={
    name:"Pawel",
    age:8
}
```

- notice the public property
- both last name constructs are equivalent


```ts
class Animal {
  public name: string = "Unknown";
  public lastname: string | undefined;
  public lastname?: string

  constructor(name: string) {
    this.name = name;
  }
}
let animal = new Animal("Leo");
```

inheritance
```ts
class Dog extends Animal {

}
```

- interface could inherit from other interface
- interface can be used as an annotation for variable
```ts
interface Person{
    name: string;
    age: number;
}

let person: Person{
    name:"Pawel",
    age:8
}

class student implements Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name=name;
        this.age=age;
    }
}
```

Modules

- we can create the file with class, function, variable and export it
- notice the export keyword
```ts
export const pi=3;

export function add(a: number, b: number): number{
    return a+b;
}

export Class Person{
    name: string;
}

in different file:
import * as pwmodule from ./module

module.pi;
```

## Lifecycle Hoooks

- ngOnChanges 
    - invoked when input properties change
    -  does not detect change of the object property
- ngOnInit
- DoCheck 
    - when property is changed within component
    - detect change of the object property