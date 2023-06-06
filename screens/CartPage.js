import React from 'react';
import { View, Text, FlatList, StyleSheet, Modal, Image } from 'react-native';
import useProductContext from '../context/ProductContext';
import { IconButton } from 'react-native-paper';

const CartPage = ({ visible, setVisible }) => {
  // Dummy cart data for demonstration
  const cartItems2 = [
    { id: '1', name: 'Product 1', price: 10 },
    { id: '2', name: 'Product 2', price: 20 },
    { id: '3', name: 'Product 3', price: 15 }
  ];

  const { cartItems, getCartTotal, removeItemFromCart } = useProductContext();

  console.log(cartItems);

  // Render each cart item
  const renderCartItem = ({ item }) => {
    return (
      <View style={styles.cartItem}>
        <Image style={styles.itemImg} source={{ uri: item.Image }} />
        <View style={styles.itemContent}>
            <View style={{flex : 4}}>
          <Text style={styles.itemBrand}>{item.Brand}</Text>
          <Text style={styles.itemName}>{item.Title}</Text>
          <Text style={styles.itemPrice}>₹ {item.Price}</Text>
                
            </View>
            <View style={{flex: 1}}>
                    {/* delete icon */}
                    <IconButton icon="delete" iconColor="red" size={20} onPress={() => removeItemFromCart(item.id)} />
            </View>
        </View>
      </View>
    );
  };

  return (
    <Modal visible={visible} onRequestClose={() => setVisible(false)} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.title}>Shopping Cart</Text>

        <FlatList data={cartItems} keyExtractor={(item) => item.id} renderItem={renderCartItem} contentContainerStyle={styles.cartList} />

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalPrice}>₹ {getCartTotal()}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  cartList: {
    flexGrow: 1
  },
  cartItem: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  itemBrand: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  itemName: {
    fontSize: 20
  },
  itemPrice: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green'
  },
  itemImg: {
    flex: 2,
    width: '100%',
    height: 70,
    resizeMode: 'cover',
    marginRight: 10
  },
  itemContent: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default CartPage;
