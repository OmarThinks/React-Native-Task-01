import React from 'react';
import { View } from 'react-native';
import { getStoredTheme } from '@storage';
import { useDispatch } from 'react-redux';
import { setTheme } from '@redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, navigationNames } from '@navigation';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
type SplashScreenProps = RouteProp<
  RootStackParamList,
  typeof navigationNames.Splash
>;

const Splash = () => {
  // Navigation
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const route = useRoute<SplashScreenProps>();
  const params = useRoute<SplashScreenProps>().params;

  const dispatch = useDispatch();

  React.useEffect(() => {
    const logStoredTheme = async () => {
      const storedTheme = await getStoredTheme();
      // console.log('storedTheme', storedTheme);

      if (storedTheme) {
        dispatch(setTheme(storedTheme));
      }

      navigation.replace(navigationNames.Home);
    };

    logStoredTheme();
  }, []);

  return <View />;
};

export default Splash;
