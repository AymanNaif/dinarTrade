import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomHeader: React.FC = () => {
  const [selected, setSelected] = useState<'KSA' | 'US'>('US');

  return (
    <View style={styles.headerContainer}>
      {/* Fake Gradient Background using Two Overlapping Views */}
      <View style={styles.gradientBackground} />
      <View style={styles.content}>
        <Text style={styles.title}>List</Text>
        <View style={styles.switchContainer}>
          <TouchableOpacity
            style={[styles.switchButton, selected === 'KSA' && styles.active]}
            onPress={() => setSelected('KSA')}>
            <Text
              style={[
                styles.switchText,
                selected === 'KSA' && styles.activeText,
              ]}>
              KSA
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.switchButton, selected === 'US' && styles.active]}
            onPress={() => setSelected('US')}>
            <Text
              style={[
                styles.switchText,
                selected === 'US' && styles.activeText,
              ]}>
              US
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  gradientBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 48, 135, 1)',
    borderEndEndRadius: 15,
    borderStartEndRadius: 15,
  },
  content: {
    zIndex: 1, // Ensures text is on top of the gradient
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F6F5F526',
    borderRadius: 20,
    padding: 3,
    marginTop: 10,
  },
  switchButton: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  switchText: {
    color: '#fff',
    fontSize: 14,
  },
  active: {
    backgroundColor: '#FFF',
  },
  activeText: {
    color: '#0052D4',
    fontWeight: 'bold',
  },
});

export default CustomHeader;
