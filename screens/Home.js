import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.pageTitle}></Text>
    </View>
  )
}

const styles = StyleSheet.create({
    pageTitle : {
        fontSize : 30,
        fontWeight : 'bold'
    },
    container : {
        flex : 1
    }
})

export default Home;
