import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useItems} from '../../hooks/useItems';
import StockCard from './StockCard';
import {Item} from '../../types/items';

const ListScreen = ({navigation}: {navigation: any}) => {
  const {data: items, isLoading, error} = useItems();
  const [stocks, setStocks] = useState<Item[]>([]);

  useEffect(() => {
    setStocks(items as Item[]);
  }, [items]);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  const toggleFavorite = (id: string) => {
    setStocks(prevStocks =>
      prevStocks.map(stock =>
        stock.id === id ? {...stock, isFavorite: !stock.isFavorite} : stock,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={stocks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <StockCard
              logo={item.logo}
              name={item.name}
              code={item.code}
              price={item.price}
              percentageChange={item.percentageChange}
              absoluteChange={item.absoluteChange}
              isFavorite={item.isFavorite}
              onToggleFavorite={() => toggleFavorite(item.id)}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#FBFBFB'},
  item: {padding: 15, borderBottomWidth: 1, borderColor: '#ccc'},
});

export default ListScreen;
