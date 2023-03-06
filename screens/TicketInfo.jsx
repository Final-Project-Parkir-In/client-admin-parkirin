import { View, Text, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import React from "react";
import SpecifiedView from "../components/SpecifiedView";

export default function TicketInfo({ route: { params } }) {
  console.log(params, "<<< ini udah diterima ticket info");
  const detailUser = JSON.parse(params);
  return (
    <SpecifiedView>
      <ScrollView className="h-screen p-6">
        <View className="bg-[#efba6a] rounded-xl h-fit p-4">
          <Text className="text-sm">Customer :</Text>
          <View className="border rounded-lg mt-1 mb-2 p-2">
            <Text className="text-3xl font-semibold">{detailUser.name}</Text>
          </View>
          <Text className="text-sm">Location :</Text>
          <View className="border rounded-lg mt-1 mb-2 p-2">
            <Text className="text-3xl font-semibold">{detailUser.mall}</Text>
          </View>
          <Text className="text-sm">Parking Spot :</Text>
          <View className="border rounded-lg mt-1 mb-2 p-2">
            <Text className="text-3xl font-semibold">
              {detailUser.spotParkir}
            </Text>
          </View>
          <Text className="text-sm">Car Brand :</Text>
          <View className="border rounded-lg mt-1 mb-2 p-2">
            <Text className="text-3xl font-semibold">
              {detailUser.brandMobil}
            </Text>
          </View>
          <Text className="text-sm">Car Type :</Text>
          <View className="border rounded-lg mt-1 mb-2 p-2">
            <Text className="text-3xl font-semibold">
              {detailUser.typeMobil}
            </Text>
          </View>
          <Text className="text-sm">Plate Number :</Text>
          <View className="border rounded-lg mt-1 mb-2 p-2">
            <Text className="text-3xl font-semibold">{detailUser.plat}</Text>
          </View>
        </View>
        <View className="justify-center items-center mt-6">
          <Button
            icon="checkbox-marked-circle-outline"
            mode="contained"
            className="bg-[#2F3B6E]"
            onPress={() => alert("Verification success!")}
          >
            Verify
          </Button>
        </View>
      </ScrollView>
    </SpecifiedView>
  );
}
