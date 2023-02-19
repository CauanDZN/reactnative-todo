import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View, Image } from "react-native";

import plus from "../assets/icons/plus/plus.png";

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState("");

  function handleAddNewTask() {
    if (!task) {
      return;
    }
    addTask(task);
    setTask("");
    return;
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        placeholder="Adicionar novo todo..."
        placeholderTextColor="#B2B2B2"
        returnKeyType="send"
        selectionColor="#666666"
        value={task}
        onChangeText={(event) => setTask(event)}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={handleAddNewTask}
      >
        <Image source={plus} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    marginTop: -28,
    marginHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 56,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 1,
    borderRightColor: "#EBEBEB",
    color: "#666666",
  },
  addButton: {
    backgroundColor: "#FFF",
    height: 56,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
