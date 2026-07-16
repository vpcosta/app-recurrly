import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function SignIn() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text>Hello, SignIn</Text>
      <Link
        href="/"
        className="mt-4 rounded bg-primary text-white p-4 text-center"
      >
        Home
      </Link>
    </View>
  );
}
