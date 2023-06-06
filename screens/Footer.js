import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.linkContainer}>
        <Icon name="home" size={24} color="#333" />
        <Text style={styles.linkText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkContainer}>
        <Icon name="search" size={24} color="#333" />
        <Text style={styles.linkText}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkContainer}>
        <Icon name="user" size={24} color="#333" />
        <Text style={styles.linkText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  linkContainer: {
    alignItems: 'center',
  },
  linkText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
});

export default Footer;
