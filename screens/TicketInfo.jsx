import { View, Text, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import React from "react";
import SpecifiedView from "../components/SpecifiedView";

export default function TicketInfo() {
  return (
    <SpecifiedView>
      <ScrollView className="h-screen p-6">
        <View className="bg-[#efba6a] rounded-xl h-fit p-4">
          <Text className="text-sm">Customer :</Text>
          <View className="border rounded-lg mt-1 mb-2 p-2">
            <Text className="text-3xl font-semibold">Si paling ngemall</Text>
          </View>
          <Text className="text-sm">Location :</Text>
          <View className="border rounded-lg mt-1 mb-2 p-2">
            <Text className="text-3xl font-semibold">Pondok Indah Mall 3</Text>
          </View>
          <Text className="text-sm">Parking Spot :</Text>
          <View className="border rounded-lg mt-1 mb-2 p-2">
            <Text className="text-3xl font-semibold">B3</Text>
          </View>
          <Text className="text-sm">Car Brand :</Text>
          <View className="border rounded-lg mt-1 mb-2 p-2">
            <Text className="text-3xl font-semibold">Toyota</Text>
          </View>
          <Text className="text-sm">Car Type :</Text>
          <View className="border rounded-lg mt-1 mb-2 p-2">
            <Text className="text-3xl font-semibold">Innova</Text>
          </View>
          <Text className="text-sm">Plate Number :</Text>
          <View className="border rounded-lg mt-1 mb-2 p-2">
            <Text className="text-3xl font-semibold">B 1234 RFP</Text>
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
