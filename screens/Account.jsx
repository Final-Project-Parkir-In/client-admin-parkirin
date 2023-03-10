import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import SpecifiedView from "../components/SpecifiedView";

export default function Account() {
  return (
    <SpecifiedView>
      <ScrollView className="h-full p-6">
        <View className="border border-slate-400 h-[90px] p-4 mt-4 flex flex-row items-center rounded-xl">
          <View className="mx-2">
            <Image
              source={{
                uri: "https://media.discordapp.net/attachments/1055001291937550366/1078574885430890547/IMG_20230224_141050.jpg?width=602&height=1072",
              }}
              className="w-[60px] h-[60px] rounded-full"
            ></Image>
          </View>
          <View className=" w-fit p-2 space-y-2">
            <Text>John Doe</Text>
            <Text>johndoe@mail.com</Text>
          </View>
        </View>
        <View className="my-8 h-fit ">
          <TouchableOpacity className="h-fit my-2 flex flex-row items-center justify-between" onPress={() => console.log("KENA TOMBOL PROFIL (?)")}>
            <View className="flex flex-row items-center">
              <Avatar.Icon
                size={46}
                icon="account-circle-outline"
                color="#D9A14E"
                className="mx-4 bg-transparent"
              />
              <Text>Pengaturan Profil</Text>
            </View>
            <Avatar.Icon
              size={46}
              icon="chevron-right"
              color="#D9A14E"
              className="bg-transparent"
            />
          </TouchableOpacity>
          <TouchableOpacity
            className="h-fit my-2 flex flex-row items-center justify-between"
            onPress={() => console.log("KENA TOMBOL SIGN OUT")}
          >
            <View className="flex flex-row items-center">
              <Avatar.Icon
                size={46}
                icon="logout-variant"
                color="#D9A14E"
                className="mx-4 bg-transparent"
              />
              <Text>Sign Out</Text>
            </View>
            <Avatar.Icon
              size={46}
              icon="chevron-right"
              color="#D9A14E"
              className="ml-28 bg-transparent"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SpecifiedView>
  );
}
