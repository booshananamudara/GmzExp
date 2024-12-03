import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import avatarImage from "../../assets/images/profile-avatar.png";
import addIcon from "../../assets/images/add-icon.png";
import minusIcon from "../../assets/images/minus-icon.png";
import { Colors } from "@/constants/Colors";
import useClickStore from "../../store";
import FontSize from "@/constants/FontSize";

const Home = () => {
  const { name } = useLocalSearchParams();
  const profileName = typeof name === "string" ? name.split(" ")[0] : "Guest";
  const { platformClicks, toggleClick } = useClickStore();
  interface Platform {
    id: number;
    name: string;
    image_background: string;
    games_count: number;
    year_start?: number;
    year_end?: number;
    games: { id: number; name: string }[];
  }

  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPlatforms = async () => {
      try {
        const response = await fetch(
          "https://api.rawg.io/api/platforms?key=14de70e0c91e47e1a7d0772fe440c65a"
        );
        const data = await response.json();
        setPlatforms(data.results);
      } catch (error) {
        console.error("Error fetching platforms:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlatforms();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>GMZEXP</Text>
        <View style={styles.spacer} />
        <TouchableOpacity style={styles.profileContainer}>
          <Text style={styles.profileName}>Hi {profileName}</Text>
          <View style={styles.avatarWrapper}>
            <Image source={avatarImage} style={styles.avatar} />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Game Platform Explorer</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#007bff" />
        ) : (
          platforms.map((platform) => {
            const isClicked = platformClicks[platform.id] === 1;
            return (
              <View key={platform.id} style={styles.card}>
                <View style={styles.cardLeft}>
                  <Image
                    source={{ uri: platform.image_background }}
                    style={styles.cardImage}
                  />
                </View>
                <View style={styles.cardMiddle}>
                  <Text style={styles.cardTitle}>{platform.name}</Text>
                  <Text style={styles.cardDescription}>
                    Games Count: {platform.games_count}
                  </Text>
                  <Text style={styles.cardDescription}>
                    Year Start: {platform.year_start || "N/A"}
                  </Text>
                  <Text style={styles.cardDescription}>
                    Year End: {platform.year_end || "N/A"}
                  </Text>
                </View>
                <View style={styles.cardRight}>
                  <Text style={styles.cardTitle}>Top Games:</Text>
                  {platform.games.slice(0, 3).map((game) => (
                    <Text key={game.id} style={styles.cardDescription}>
                      - {game.name}
                    </Text>
                  ))}
                </View>
                <TouchableOpacity
                  style={[styles.plusButton, isClicked && styles.clickedButton]}
                  onPress={() => toggleClick(platform.id)}
                >
                  <Image
                    source={isClicked ? minusIcon : addIcon}
                    style={styles.plusButtonIcon}
                  />
                </TouchableOpacity>
              </View>
            );
          })
        )}
      </ScrollView>
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>
          {Object.values(platformClicks).reduce((a, b) => a + b, 0)}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.onPrimary,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    paddingTop: 56,
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: Colors.dark.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  appName: {
    fontSize: FontSize.xLarge,
    fontWeight: "bold",
    color: Colors.light.primary,
    fontFamily: "Poppins-Bold",
  },
  spacer: {
    flex: 1,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  profileName: {
    fontSize: 20,
    color: Colors.light.primary,
    fontWeight: "bold",
    marginRight: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  avatarWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: Colors.light.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    fontSize: FontSize.xLarge,
    color: Colors.light.text,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: Colors.light.background,
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    position: "relative",
  },
  cardLeft: {
    width: "30%",
  },
  cardMiddle: {
    flex: 1,
    paddingLeft: 10,
  },
  cardRight: {
    width: "30%",
  },
  cardImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  plusButton: {
    position: "absolute",
    top: -6,
    right: -6,
    color: "#666",
    backgroundColor: Colors.dark.text,
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
    borderColor: Colors.light.primary,
    zIndex: 10,
  },
  plusButtonIcon: {
    color: Colors.light.primary,
    width: 20,
    height: 20,
  },
  clickedButton: {
    backgroundColor: "#ff6347",
  },
  floatingButton: {
    position: "absolute",
    bottom: 80,
    right: 20,
    backgroundColor: Colors.light.primary,
    borderRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 30,
    elevation: 5,
  },
  floatingButtonText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
  },
});

export default Home;
