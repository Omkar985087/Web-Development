##how to setup tailwind css

step 1:run the following command 

```
npm install -D tailwindcss
npx tailwind init
```
step 2:update tailwind.config.js file to include this line

```
content["*.html"]
```
step 3:create src/input.css to innclude

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
step 4:include the src/output.css file to your html

step 5:run the following command

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```