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
- ngAfterContentInit
- ngAfterContentChecked - not sure
- ngAfterViewInit  - not sure
- ngAfterViewChecked - not sure
- ngOnDestroy
- DestroyRef - not sure what is the difference, this can be injected, right now I do not understand the difference

### DoCheck

Do check implementation is more complex.

It invokes when one of the property of the object that was passed by reference to the child changes. 
For example we pass user to the child compoenent from master and we change the name of this user. 

```ts
constructor(private differs: KeyValueDiffers) {
    this.differ = this.differs.find({}).create();
  }
  ngDoCheck(): void {
    console.log("ngDoCheck called");
    const changes = this.differ.diff(this.user);
    if (changes) {
      changes.forEachChangedItem((item: { key: any; previousValue: AnalyserNode; currentValue: any }) => {
        console.log("property", item.key, "changed from", item.previousValue, "to", item.currentValue);
      })

    }
  }
```

### ngAfterContentInit
You could create the parent component, child component. Child component can reference elements from the inner html of the child component
(in child we are using ```ng-content```)

Parent
```ts
<app-custom-panel-component><div #header>xx</div></app-custom-panel-component>
```
Child:
```ts
export class CustomPanelComponent implements AfterContentInit {

@ContentChild('header') headerElement: ElementRef | undefined;
```
```
<div clas="panel">
    <ng-content></ng-content>
</div>
```
ngAfterContentInit alows to invoke code after the parent values will be initiated. 

