import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import CurrencyInput from '../../components/CurrencyInput';
import ConversionResult from '../../components/ConversionResult';
import Header from '../../components/Header';
import { getExchangeRates } from '../../services/currencyService';
import styles from './styles';

const BitcoinScreen = () => {
  // Mesma implementação do DollarScreen, alterando apenas:
  return (
    <View style={styles.container}>
      <Header />
      <CurrencyInput value={value} onChange={setValue} />
      <ConversionResult
        currency="BTC"
        value={value || 0}
        rate={rates.btc}
      />
    </View>
  );
};

export default BitcoinScreen;