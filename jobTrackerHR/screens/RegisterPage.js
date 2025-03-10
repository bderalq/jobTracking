import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";

const RegisterPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    if (!username || !password || !employeeId) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }
    console.log("Registering new user:", { username, employeeId });
  };

  return (
    <LinearGradient
    colors={['#1e3c72', '#2a5298']} 
    style={styles.container}
    >
      <Text style={styles.title}>Register</Text>

      <View style={styles.inputContainer}>
        <Ionicons
          name="person-outline"
          size={20}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
        >
          <Ionicons
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={20}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name="clipboard-outline"
          size={20}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Employee ID"
          placeholderTextColor="#888"
          value={employeeId}
          onChangeText={setEmployeeId}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.footerLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 90,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "#f1f1f1",
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 15,
    width: "100%",
    height: 55,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',

  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: "100%",
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#333",
  },
  eyeIcon: {
    padding: 5,
  },
  button: {
    padding: 15,
    borderRadius: 12,
    backgroundColor: "#4CAF50",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  footer: {
    flexDirection: "row",
    marginTop: 30,
    gap: 10,
  },
  footerText: {
    color: "#fff",
    fontSize: 16,
  },
  footerLink: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
