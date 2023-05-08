import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Signup = () => {
  return (
    <View>
        <Text style={styles.title}>Signup Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title : {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default Signup