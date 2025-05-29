# Angular

Download [nvm](https://stackoverflow.com/questions/8191459/how-do-i-update-node-js)

Update node

```shell
nvm list available
nvm install 22.16.0
```

```shell
npm install -g @angular/cli
ng new angular-hello-world
ng serve --open
ng build
ng test
```

Possible to be used later

```shell
ng generate component home-page
ng gnerate service product
```

```angular
    <ul>
        <li *ngFor="let product of products">
            {{product}}
        </li>
    </ul>
```

Module that has ```root``` will be created in one instance
```
@Injectable({
   providedIn: 'root'
})

```
