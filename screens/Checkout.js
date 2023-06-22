import React, { useState } from 'react';
import { Modal } from 'react-native';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import RazorpayCheckout from 'react-native-razorpay';

const Checkout = ({ visible, setVisible }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      quantity: 2,
      image: 'https://example.com/product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 15,
      quantity: 1,
      image: 'https://example.com/product2.jpg',
    },
    // Add more products here
  ]);

  const removeProduct = (productId) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

  const getTotalQuantity = () => {
    return products.reduce((total, product) => total + product.quantity, 0);
  };

  const getTotalPrice = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const renderProductItem = (product) => {
    return (
      <View key={product.id} style={styles.productItem}>
        <Image style={styles.productImage} source={{ uri: product.image }} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>Price: ${product.price}</Text>
          <Text style={styles.productQuantity}>Quantity: {product.quantity}</Text>
        </View>
        <IconButton
          icon="delete"
          color="red"
          size={20}
          onPress={() => removeProduct(product.id)}
        />
      </View>
    );
  };

  const proceedToPayment = () => {
    // Perform payment processing logic here
    // Redirect to the payment screen or do any other necessary actions
  };

  return (
    <Modal visible={visible} onRequestClose={() => setVisible(false)} animationType="slide">
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {products.map(renderProductItem)}
      </ScrollView>
      <View style={styles.totalSection}>
        <Text style={styles.totalText}>Total Quantity: {getTotalQuantity()}</Text>
        <Text style={styles.totalText}>Total Price: ${getTotalPrice()}</Text>
      </View>
      <TouchableOpacity style={styles.addressSection}>
        <Text style={styles.addressText}>Delivery Address: Edit Address</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.proceedButton} onPress={proceedToPayment}>
        <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.paymentButton} onPress={()=>{
        var options = {
          description: 'Credits towards consultation',
          image: '../assets/Logo.png',
          currency: 'INR',
          key: '<YOUR_KEY_ID>',
          amount: 2000,
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
        <Text style={styles.paymentButtonText}>Proceed to Payment{'₹' + 2000}</Text>
      </TouchableOpacity>
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
  },
  productQuantity: {
    fontSize: 16,
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addressSection: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  addressText: {
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  proceedButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Checkout;
