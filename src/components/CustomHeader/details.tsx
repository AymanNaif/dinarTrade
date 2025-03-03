import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const DetailsCustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>TADAWUL</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Icon name="chevron-left" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 120,
    backgroundColor: 'rgba(0, 48, 135, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 40,
    backgroundColor: '#CECECE1A',
    padding: 10,
    borderRadius: 20,
  },
});

export default DetailsCustomHeader;
