import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 59,
    alignItems: 'center',
    alignSelf: 'baseline',
  },
  badgeText: {fontSize: 12, fontWeight: 'bold', color: '#FFF'},
  active: {backgroundColor: '#A3F1D5'},
  executed: {backgroundColor: '#CAF1A3'},
  conditional: {backgroundColor: '#F1E9A3'},
  expired: {backgroundColor: '#DDDDDD'},
  canceled: {backgroundColor: '#FEBAC2'},
  active_text: {color: '#007D50'},
  executed_text: {color: '#007D50'},
  conditional_text: {color: '#8D7F06'},
  expired_text: {color: '#333333'},
  canceled_text: {color: '#8D0616'},
});
