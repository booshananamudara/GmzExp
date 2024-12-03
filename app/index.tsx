import {
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";
import Spacing from "@/constants/Spacing";

export default function HomeScreen() {
  const { height } = Dimensions.get("window");
  const Spacing: number = 10;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground
          style={{
            marginTop: Spacing * 10,
            height: height / 2.5,
          }}
          resizeMode="contain"
          source={require("../assets/images/head-image-removebg-preview-white.png")}
        />
        <View
          style={{
            marginHorizontal: Spacing * 8,
            paddingTop: Spacing * 5,
          }}
        >
          <Text
            style={{
              fontSize: FontSize.xxLarge,
              color: Colors.light.primary,
              fontFamily: Font["poppins-bold"],
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Discover Your Favorite Game
          </Text>
          <Text
            style={{
              fontSize: FontSize.medium,
              color: Colors.light.text,
              fontFamily: Font["poppins-regular"],
              textAlign: "center",
              marginTop: Spacing * 2,
            }}
          >
            Explore a world of gaming options based on your interests and gaming
            style
          </Text>
        </View>

        <View
          style={{
            marginTop: Spacing * 3,
            paddingHorizontal: Spacing * 2,
            paddingTop: Spacing * 6,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => router.push("/(auth)/login")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/(auth)/signup")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.onPrimary,
  },
  button: {
    backgroundColor: Colors.light.primary,
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: "48%",
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: Colors.light.primary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  buttonText: {
    fontFamily: Font["poppins-bold"],
    color: Colors.light.onPrimary,
    fontSize: FontSize.large,
    textAlign: "center",
  },
  bottomSection: {
    paddingHorizontal: 20,
    marginTop: Spacing * 4,
  },
});
