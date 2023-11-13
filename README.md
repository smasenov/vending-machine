# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

## Available Scripts

In the project directory, you can run:

### `yarn run dev`
Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
the app is ready to be deployed!
## How to use the app
1. Look for the product you want to buy and take note of the assigned number.
2. Click on the keyboard to select the product.
3. Under the keyboard, you will find the Select Amount section.
4. Choose the minimum amount allowed for the product you have selected.
5. After selecting the minimum amount, you can purchase the product by clicking on the Buy button. The Buy button is located between the keyboard and the Select Amount section.

## What to look for
Things to keep in mind while using the vending machine are that if the selected product costs more than the amount you have entered, the purchase will not be fulfilled and the money will be refunded. However, if you put in more money than the product costs, the change will be returned to you. It is not possible to add an unlimited amount of money, and also, you cannot choose a number greater than 15 on the keyboard. The product quantity should be updated if a purchase is successful, you can find the total amount in the upper right corner, keep an eye on it.

## Summary
1. Select item,
2. Enter amount, 
3. Buy

##  More
To learn about Vite, check out the [Vite documentation](https://vitejs.dev/).

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
