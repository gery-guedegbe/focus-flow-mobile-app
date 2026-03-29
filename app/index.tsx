import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 flex-col items-center justify-center bg-white">
        <Text className="font-manrope-bold text-primary text-center text-2xl font-bold">
          Welcome to Nativsewind!
        </Text>
      </View>
    </SafeAreaView>
  );
}
