import React, { useLayoutEffect } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? 25 : 0,
      }}
      className="bg-white pt-5"
    >
      <StatusBar style="auto" />
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={20} color="#00CCBB" />
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <SearchIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and Cuissines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon size={20} color="#00CCBB" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
