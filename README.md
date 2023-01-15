
# Introduction

**API-IMAGE-PROCESSING** is a project which aims to build an api for serving a website with optimized image and to allow others applications which need images to access that api and use the images.
For that, we _resize_ images according to the name, width and height found in the url that a user will visit for the effective process.


# Setup

- Download the zip file of this project
- Move to the project directory
- Install all dependencies by typing `npm install`
- Run the project by typing the command `npm run test`
- Start the express server by typing `npm run start`
- Visit a url of this form http://localhost:3000/api/images?filename=imagename&width=200&height=300
- Full image will be found in **assets/full** directory
- The differents size of a image will be found in **assets/thumb** directory


# License

This project is **CC license**. So you can download and change anything you want and use it commercial purpose.

# Technologies used

We use node.js, express, typescript, Test Driven Development with jasmine, sharp, supertest, prettier and eslint to build this project.

