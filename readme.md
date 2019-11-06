Overview
--------
The application has been written in Angular Js and Type Script. The application has been tested and works in latest version of browsers: Chrome, Firefox, Opera and IE Edge.


Application architecture
--------
The application consists of 2 components: cart component and products component, that communicate with each other using the data service. 
Each of the components has its own controller. The application also has a service - products service, that keep data used by the application. 
Local storage is used to save the status of the shopping cart.


Running the application
----------------------------------------
You need to have latest version of Node installed on your local machine.

1. Clone repository (master branch) locally.
2. CD to project root and run `npm install`.
3. Run web server by using the following command: `npm start`.
4. Application will be accessible by the following address: `http://localhost:8000/`.
5. You can also open file index.html in project root.