# [Travel Ready ](https://grenvals.github.io/TravelReady/index.html)
Travel Ready makes packing easy by helping you remember what items you shouldn't forget for your weekend getaway, trip, or vacation. The app is available on browser, mobile devices (iOS/Android), and desktop.

   ![general](https://user-images.githubusercontent.com/40334272/90871711-2bf77200-e3a4-11ea-85f5-158ee7639aa3.png)


## 📱 Review

   The app is designed for quickly packing things into a suitcase or backpack for a trip, hike, or vacation. I am passionate about mountain hiking, and anyone who has gone on a hike knows how difficult it is to pack a backpack and make sure nothing is forgotten. Previously, I used Trello for this purpose, which is perfect for organizing work. However, when it comes to quickly packing, its interface is not convenient for this purpose. It has a lot of unnecessary functionality, and it often freezes on mobile devices.

## 🌎 How to install
   The app is cross-platform, so you can install it on your smartphone, computer, or use it in your browser. Personally, I often use it on my smartphone. The app does not require an internet connection, as all changes are saved locally.
   ###  Install on smartphone
   [Open the app in your browser](https://grenvals.github.io/TravelReady/index.html)
   ![Install](https://user-images.githubusercontent.com/40334272/90870949-ff8f2600-e3a2-11ea-9d66-4cfd3ed77224.png)
   ###  Install on PC
   1.  [Open the app in your browser](https://grenvals.github.io/TravelReady/index.html)
   2. In the address bar, you'll see an 'Install' prompt or a '+' icon.
   3. After installation, the app will appear on your desktop and in the main menu.
   ![laptop](https://user-images.githubusercontent.com/40334272/90871374-ac69a300-e3a3-11ea-97ed-9673716a3a7d.png)
   ![phone](https://user-images.githubusercontent.com/40334272/90870654-8f80a000-e3a2-11ea-92d6-b337657f29df.png)

## 💻 Technologies
   This application is developed using the React. For dynamic styling, it uses the classnames library, SASS and the BEM methodology. State management is handled with useReducer and Context API. The app is cross-platform — you can install it on your smartphone, computer, or simply use it in the browser. It works offline and doesn't require an internet connection — all changes are saved locally.

## 💻 Implemented functionality
   - *Progress monitoring chart by categories + display of packed items/total quantity.*
   - *Progress chart across all categories + number of packed items across all categories/total number of items across all categories.*
   - *Category creation.*
   - *Category deletion.*
   - *Task creation.*
   - *Task deletion.*
   - *Task editing.*
   - *PWA (Progressive Web App), an app that can be installed on your smartphone, computer, or used directly in the browser.*
   - *Automatic app updates on all installed devices when a new version is released.*

## 📂 Folder structure

 ```
   ├── dist                      /* generate build in production mode;
   └── public                    /* static files;
   |     ├── index.html          /* change title and static html here;
   |     └── favicon
   └── src
   |     └── assets              /* images, fonts, additional files;
   |      ...
   |     ├── components          /* react components;
   |     ├── scss                /* general style, reset & normalaize;
   |     └── index.js            /* app starts here;
   |      ...
   ├── .babelrc                  /* babel config;
   ├── .eslintrc                 /* eslint config;
   ├── package.json              /* dependencies;
   ├── webpack.config.dev.babel  /* webpack config for development;
   ├── webpack.config.prod.babel /* webpack config for production;
   └── .gitignore                /* ignore folders & files;

```

## 🚀 Getting Started (development)
You can run aplication locally in 5 minutes:
1. **Install Node.js** [download](https://nodejs.org/en/).
2. **Install Yarn** [download](https://classic.yarnpkg.com/en/docs/install#windows-stable).
3. **Clone repository** .
4. **Install dependencies** .

   Open the CLI in the application folder and set it up with a single command:

   ```shell
   yarn install

   ```
5. **Start aplication in development mode** .

   Set up in a single command in CLI:

   ```shell
   yarn start

   ```
6. **Create the build and open the bundle analizer** .

   Set up in a single command in CLI:

   ```shell
   yarn build

   ```

