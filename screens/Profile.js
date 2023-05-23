import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('./images/profile-picture.png')}
          style={styles.profilePicture}
          resizeMode='contain'
        />
        <Text style={styles.profileName}>Jaggu kaliya</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Email: johndoe@example.com</Text>
        <Text style={styles.infoText}>Location: Dholakpur</Text>
        <Text style={styles.infoText}>Member Since: Jan 2023</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 250,
    height: 250,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Profile;
