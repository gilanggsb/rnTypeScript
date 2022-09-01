## Blender export
Y Forward
Z Up

### Path
Path Mode Copy and Icon


## IOS
Go to project settings, then Editor > Add Build Setting > Add User-Defined Setting, and add the following:

SWIFT_WHOLE_MODULE_OPTIMIZATION = YES

sudo killall -HUP mDNSResponder;sudo killall mDNSResponderHelper;sudo dscacheutil -flushcache

cd android
./gradlew app:assembleRelease
sudo pkill node
adb kill-server
adb devices
adb tcpip 5555
adb connect 10.106.29.201
adb reverse tcp:8081 tcp:8081
sudo lsof -i :8081

### If difficult connect to adb
1. connect with usb
2. adb -s RR8T10C22VZ tcpip 5555
3. adb connect x.x.x.x  

clear
react-native log-android
react-native run-android
npx react-native run-android
react-native run-android --variant=DevDebug
react-native run-android --deviceId=DEVICE_ID

npm install --save-dev
--ignore-existing
adb logcat -c
emulator -list-avds

react-native start
npx react-native start --reset-cache
## Clean
rm -rf node_modules
rm package-lock.json

watchman watch-del-all
./gradlew cleanBuildCache
npm cache verify
yarn cache clean

npx react-native-rename "CrazyRich" -b com.crazyrich
npx react-native link

npm install --save /Users/tjikaljedy/Workspace/crazyrich/frontend/crazyrich/lib/@viro-community/react-viro

/Users/tjikaljedy/Workspace/crazyrich/frontend/rn-repo/@viro-community/react-viro/bin/ViroFBX ./src/res/obelik-statue/statue.fbx ./src/res/obelik-statue/statue.vrx 
### Clean ReactNative

watchman watch-del-all && 
rm -rf $TMPDIR/metro-cache-* &&
rm -rf $TMPDIR/native-platform* && 
rm -rf node_modules/ 
&& npm cache clean

## local
rm -rf ios/build && rm -rf ios/Pods && rm -rf node_modules && rm -rf android/build
rm -rf ~/.cocoapods
pod cache clean --all
## IOS problem
git clone https://github.com/nvm-sh/nvm.git ~/.nvm
source ~/.nvm/nvm.sh
nvm alias default system

#### React-Native
## module resolver
yarn add --dev babel-plugin-module-resolver

adding in babel.config.js
module.exports = {
presets: ['module:metro-react-native-babel-preset'],
plugins: [
  [
    'module-resolver',
    {
      extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
      alias: {
        '@src': './src',
      },
    },
  ],
],
};

adding in tsconfig.json
"baseUrl": "./",                          /* Base directory to resolve non-absolute module names. */
"paths": {
  "@src/*": ["src/*"]
},  





### Command line
Clear watchman watches: watchman watch-del-all
Delete node_modules and run yarn install
yarn start --reset-cache
rm -rf /tmp/metro-*
 
npx react-codemod rename-unsafe-lifecycles

viroAppProps: {
loadingObjectCallback: this._onListItemLoaded,
clickStateCallback: this._onItemClickedInScene,
setIsOverPlane: this.setIsOverPlane,
isReady: false,
},

././node_modules/@viro-community/react-viro/bin/ViroFBX ./src/res/obelik-statue/statue.fbx ./src/res/obelik-statue/statue.vrx
adb install ./android/app/build/outputs/apk/release/app-arm64-v8a-release.apk

././node_modules/@viro-community/react-viro/bin/ViroFBX /Users/tjikaljedy/Workspace/crazyrich/frontend/out-pict/statue/statue.fbx /Users/tjikaljedy/Workspace/crazyrich/frontend/obelik/src/res/statue/statue.vrx

Last Learn
https://github.com/viromedia/viro/issues/102
https://blog.viromedia.com/how-to-build-an-interactive-ar-app-in-5-mins-w-react-native-viro-ar-e420147e1612

expo eject

npx react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res


### Custom Font
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./App/assets/fonts'],
};



https://aravindmnair.medium.com/add-custom-fonts-to-react-native-0-60-easily-in-3-steps-fcd71459f4c9
https://stackoverflow.com/questions/41825276/how-to-add-custom-font-in-react-native-android

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreen, HomeScreen, LoginScreen, WelcomeScreen } from '../pages';
import { useTheme } from '@ui-kitten/components';

const RootStack = createNativeStackNavigator();
const RootNavigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="Welcome" component={WelcomeScreen} />
                <RootStack.Screen name="Auth" component={AuthScreen} />
                <RootStack.Screen name="Login" component={LoginScreen} />
                <RootStack.Screen name="Home" component={HomeScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation

    "@viro-community/react-viro": "file:../rn-repo/@viro-community/react-viro/viro-community-react-viro-2.23.0.tgz",

git branch -m main master
git fetch origin
git branch -u origin/master master
git remote set-head origin -a


It's great to be your network, and whenever possible to collaborate with you for the following business ideas:

Thank you for spending time interviewing me last week, I’m eager to hear about the next steps, and don’t hesitate to contact me if you have any questions or concerns in the meantime.


<ViroScene>
  <ViroDirectionalLight 
    color="#FFFFFF"
    direction={[0, -1, 0]}
    shadowOrthographicPosition={[0, 3, -5]}
    shadowOrthographicSize={10}
    shadowNearZ={2}
    shadowFarZ={9}
    castsShadow={true} />

  <ViroBox
    position={[-1, 2, -5]}
    width={0.5} 
    height={0.5}
    materials={["grid"]} />

  <ViroBox
    position={[1, -1, -5]}
    width={0.5} 
    height={0.5}
    materials={["grid"]} />

  <ViroQuad 
    position={[0, -2, -3]}
    rotation={[-90, 0, 0]}
    width={20}
    height={20}
    materials={["grid"]} />
</ViroScene>



ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/grid_bg.jpg'),
    lightingModel: "Lambert",
  },
});

bbLength = boundingBox.max - bounding.min;
scaleToApply.X = desiredConstantLength / bbLength;

Where desiredConstantLength is your same model size in meters to be applied to the object.

### NFT Bike
https://bikefair.org/bike-nft

Why would I want to register and prove ownership of my bike?
Traditional marketplaces don’t check second hand bikes for theft and don’t register them in your name. You can't prove it's yours. With BikeFair, every bike is checked and registered – so you can prove your ownership in case of theft, loss or impound.

Who can change the information on my NFT?
Currently, only BikeFair can make changes to your bike’s blockchain record. We are looking for strong industry partners who will help us build a transparent API and take this project to the next level, though - that includes manufacturers, insurance companies, state institutions, and all other stakeholders, with you as the owner always in the centre thanks to the blockchain’s transparency.

Why a bike NFT?
Having a digital bike has unique advantages. You can prove your ownership anytime, anywhere. You can trade and transfer ownership yourself. The NFT makes it ultra-secure. And as a bonus: it allows for high-tech connections to videogames, smartbikes and virtual worlds (the metaverse).

What can my NFT be used for?
Use it when you need to prove your ownership after theft, loss or impound. Trade it. Connect with the cycling community worldwide. In the future, the NFT will be a one-on-one digital version of your bike to be connected to smartbikes and used in games or virtual worlds (metaverse), while holding all of its historic data - such as transactions, rides, repairs and races.

Will my personal data be public?
No, your personal details are not recorded in the blockchain ledger. You are free to share the bike’s card and the general information, and anyone can look it up, but your personal information stays off of it.