# Tracker App

Before begin the terminal setup to run the app you have to:

1. Get the web api below:
```bash
https://github.com/leonal17/tracker-server-Api
```
2. To run the web api locally you have to do:
  - Follow the instruction on ```tracker-server-Api/README.md```.
  - Open a new tab in the terminal and run ```ngrok http 3000```.
  - Copy the ```URL``` Go to ```tracker/src/api/tracker.js``` and set ```baseURL : 'URL Copied'```

## Repository

1. Install dependencies

```bash
yarn install or npm install
```

2. Run Build Development (Compile Public folder)

```bash
yarn run start or npm start
```

Running local

1. Download ```Expo App ``` on your IOS or Android device.

2. Scan the QR code using your device camara.
```bash
We're done, the app should be running on your device!
```
