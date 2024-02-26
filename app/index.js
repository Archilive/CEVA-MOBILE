import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function FirstScreen() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7c91bd",
      }}
    >
      <Text>{"First Screen"}</Text>
      <Text>INDEX</Text>
      <Link href={"/second"}>
        <Text style={{ fontSize: 20, letterSpacing: 5, fontWeight: "bold" }}>
          {"Navigate"}
        </Text>
      </Link>
    </View>
  );
}
