# SETUP

npm i typescript --save-dev &&   
npx tsc --init &&
npm i tslint --save-dev &&
npx tslint --init &&
npm i -D jest @types/jest ts-node --save-dev &&
npm i -D @swc/jest @swc/cli @swc/core 

npx jest --init

✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … yes
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … no
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls, instances, contexts and results before every test? … yes

npm i uuid @types/uuid &&
npm i sequelize reflect-metadata sequelize-typescript &&
npm i sqlite3

# AJUSTES

## File: tsconfig.json

```json
{
    ...
	"incremental": true,  
    "outDir": "./dist",	
	...
    "experimentalDecorators": true, 
    "emitDecoratorMetadata": true,  
    "strictNullChecks": false, 
    ...	
    "skipLibCheck": true    
  },
  "include": [
    "src/**/*.ts"
  ],
}
```

## File: jest.config.ts

```ts
const config: Config = {
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },  
...
```

## File: package.json

```js
{
  "devDependencies": {
    ...
  },
  "scripts": {
    "test": "npm run tsc -- --noEmit && jest",
    "tsc": "tsc"
  }
}
```

## File: .swcrc

```json
{
    "jsc": {
        "parser": {
            "syntax": "typescript",
            "decorators": true        
        },
        "transform": {
            "legacyDecorator": true,
            "decoratorMetadata": true
        }
    }
}
```