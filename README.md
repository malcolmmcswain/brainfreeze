# brAInfreeze

## Inspiration
For people with busy lifestyles, eating healthy can be extremely challenging. There is a growing population of people in college and universities that skip meals due to financial issues or simply not having the time. As a group of college students who have gone through the hunger pangs of studying ourselves, we created a food storage system that actively tracks inventory and nutrition. From there, the system can recommend and facilitate healthy recipes and eating.

## What it does
brAInfreeze is a smart fridge mobile application that allows users to track and plan their grocery shopping and diet options. When a new object is detected by the fridge camera, it is added to an online database and is visible on the inventory screen in the mobile app. On the recipes tab of the app, recommended recipes will be generated based off of the fridge contents. On the groceries tab, ingredients can be added to a shopping list for future purchase.

## How we built it
The front end of brAInfreeze was built on React.Native, and the back end was implemented in Python. The two systems are bridged by a Firebase Database, which stores all application data. To collect data, a camera was connected to a Raspberry Pi, which runs a Python script for machine learning and database access. Because computer vision is CPU intensive process, the Raspberry Pi was attached to the top of the fridge for additional cooling.The object recognition script was adapted from a pre-trained convolutional neural network that relies on the OpenCV, NumPy, and TensorFlow packages.

## Challenges we ran into
Implementing the database input and output pipelines was the most challenging part of our project. First we were attempting to use mongoDB, but eventually decided on using Firebase. Firebase could be accessed easily from the React.Native front end but was very difficult to connect to the backend Python script. It was also a challenge to configure the output of the machine learning algorithm running on the Raspberry Pi.

## What we learned
We learned more about the syntax and cross implementation of Node.js with Python, how to use and create a database, and how to create and train a neural network via Tensorflow. We also learned how to incorporate computer vision and have the camera identify objects that are put in front of it thanks to the help of the neural network.

## What's next for brAInfreeze
There are multiple added functionalities that we would like to add into the brAInfreeze application. We would like to be able to view individual nutrient information, as well as nutrition information for entire recipes. Additionally, we would like to include expiration dates and app notifications when certain ingredients are running low.
