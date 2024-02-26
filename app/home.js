import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function SecondScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#a9b4cb",
      }}
    >
      <Text>{"Second Screen"}</Text>
      <Text>title</Text>
      <Link href={"/"}>
        <Text style={{ fontSize: 20, letterSpacing: 5, fontWeight: "bold" }}>
          {"Go Back"}
        </Text>
      </Link>
    </View>
  );
}
