## Cineflix

### :computer: [Live Preview](https://cineflix-ten.vercel.app/)

#### Cineflix is a movie and series database website that has the look and style inspired by Netflix. It uses The Movie DB API to display movies and show details like genre and description.
 
I created this project in order to learn how to structure a beginner level React project.

The project has authentication using Google Firebase, the full style done in TalwindCSS and the function to save the movie to favorites, the movie data is updated every week.

---

### :sparkles: Features

* Users can create account, login and logout
* Users can save movies to favorites
* The movie data is updated every week
* Custom notifications component

---

### Technologies

* React
* Firebase
* Firestore
* Axios
* Tailwind CSS

---

### :desktop_computer: Image:

![cineflix-img-0](https://user-images.githubusercontent.com/82607849/175648073-98f3da8c-fcaf-4bc2-b601-adc08245b28a.jpg)


### :wrench: Setup:

To have a working copy of the site locally on your computer, follow these simple steps:

__Step 1:__ 

1. Create an account and start a new project on Google [Firebase](https://firebase.google.com/) to get access the necessary access keys.
2. Start a Firestore service from your Firebase account.

__Step 2:__ 

1. Rename the "_PERSONAL.env_" file to "_.env_", which is in the root folder of the project.
2. Modify the code snippet on your __.env__ file replacing '__your-key-here__' with the respective keys that were passed to you after creating the Firebase account

```
REACT_APP_FIREBASE_API_KEY=your-key-here
REACT_APP_FIREBASE_AUTH_DOMAIN=your-key-here
REACT_APP_FIREBASE_PROJECT_ID=your-key-here
REACT_APP_FIREBASE_STORAGE_BUCKET=your-key-here
REACT_APP_MESSAGING_SENDER=your-key-here
REACT_APP_FIREBASE_APP_ID=your-key-here
```
This will be what gives you access to your Firebase account and the Firestore service.

__Step 3:__

1. Create a free [The Movie DB](https://www.themoviedb.org/) account to get your API access key
2. Go to your profile settings, on the API menu section, and copy your The Movie DB API Key

![Captura de tela de 2023-04-22 19-31-41](https://user-images.githubusercontent.com/82607849/233810549-0927bce3-ef4f-4760-9503-3faaf0724bdc.png)

3. Modify the code snippet on your __.env__ file replacing '__your-key-here__' with the respective API Key that was given to you.

```
REACT_APP_TMDB_KEY=your-key-here
```
__Step 4:__

1. Run __npm i__ on your terminal to install all the dependencies
2. Run __npm start__ on your terminal to start the project locally

---

### :notebook: License

Distributed under the __MIT__ License. See LICENSE.txt for more information.

---

### :handshake: Contributing

:construction: __This is a project under construction!__

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repository and create a pull request. You can also simply open an issue with the tag "improvement". Also please give to give the project a star! Thanks.
