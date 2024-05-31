# 🚗 CarSale-Website

Welcome to the AI Car Price Predictor! This project leverages artificial intelligence to predict car prices based on user-provided details through a quiz.

## 📝 Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Introduction
Carsale is an innovative web application that helps users determine the price of a car by filling out a quiz. Depending on the answers provided, the website calculates the car price using a trained AI model.

![image](https://github.com/selimboudaga/carsale-website/assets/159728726/2f19175f-04de-4675-b618-b93ff017f909)


## ✨ Features
- **Quiz-Based Price Prediction**: Users can fill out a quiz with details about the car, such as car brand, model,transmission ,interior status, etc.
  - **Medium Quiz**: Contains a moderate number of questions.
  - **Advanced Quiz**: Contains more detailed and numerous questions.
- **AI Model**: Utilizes a `RandomForestRegressor` model to predict car prices.
- **Authentication**: Users can sign up and log in to save and view their quiz results.
- **Data Source**: Car data is scraped from Tunisian car selling websites.
- **Database Management**: Uses MySQL with Prisma ORM.

## 💻 Technologies Used
- **Frontend**: ReactJS, TailwindCSS
- **Backend**: Node.js
- **Database**: MySQL
- **ORM**: Prisma
- **Authentication**: JSON Web Tokens (JWT)
- **AI Model**: RandomForestRegressor


## 🛠️ Installation
To get a local copy up and running, follow these simple steps:

1. **Clone the repository**
    ```bash
    git clone https://github.com/selimboudaga/carsale-website.git
    ```
2. **Navigate to the project directory**
    ```bash
    cd carsale-website
    ```
4. **Install frontend dependencies**
    ```bash
    cd frontend
    npm install
    ```
5. **Install backend dependencies**
    ```bash
    cd ../backend
    npm install
    ```

## 🚀 Usage
1. **Run the backend server**
    ```bash
    cd server
    npm start
    ```
2. **Run the frontend development server**
    ```bash
    cd client
    npm start
    ```
3. **Access the application**
    Open your browser and navigate to `http://localhost:3000`.

## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Feel free to reach out if you have any questions or need further assistance!

**Gmail**: salim8boudaga@gmail.com 

## Thank you for your attention and dont forget to give us a "STAR" ⭐️
