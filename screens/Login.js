import { Formik } from "formik";
import React from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import { Card, TextInput } from "react-native-paper";

const Login = ({ isVisible = true, setVisible = () => {} }) => {

  const loginData = {
    email: "user@mail.com",
    password: "123456",
  }

  const navigation = useNavigation();

  const onFormSubmit = (formdata) => {
    console.log(formdata);
    if(formdata.email === loginData.email && formdata.password === loginData.password){
      alert("Login Success");
      setVisible(false);
      navigation.navigate('EquipmentBrowser')
    }else{
      alert("Login Failed");
    }
    };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      hardwareAccelerated={true}
      onRequestClose={(e) => setVisible(false)}
    >
      {/* <Button onPress={() => setVisible(false)} title="Close" /> */}

      <View style={styles.container}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={onFormSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <Text style={styles.formTitle}>Login To Continue</Text>
              <TextInput
                style={styles.inputbox}
                label="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder="Enter Email"
              />
              <TextInput
                style={styles.inputbox}
                label="Password"
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder="Enter Password"
              />
              <View style={styles.btn}>
                <Button onPress={handleSubmit} title="Submit" />
              </View>

              <Text>Create Account</Text>
            </View>
          )}
        </Formik>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    height: 600,
    backgroundColor: "#fff",
    marginHorizontal: 50,
    paddingTop: 50,
  },
  inputbox: {
    marginVertical: 20,
  },
  formTitle: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  btn: {
    marginVertical: 50,
  },
});

export default Login;
