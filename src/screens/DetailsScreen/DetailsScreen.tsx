import React from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import LabelBadge from '../../components/LabelBadge';
import {tLabelBadgeVariant} from '../../components/LabelBadge/types';

const stockPerformance = [
  {label: 'Change in 3 months', value: '15%'},
  {label: 'Change in 6 months', value: '10%'},
  {label: 'Change in 1 year', value: '8%'},
  {label: 'Year to date (YTD)', value: '20%'},
];

const stockData = [
  {
    symbol: 'EXTRA 4003',
    status: 'ACTIVE',
    quantity: 100,
    validity: '10 Dec 2024',
  },
  {
    symbol: 'EXTRA 4003',
    status: 'EXECUTED',
    quantity: 15,
    validity: '10 Dec 2024',
  },
  {
    symbol: 'EXTRA 4003',
    status: 'CONDITIONAL',
    quantity: 17,
    validity: '10 Dec 2024',
  },
  {
    symbol: 'EXTRA 4003',
    status: 'EXPIRED',
    quantity: 53,
    validity: '10 Dec 2024',
  },
  {
    symbol: 'EXTRA 4003',
    status: 'CANCELED',
    quantity: 23,
    validity: '10 Dec 2024',
  },
];

const ratios = [
  {label: 'Net Loan-to-Deposit Ratio (%)', value: '17.93'},
  {label: 'Net Loan / Total Assets', value: '17.93'},
  {label: 'Book value growth', value: '71.86'},
  {label: 'Deposits / Total Assets (%)', value: '68.15'},
];

const DetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Stock Performance</Text>
      {/* Stock Performance Section */}
      <View style={styles.section}>
        <View style={styles.performance}>
          {stockPerformance.map((item, index) => (
            <View key={index} style={styles.halfWidth}>
              <Text style={styles.titleText}>{item.label}</Text>
              <Text style={styles.infoText}>{item.value}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Stock Table Section */}
      <View style={styles.section}>
        <View style={styles.section}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{flexGrow: 1, minWidth: 400}}>
            <View style={{width: '100%'}}>
              <View style={styles.row}>
                <Text style={styles.header}>{'Symbol'}</Text>
                <Text style={styles.header}>{'Status'}</Text>
                <Text style={styles.header}>{'Quantity'}</Text>
                <Text style={styles.header}>{'Validity'}</Text>
              </View>
              <FlatList
                data={stockData}
                keyExtractor={(_, index) => index.toString()}
                nestedScrollEnabled={true}
                renderItem={({item}) => (
                  <View style={styles.row}>
                    <Text style={styles.cell}>{item.symbol}</Text>
                    <View style={styles.cell}>
                      <LabelBadge
                        status={item.status}
                        variant={
                          item.status.toLowerCase() as tLabelBadgeVariant
                        }
                      />
                    </View>
                    <Text style={styles.cell}>{item.quantity}</Text>
                    <Text style={styles.cell}>{item.validity}</Text>
                  </View>
                )}
              />
            </View>
          </ScrollView>
        </View>
      </View>

      {/* Ratios Section */}
      <Text style={styles.sectionTitle}>Ratios</Text>
      <View style={styles.section}>
        {ratios.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.ratioText}>{item.label}</Text>
            <Text style={styles.ratioText}>{item.value}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, backgroundColor: '#F8FAFC'},
  section: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
  },
  sectionTitle: {fontSize: 16, fontWeight: 'bold', marginBottom: 8},
  titleText: {fontSize: 14, marginBottom: 4, color: '#718096'},
  infoText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#2D3847',
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    alignItems: 'center',
  },
  header: {flex: 1, fontSize: 14, color: '#718096'},
  cell: {flex: 1, fontSize: 14, color: '#2D3847'},
  ratioText: {color: '#2D3847'},
  performance: {flexDirection: 'row', flexWrap: 'wrap'},
  halfWidth: {width: '50%'},
});

export default DetailsScreen;
