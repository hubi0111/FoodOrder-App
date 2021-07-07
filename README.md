# Food order Application

This application is a simplified a food ordering system. It provides the functionalities for admin users to add, update, and delete new menu items.

## Programming Languages and Tools

- Maven Spring Boot backend
- Angular Frontend
- MySQL Database
- Eclipse
- VS Code

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

Service oriented architecture (SOA) and microservices are used in Java backend design. Java spring boot is a natural selection to be used for the backend to achieve this purpose. Spring boot is useful because it allows developers to start coding right away. Using tools like Spring Tools Suite, developers do not have to waste time on preparing and configuring the environment. Furthermore, Spring boot provides flexible XML configurations, robust batch processing, database transactions, easy workflow, along with a wide variety of tools for development.

### Module Based Design

A modular approach separates tasks and objectives, so that different aspects can be worked on and improved independently. Furthermore, by taking a modular approach, we can reuse these modules if needed. The modules used in this application are below.

- User Module
- Food Module
- Shopping Module

#### User Module

The User Module is responsible for managing the users in our application. Each time a user is created, either through registration or by an admin, the user will get stored in the database. Depending on what role our user has in the program (either admin or user) they will have different access levels. To keep it simple, each user will only have 3 properties to store in the database.

- Username: String
- Password: String
- Role: String

##### Authentication &amp; Authorization

This project uses simple database username/password authentication and role based authorization.

#### Food Module

The food module is responsible for managing food menu items. To keep it simple, each item has 3 properties.

- Name: String
- Pic\_byte: blob
- Price: Number

#### Ordering Module

The ordering module is the actual food ordering part of the application. It directly uses the Food Module to get all the foods from the database. It then displays these foods. When a user is ready to checkout, an order item is created. Each order has the following structure.

- Items: blob
- Name: String
- Price: Number
