import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectBasketItems } from "../slices/basketSlice";
import { selectRestaurant } from "../slices/restaurantSlice";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();

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
