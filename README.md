## Cineflix

### [Live Preview](https://cineflix-ten.vercel.app/)

#### Cineflix is a movie and series database platform that has the look and style inspired by Netflix. It uses The Movie DB API to display movies and show details like genre and description.
 
I created this project in order to learn how to structure a beginner level React project.

The project has authentication using Google Firebase, the full style done in TalwindCSS and the function to save the movie to favorites, the movie data is updated every week.

### Image:

![cineflix-img-0](https://user-images.githubusercontent.com/82607849/175648073-98f3da8c-fcaf-4bc2-b601-adc08245b28a.jpg)


#### Setup:

For security reasons, I removed my Firebase personal access keys, so if you clone the project and try to open it, it won't work, because you will need to create your own access keys to put in the project.


__Step 1:__ Create an account and start a new project on Google Firebase to get your own keys.

__Step 2:__ Rename the "_PERSONAL.env_" file to "_.env_", open it and paste the respective keys you got in your Firebase account.

__Sample:__
REACT_APP_FIREBASE_API_KEY=__YOUR_KEY_HERE__
