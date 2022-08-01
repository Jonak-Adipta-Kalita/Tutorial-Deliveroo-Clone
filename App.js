import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ReduxProvider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Basket" component={BasketScreen} />
            <Stack.Screen
              name="PreparingOrder"
              component={PreparingOrderScreen}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </ReduxProvider>
    </NavigationContainer>
  );
};

export default App;
