// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'

// const Profile = () => {
//   return (
//     <View style={styles.container}>
//         <Text style={styles.pageTitle}></Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     pageTitle : {
//         fontSize : 30,
//         fontWeight : 'bold'
//     },
//     container : {
//         flex : 1
//     }
// })

// export default Profile;


import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Image
          source={require('./profile_picture.jpg')}
          style={styles.profilePicture}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.location}>San Francisco, CA</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.bio}>
        Welcome to my selling app! Feel free to browse and buy my listings.
      </Text>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfilePage;
