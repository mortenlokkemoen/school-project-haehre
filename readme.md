This will be the beginning of our markdown readme file.
As time progresses this will be filled with useful information.

installation process

1. npx create-expo-app my-app
2. cd my-app
3. Install Expo Go on apple store
4. npx expo start or npx expo start --tunnel if your network is strict. You do get a bit slower app.

For backend we need to set up some dependencies

For routing we are installing React native router for all our routing needs

1. expo install react-native-screens react-native-safe-area-context for the routes we will be using
   If we are on Mac and developing for iOS we also need to install pods to complete linking
2. npx pod-install ios
3. npm install @react-navigation/native & npm install @react-navigation/native-stack
4. react-native-screens also require one additional configuration step to properly work on Android
   devices. Edit MainActivity.java file which is located in android/app/src/main/java/<your package name>MainActivity.java

# @Overrride

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(null)
    }

Make sure to add an import statement aswell to the top of the file

# import android.os.Bundle

5. It's important that we can take photos or add from gallery and ask permission to do so,
   so we use expo picture picker combined with expo picture manipulator to make sure we get the right
   size, and ratio. It also has a built in function for asking permission to use the users camera which is important.

- npm install expo-image-manipulator
- npx expo install expo-image-picker

6. Our application needs a MAP component that sends data from device.
   In order to do so we can install some expo packages that makes it easier for us to ask permission and show a map.

- npx expo install expo-location
- npx expo install react-native-maps

# React Drawer Navigator

For our project we wanted the hamburger style menu with some navigation options and expo Drawer does that job very well.
First we need to install some packages from the website and set it up.

npm install @react-navigation/drawer
-npx expo install react-native-gesture-handler
-npx expo install react-native reanimated

# React Native Datetime Picker

We need to be able to select between different dates in our project and to handle our logic we can use React Native Datetime picker
We install the package by typing

- expo install react-native-modal-datetime-picker @react-native-community/datetimepicker

# Fonts and custom styling

We needed a easily solution to the styling of of our project aswell as fonts. There were a few ways to go about it, but we ended up using
Expo google fonts paired with its app-loading component which handles logic when the font is loading into our project.

- npx expo install expo-app-loading
-
