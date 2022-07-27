import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

const App = () => {
  return (
    <TailwindProvider>
      <StatusBar style="auto" />
      <View></View>
    </TailwindProvider>
  );
};

export default App;
