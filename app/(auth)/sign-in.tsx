import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function SignIn() {
  return (
    <View>
      <Text>Hello, SignIn</Text>
      <Link
        href="/"
        className="mt-4 rounded bg-primary text-white p-4 text-center"
      >
        Pagina de Cadastro
      </Link>
    </View>
  );
}
