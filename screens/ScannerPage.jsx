import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import SpecifiedView from "../components/SpecifiedView";

export default function ScannerPage({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    setScanned(true);
    navigation.navigate("Customer Ticket Info", data);
    console.log(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SpecifiedView>
      <View className="h-screen">
        <Text className="text-center text-lg font-bold my-6">
          Scan Customer Barcode
        </Text>
        <View className="h-[50vh] justify-center items-center">
          <View className="h-96 w-96">
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
          </View>
        </View>
        <Button title={"Process"} onPress={() => setScanned(false)} />
      </View>
    </SpecifiedView>
  );
}
