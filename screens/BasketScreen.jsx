import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";

const BasketScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      presentation: "modal",
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  );
};

export default BasketScreen;
