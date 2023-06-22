import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
import { Card, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

const Login = ({ isVisible, setVisible, setSignupOpen }) => {
  const loginData = {
    email: 'user@mail.com',
    password: '123456',
  };

  const navigation = useNavigation();

  const onFormSubmit = (formData) => {
    console.log(formData);
    if (formData.email === loginData.email && formData.password === loginData.password) {
      alert('Login Success');
      setVisible(false);
      // navigation.navigate('Home');
    } else {
      alert('Login Failed');
    }
  };

  const goBack = () => {
    setVisible(false);
  };

  const goToSignUp = () => {
    setVisible(false);
    setSignupOpen(true);
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
          <Image source={require('../assets/icons/Applogo.png')} style={styles.logo} />
        </View>
        <Text style={[styles.formTitle, { color: 'white' }]}>Welcome Back</Text>
        <Card style={styles.card}>
          <Formik initialValues={{ email: '', password: '' }} onSubmit={onFormSubmit}>
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
                <TouchableOpacity onPress={() => alert('Forgot Password?')}>
                  <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                  <Text style={styles.submitButtonText}>Login</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
          <TouchableOpacity style={styles.signupButton} onPress={goToSignUp}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
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
    marginBottom: 10,
  },
  logo: {
    width: 200,
    height: 200,
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
  forgotPassword: {
    color: '#999',
    textAlign: 'right',
    marginBottom: 10,
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
  signupButton: {
    backgroundColor: '#333',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  signupButtonText: {
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

export default Login;
