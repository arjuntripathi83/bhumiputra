import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
import { Card, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

const Signup = ({ isVisible, setVisible, setLoginOpen }) => {
  const signupData = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const navigation = useNavigation();

  const onFormSubmit = (formData) => {
    console.log(formData);
    // Add logic to process the sign-up data
    if (formData.password === formData.confirmPassword) {
      alert('Sign Up Success');
      setVisible(false);
      // navigation.navigate('Home');
    } else {
      alert('Passwords do not match');
    }
  };

  const goBack = () => {
    setVisible(false);
  };

  const goToLogin = () => {
    setVisible(false);
    setLoginOpen(true);
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      hardwareAccelerated={true}
      onRequestClose={goBack}
    >
      <View style={styles.container}>
        <Image source={require('../assets/icons/leaves.jpg')} style={styles.backgroundImage} />
        <View style={styles.logoContainer}>
          <Image source={require('../assets/icons/seeds.png')} style={styles.logo} />
        </View>
        <Text style={[styles.formTitle, { color: 'white' }]}>Sign Up</Text>
        <Card style={styles.card}>
          <Formik initialValues={signupData} onSubmit={onFormSubmit}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <>
                <TextInput
                  style={styles.inputBox}
                  label="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder="Enter Email"
                />
                <TextInput
                  style={styles.inputBox}
                  label="Password"
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder="Enter Password"
                />
                <TextInput
                  style={styles.inputBox}
                  label="Confirm Password"
                  secureTextEntry={true}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  placeholder="Confirm Password"
                />
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                  <Text style={styles.submitButtonText}>Sign Up</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
          <TouchableOpacity style={styles.loginButton} onPress={goToLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </Card>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Image source={require('../assets/icons/left-arrow.png')} style={styles.backButtonImage} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  formTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    width: 300,
    padding: 20,
    borderRadius: 10,
  },
  inputBox: {
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#333',
    paddingVertical: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#333',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  backButtonImage: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
});

export default Signup;
