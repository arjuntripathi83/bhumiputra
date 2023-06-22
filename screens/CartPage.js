import React from 'react';
import { View, Text, ScrollView, StyleSheet, Modal, Image, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import useProductContext from '../context/ProductContext';
import RazorpayCheckout from 'react-native-razorpay';

const CartPage = ({ visible, setVisible, setCheckoutOpen }) => {
  const { cartItems, getCartTotal, getCartItemsCount, removeItemFromCart } = useProductContext();
  // console.log(cartItems);
  const renderCartItem = ({ item }) => {
    return (
      <View style={styles.cartItem}>
        <Image style={styles.itemImg} source={{ uri: item.Image }} />
        <View style={styles.itemContent}>
          <View style={{ flex: 4 }}>
            <Text style={styles.itemBrand}>{item.Brand}</Text>
            <Text style={styles.itemName}>{item.Title}</Text>
            <Text style={styles.itemPrice}>₹ {item.Price}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>Qty : {item.quantity}</Text>
            <IconButton
              icon="delete"
              iconColor="red"
              size={20}
              onPress={() => removeItemFromCart(item)}
            />
          </View>
        </View>
      </View>
    );
  };

  const goBack = () => {
    setVisible(false); // You can replace this with your desired logic to go back or redirect to the previous page
  };

  return (
    <Modal visible={visible} onRequestClose={() => setVisible(false)} animationType="slide">
      <View style={styles.container}>
        
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.title}>Shopping Cart</Text>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {cartItems.map((item) => renderCartItem({ item }))}
        </ScrollView>

        <View style={styles.priceDetails}>
          <View style={styles.priceDetailsRow}>
            <Text style={styles.priceDetailsLabel}>Total Items:</Text>
            <Text style={styles.priceDetailsValue}>{getCartItemsCount()}</Text>
          </View>
          <View style={styles.priceDetailsRow}>
            <Text style={styles.priceDetailsLabel}>Price:</Text>
            <Text style={styles.priceDetailsValue}>₹ {getCartTotal()}</Text>
          </View>
          <TouchableOpacity style={styles.paymentButton} onPress={()=>{
        var options = {
          description: 'Credits towards consultation',
          image: '../assets/Logo.png',
          currency: 'INR',
          key: '<YOUR_KEY_ID>',
          amount: getCartTotal(),
          name: 'Farm Trade',
          order_id: 'order_DslnoIgkIDL8Zt',
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
        <Text style={styles.paymentButtonText}>Proceed to Payment{'₹' + getCartTotal()}</Text>
      </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  backButton: {
    position: 'absolute',
    top: 23,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Arial',
    marginLeft: 40,
  },
  scrollContent: {
    flexGrow: 1,
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  itemBrand: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemName: {
    fontSize: 20,
  },
  itemPrice: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  priceDetails: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  priceDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  priceDetailsLabel: {
    fontSize: 18,
  },
  priceDetailsValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemImg: {
    flex: 2,
    width: '100%',
    height: 70,
    resizeMode: 'contain',
    marginRight: 10,
    borderRadius: 5,
  },
  itemContent: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

export default CartPage;
