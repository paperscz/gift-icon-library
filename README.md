# MediaBrix Icon Gallery

Open Sourcing an internal Icon Gallery from MediaBrix - updating the UI, and Express API Server

## Goals

The original Icon Gallery built at MediaBrix was created as a showcase to share with clients that they could customize their "reward icon" before an advertisment was displayed. Giving a much needed customizability to each display.

The first interation of this app was built with CRA and all the state was managed locally in the "gallery" component. I always wanted to rebuild the app using the following:

1. A proper API served by Express (original this was a JSON file in the public folder)
2. Proper global state manangement tool such as redux
3. Newer CSS techniques such as css-modules.

## Scripts

Starting the development server, using express and webpack:

`npm run dev:start`

Running the unit tests with Jest

`npm run test`

Running the production server

`npm run build`

Removing the public folder

`npm run clean`

