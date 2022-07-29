import { ScrollView, Text, View } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestarauntCard from "./RestarauntCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-400 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestarauntCard
          id={0}
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi!!"
          rating={4.5}
          genre="Japanese"
          address="123 Main st."
          short_description="Sushi it is"
          dishes={[]}
          long={0.343444}
          lat={0.244234}
        />
        <RestarauntCard
          id={0}
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi!!"
          rating={4.5}
          genre="Japanese"
          address="123 Main st."
          short_description="Sushi it is"
          dishes={[]}
          long={0.343444}
          lat={0.244234}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
