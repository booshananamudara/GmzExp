import { Colors } from "@/constants/Colors";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";

export default function Tab() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);

  const toggleSwitch = () => setNotificationsEnabled(!notificationsEnabled);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Privacy</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.option}>
          <Text style={styles.optionText}>Enable Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={toggleSwitch}
            thumbColor={notificationsEnabled ? Colors.light.active : Colors.light.active}
            trackColor={{ false: Colors.light.borderWithOpacity, true: Colors.light.primary }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.onPrimary,
    paddingTop: 50,
  },
  header: {
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.light.primary,
    textAlign: "center",
  },
  section: {
    marginTop: 20,
    marginHorizontal: 16,
    backgroundColor: Colors.light.gradientBackground,
    borderRadius: 8,
    padding: 12,
    shadowColor: Colors.light.gray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.light.primary,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionText: {
    fontSize: 16,
    color: "#555",
  },
});
