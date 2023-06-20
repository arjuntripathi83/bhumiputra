import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useProductContext } from '../context/ProductContext';
import RazorpayCheckout from 'react-native-razorpay';

const Payment = () => {
  const navigation = useNavigation();
  const { cartItems, getCartTotal } = useProductContext();

  const handlePayment = () => {
    // Perform payment logic here
    // Redirect or display confirmation message
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Options</Text>
      <View style={styles.paymentOptions}>
        <Text style={styles.paymentOption}>Credit Card</Text>
        <Text style={styles.paymentOption}>Debit Card</Text>
        <Text style={styles.paymentOption}>PayPal</Text>
        <Text style={styles.paymentOption}>Net Banking</Text>
      </View>
      <View style={styles.priceDetails}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.itemName}>{item.Title}</Text>
            <Text style={styles.itemPrice}>₹ {item.Price}</Text>
          </View>
        ))}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalPrice}>₹ {getCartTotal()}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.paymentButton} onPress={()=>{
        var options = {
          description: 'Credits towards consultation',
          image: '../assets/Logo.png',
          currency: 'INR',
          key: '<YOUR_KEY_ID>',
          amount: getCartTotal,
          name: 'Farm Trade',
          order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API.
          prefill: {
            email: 'arjuntripathi@gmail.com',
            contact: '7071502006',
            name: 'Arjun Tripathi'
          },
          theme: {color: '#53a20e'}
        }
        RazorpayCheckout.open(options).then((data) => {
          // handle success
          alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
          // handle failure
          alert(`Error: ${error.code} | ${error.description}`);
        });
      }}>
        <Text style={styles.paymentButtonText}>Proceed to Payment{'$' + getCartTotal()}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Arial',
  },
  paymentOptions: {
    marginBottom: 20,
  },
  paymentOption: {
    fontSize: 18,
    marginBottom: 10,
  },
  priceDetails: {
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Payment;
