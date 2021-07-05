# Food order Application

This application serves as a template for a food ordering system. It will help restaurants do all their functionalities more accurately and efficiently as many restaurants do this in a manual way. Users will register and log in to the system then place an order from the menu of the restaurant the app will manage all the processes of taking the order, payment, and process the order. The admin can add and edit food items.

## Programming Languages and Tools

Languages:

- While the functionalities of out program can be performed by any language, here, we will use Java as the main programming language. In particular, we will be creating a Maven Project with Spring Boot to manage our program.
- We will be using Angular for our frontend. For this project, Angular CLI was used to generate components and services. It is also used to start out program. Angular CLI can be installed below.

Database:

- To store data in a database, I will be using MySQL. MySQL will be used to store the data of all users, food&#39;s, and orders.

IDE:

- Eclipse will be used as an IDE to code in. It is very convenient for coding in java and allows for easier development.
- Spring Tool Suite. STS is a convenient way to generate a maven spring project.
- VS Code. Frontend

All installation links can be found below.

[https://angular.io/cli](https://angular.io/cli)

[https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/)

[https://www.eclipse.org/downloads/](https://www.eclipse.org/downloads/)

[https://spring.io/tools](https://spring.io/tools)

[https://code.visualstudio.com/download](https://code.visualstudio.com/download)

## Design

### Front-end

As previously mentioned, the front-end of this project was constructed using angular. Using a component-based approach, we can create individual components that work separately and combine them together when they all work. By using the Angular CLI, component templates can be made and then customized to the specifications needed.

### Back-end

Java spring boot is used for the backend. Spring boot is useful because it allows developers to start coding right away. Using tools like Spring Tools Suite, developers do not have to waste time on preparing and configuring the environment. Furthermore, Spring boot provides flexible XML configurations, robust batch processing, database transactions, easy workflow, along with a wide variety of tools for development.

### Modules

This design of this project can be divided into 3 main modules. The reason why we are using a modular approach is that it separates tasks and objectives, so that different aspects can be worked on and improved independently. Furthermore, by taking a modular approach, we can reuse these modules if needed. The modules used in this application are below.

- User Module
- Food Module
- Shopping Module

#### User Module

The User Module is responsible for managing the users in our application. Each time a user is created, either through registration or by an admin, the user will get stored in the database. Depending on what role our user has in the program (either admin or user) they will have different access levels. For simplicity reasons, each user will only have 3 properties to store in the database.

- Username: String
- Password: String
- Role: String

##### Authentication &amp; Authorization

This project only uses the username/password form of authentication. When a user logs in with their credentials, we store their user details in the browser&#39;s local storage, which acts as a session. Then, whenever someone tries to access a page, we retrieve the user details and authorize them.

#### Food Module

The food module is responsible for managing what food&#39;s can be ordered in our application. We use a similar storage method to the User Module; however, we must also store an image, which will be serialized as a byte array and then stored in the database as a blob. Each food will have the following structure.

- Name: String
- Pic\_byte: blob
- Price: Number

#### Shopping Module

The shopping module is what most users will interact with. It is the actual food ordering part of the application. The Shopping Module directly uses the Food Module to get all the foods from the database. It then displays these foods to be added to the cart. When a user is ready to checkout, an order item is created. This order item is then sent to the database to be stored for administrative purposes. Each order has the following structure.

- Items: blob
- Name: String
- Price: Number
