# React Expense Tracker

This is a simple expense tracker app built with React. It uses functional components with hooks and the context API. The app utilizes the Material UI library for pre-built components, customizing the theme, and styling. For storage, the app uses the browser's local storage to persist data.

You can visit the app by clicking on the following link: [React Expense Tracker](https://jsm-expense-tracker.netlify.app/)

## Usage

### Adding Income or Expenses
You can add income and expenses to the app very intuitively. Simply select the type of transaction you want to add, select a relevant category, add the amount, select the date, and click on the *Create* button. The app will automatically update the total balance and the income or expense total. The donut charts will also update to reflect the new data.

**Example for adding income:**
![adding income](./img/adding-income.gif)


**Example for adding expense:**
![adding expense](./img/adding-expense.gif)

### Deleting Income or Expenses
To delete an entry from the app, simply click on the *Delete* button next to the entry you want to delete. The app will automatically update the total balance and the income or expense total. The donut charts will also update to reflect the new data.

### Using Speechly Voice Commands
This app is using the Speechly API to allow for voice commands. To use this feature, click on the microphone icon below the adding entry form. You can then add income or expenses by saying something like "Add income of 100 dollars in category Salary on Monday". The app will automatically update the total balance and the income or expense total. The donut charts will also update to reflect the new data.

Note:  The Speechly API has changed since the creation of this app. The app is using the old version of the API. The new version of the API is not backwards compatible with the old version. Therefore, the voice command functionality is not working.

This app was made with the help of the following tutorial: [Build and Deploy a Voice Powered React App - Budget Tracker | Context API, Local Storage, Speechly](https://www.youtube.com/watch?v=NnUFOWR_V4Y&list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR)