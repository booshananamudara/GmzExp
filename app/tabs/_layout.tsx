import React from "react";
import { Tabs } from "expo-router";
import { Image, View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import FontSize from "@/constants/FontSize";

const PlaceholderIcon = ({ source, color }: { source: any; color: string }) => {
  return (
    <View style={styles.iconContainer}>
      <Image
        source={source}
        style={[styles.iconImage, { tintColor: color }]}
        resizeMode="contain"
      />
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tabIconSelected,
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#f4FFFF",
          borderTopWidth: 0,
          borderRadius: 24,
          height: 45,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          position: "absolute",
          width: "80%",
          alignSelf: "center",
          marginBottom: 10,
          marginLeft: 40,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <PlaceholderIcon
              source={require("../../assets/images/home.png")}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <PlaceholderIcon
              source={require("../../assets/images/settings.png")}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  focusedIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "#FFD1A6",
    borderRadius: 15,
  },
  iconImage: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  iconLabel: {
    fontSize: FontSize.medium,
    fontWeight: "bold",
  },
});

export default TabLayout;
