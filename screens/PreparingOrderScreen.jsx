import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
import { SafeAreaView, Platform } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      presentation: "fullScreenModal",
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? 25 : 0,
      }}
      className="bg-[#FFBD5E] justify-center items-center"
    >
      <Animatable.Image
        source={require("../assets/orderLoading.gif")}
        animation="slideInUp"
        interactionCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        interactionCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order
      </Animatable.Text>
      <Progress.Circle size={60} interminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
