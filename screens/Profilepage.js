import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('./images/profile-picture.jpg')}
          style={styles.profilePicture}
        />
        <Text style={styles.profileName}>John Doe</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Email: johndoe@example.com</Text>
        <Text style={styles.infoText}>Location: New York</Text>
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
    width: 150,
    height: 150,
    borderRadius: 75,
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

export default ProfilePage;
