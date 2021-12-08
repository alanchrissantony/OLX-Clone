<h1 align="center">OLX<h1/>

# Virtual-Market


## Table of contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Run](#run)
- [Technology](#technology)
- [Features](#features)
- [Database Models](#database)
- [Customize Project](#customize)

## Introduction

A virtual market website using React and Firebase.

NOTE: Please read the RUN section before opening an issue.

## Demo

<p align="center">
<img src="https://imgur.com/qQ5XWf2.jpg"/>
<img src="https://imgur.com/207BRe5.jpg"/>
<img src="https://imgur.com/WcJSECF.jpg"/>
<img src="https://imgur.com/5nmuQWV.jpg"/>
<img src="https://imgur.com/imWsn0a.jpg"/>
<img src="https://imgur.com/C98EiNd.jpg"/>
<img src="https://imgur.com/r5h3ixj.jpg"/>
<img src="https://imgur.com/PwDGSu6.jpg"/>
</p>


The website resembles a real marketplace and you can sell or buy products.


## Run


- FIREBASE_URI: this is the connection string of your Firebase database.

Now you can run "npm start" in the terminal and the application should work.

## Technology

The application is built with:

- React version 17.0.2
- Firebase version 8.4.3
- Webpack version 4.42.0
- Bootstrap version 4.4.1
- FontAwesome version 5.13.0


## Features

The application displays a virtual marketplace that contains virtual products and contact information.

Users can do the following:

- Create an account, login or logout
- Browse available products added by the sellers
- Add products to the platform, a user must be logged in
- Display the product
- The product contains contact information of the seller



## Database

All the models can be found in the models directory created using firebase.

### User:

- username (String)
- password (String)


### Product:

- title (String)
- imagePath (String)
- description (String)
- price (Number)
- category (ObjectId - a reference to the category)
- createdAt (Date)


  
### Create Ad:
  
- user (User must be logged in)
- title (Title of the product)
- image (Image of the product)
- description (Discription of the product)
- price (Price of the product)
- category (Category of the product)
  

### Buy:

- product (ObjectId - a reference to the product)
- contact (The product contains contact information of the seller)
  
  
## Database

You can use or customize this project by changing firebaseConfig on `src/Firebase/config.js`.  

[Alan Chriss Antony](https://github.com/alanchrissantony)
