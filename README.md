# Food order Application

## Getting Started

Clone the repository

```
git clone https://github.com/hubi0111/Menu-App
cd Menu-App
```

Install npm packages

Install the npm packages described in the package.json and verify that it works:

```
cd frontend
npm install
ng start
```

The ng serve command builds (compiles TypeScript and copies assets) the application into dist/, watches for changes to the source files, and runs the project on port 4200.

Shut it down manually with Ctrl-C.

## Programming Languages and Tools

Languages:

- While the functionalities of out program can be performed by any language, here, we will use `Java` as the main programming language. In particular, we will be creating a Maven Project with Spring Boot to manage our program.
- We will be using `Angular` for our frontend. For this project, Angular CLI was used to generate components and services. It is also used to start out program. Angular CLI can be installed below.

Database:

- To store data in a database, I will be using `MySQL`. MySQL will be used to store the data of all users, food&#39;s, and orders.

IDE:

- `Eclipse` will be used as an IDE to code in. It is very convenient for coding in java and allows for easier development.
- `Spring Tool Suite`. STS is a convenient way to generate a maven spring project.
- `VS Code`. Frontend



All installation links can be found below.

[https://angular.io/cli](https://angular.io/cli)

[https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/)

[https://www.eclipse.org/downloads/](https://www.eclipse.org/downloads/)

[https://spring.io/tools](https://spring.io/tools)

[https://code.visualstudio.com/download](https://code.visualstudio.com/download)

## Design

This design of this project can be divided into 3 main modules.

- User Module
- Food Module
- Shopping Module

### User Module

The User Module is responsible for managing the users in our application. Each time a user is created, either through registration or by an admin, the user will get stored in the database. Depending on what role our user has in the program (either admin or user) they will have different access levels. For simplicity reasons, each user will only have 3 properties to store in the database.

- Username: String
- Password: String
- Role: String

#### Authentication &amp; Authorization

This project only uses the username/password form of authentication. When a user logs in with their credentials, we store their user details in the browser&#39;s local storage, which acts as a session. Then, whenever someone tries to access a page, we retrieve the user details and authorize them.

### Food Module

The food module is responsible for managing what food&#39;s can be ordered in our application. We use a similar storage method to the User Module; however, we must also store an image, which will be serialized as a byte array and then stored in the database as a blob. Each food will have the following structure.

- Name: String
- Pic\_byte: blob
- Price: Number

### Shopping Module

The shopping module is what most users will interact with. It is the actual food ordering part of the application. The Shopping Module directly uses the Food Module to get all the foods from the database. It then displays these foods to be added to the cart. When a user is ready to checkout, an order item is created. This order item is then sent to the database to be stored for administrative purposes. Each order has the following structure.

- Items: blob
- Name: String
- Price: Number
