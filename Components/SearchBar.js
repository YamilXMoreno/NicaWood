// Search.js
import React, { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Perform any additional logic here if needed
    onSearch(searchQuery);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.searchContainer} onPress={handleSearch}>
        <AntDesign style={styles.searchIcon} name="search1" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder='Search'
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#754427",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 7,
    gap: 10,
    backgroundColor: "white",
    borderRadius: 3,
    height: 38,
    flex: 1,
  },
  searchIcon: {
    marginLeft: 9,
  },
  input: {
    flex: 1,
  },
});

export default SearchBar;
