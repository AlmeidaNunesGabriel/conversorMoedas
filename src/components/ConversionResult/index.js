import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ConversionResult = ({ currency, value, rate }) => (
  <View style={styles.resultContainer}>
    <Text style={styles.currencyText}>{currency}:</Text>
    <Text style={styles.valueText}>{(value / rate).toFixed(2)}</Text>
    <Text style={styles.rateText}>Taxa: R$ {rate.toFixed(4)}</Text>
  </View>
);

export default ConversionResult;