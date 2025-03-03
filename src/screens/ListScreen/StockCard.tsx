import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface StockCardProps {
  logo: any;
  name: string;
  code: string;
  price: string;
  percentageChange: number;
  absoluteChange: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const StockCard: React.FC<StockCardProps> = ({
  logo,
  name,
  code,
  price,
  percentageChange,
  absoluteChange,
  isFavorite,
  onToggleFavorite,
}) => {
  const isPositive = percentageChange >= 0;

  return (
    <View style={styles.card}>
      <View style={styles.leftSection}>
        <Image source={{uri: logo}} style={styles.logo} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.code}>{code}</Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        <Text style={styles.price}>{price}</Text>
        <Text
          style={[
            styles.change,
            isPositive ? styles.positive : styles.negative,
          ]}>
          {isPositive ? `+${percentageChange}%` : `${percentageChange}%`}
          {'  '}
          {isPositive ? `+${absoluteChange}` : absoluteChange}
        </Text>
      </View>

      <TouchableOpacity
        onPress={onToggleFavorite}
        style={[styles.favContainer, isFavorite && styles.favBg]}>
        <Icon
          name={isFavorite ? 'heart' : 'heart-o'}
          size={22}
          color={isFavorite ? '#013496' : '#C5C5C5'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    shadowOffset: {width: 0, height: 2},
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderRadius: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  code: {
    fontSize: 14,
    color: '#777',
  },
  rightSection: {
    alignItems: 'flex-end',
    marginRight: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  change: {
    fontSize: 14,
  },
  positive: {
    color: '#00C853',
  },
  negative: {
    color: '#D50000',
  },
  favContainer: {
    padding: 8,
    borderRadius: '50%',
  },
  favBg: {
    backgroundColor: '#0134960F',
  },
});

export default StockCard;
