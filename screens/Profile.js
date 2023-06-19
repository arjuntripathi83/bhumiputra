import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';

const Profile = ({ visible, setVisible }) => {
  return (
    <Modal visible={visible} onRequestClose={() => setVisible(false)} animationType="fade">
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            source={require('./images/profile-picture.png')}
            style={styles.profilePicture}
            resizeMode="cover"
          />
          <Text style={styles.profileName}>Jaggu Kaliya</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Email: johndoe@example.com</Text>
          <Text style={styles.infoText}>Location: Dholakpur</Text>
          <Text style={styles.infoText}>Member Since: Jan 2023</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
    borderWidth: 5,
    borderColor: '#fff',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
});

export default Profile;
