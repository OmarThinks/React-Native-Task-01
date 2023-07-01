# How to use:

### 1) Theme, Colors, navigation and Route:

<b>

```ts
import { useAppTheme } from "@theme";

// Navigation and Route
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList, navigationNames } from "@navigation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

type SplashScreenProps = RouteProp<
  RootStackParamList,
  typeof navigationNames.Splash
>;

const MyComponent = () => {
  // Theme
  const colors = useAppTheme().colors;
  const theme = useAppTheme();

  // Nav
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<SplashScreenProps>();
  const params = useRoute<SplashScreenProps>().params;

  return <></>;
};

export default MyComponent;
```

</b>
