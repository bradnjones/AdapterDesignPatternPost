## Build and Run Instructions ##
1 - Ensure that the tsconfig.json file is configured in the root of your project directory.  It should contain the following:

````json
{
    "compilerOptions": {
    "target": "es5"
    },
    "include": [
        "IProducts.ts",
        "ProductsListings.ts",
        "ProductsAdapter.ts",
        "ProductSystem.ts",
      ]
  }
````

2 - Ensure that Node.js is installed on your machine

3 - Install typescript by running the following command from a terminal:

    npm install -g typescript

4 - Compile the Typescript files into JavaScript by running the following command in a terminal:

    tsc -t es5 OnlineShop.ts

5 - Run the compiled JavaScript by running the following command in a terminal:

    node OnlineShop.js

    When you've run it, you should see the following print on the terminal

    <span>Samsung HD TV</span>
    <span>Exercise Bike</span>
    <span>Lenovo ThinkPad</span>
    <span>Broncos Jersey</span>