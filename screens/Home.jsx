import React, { useState, useEffect } from "react";
import { Avatar } from "react-native-paper";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import SpecifiedView from "../components/SpecifiedView";

export default function Home({ navigation }) {
  return (
    <View>
      <ScrollView className="h-screen">
        <View className="h-[35vh]  bg-[#2F3B6E]">
          <Image
            source={require("../assets/parkirin_logo2.png")}
            className="w-full h-full scale-75"
          />
        </View>
        <View className="h-[40vh] flex flex-row justify-center items-center">
          <TouchableOpacity
            onPress={() => navigation.navigate("Scan Customer Barcode")}
            className="h-fit justify-center items-center"
          >
            <Avatar.Icon
              size={180}
              icon="qrcode-scan"
              className="bg-[#D9A14E]"
            />
            <Text className="text-center text-lg font-semibold my-6">
              Scan Customer Barcode
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
