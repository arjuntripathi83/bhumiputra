import React from 'react';
import { View, Text, FlatList, StyleSheet, Modal, Image } from 'react-native';
import { IconButton } from 'react-native-paper';

import useProductContext from '../context/ProductContext';

const CartPage = ({ visible, setVisible }) => {
  const { cartItems, getCartTotal, removeItemFromCart } = useProductContext();

  console.log(cartItems);

  // Render each cart item
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
            <View style={styles.quantityContainer}>
              <Text style={styles.quantityText}>Qty: {item.quantity}</Text>
              <IconButton
                icon="delete"
                iconColor="red"
                size={20}
                onPress={() => removeItemFromCart(item.id)}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Modal visible={visible} onRequestClose={() => setVisible(false)} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.title}>Shopping Cart</Text>

        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={renderCartItem}
          contentContainerStyle={styles.cartList}
        />

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalPrice}>₹ {getCartTotal()}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.buttonText}>Continue</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Arial', // Replace with your desired custom font
  },
  cartList: {
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
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderBottomWidth: 1, // Add a bottom border
    borderBottomColor: '#ccc', // Add a bottom border color
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  itemImg: {
    flex: 2,
    width: '100%',
    height: 70,
    resizeMode: 'contain',
    marginRight: 10,
    borderRadius: 5, // Add rounded corners
  },
  itemContent: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    marginRight: 10,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  continueButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartPage;
