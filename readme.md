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
