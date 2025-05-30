import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import CurrencyInput from '../../components/CurrencyInput';
import ConversionResult from '../../components/ConversionResult';
import Header from '../../components/Header';
import { getExchangeRates } from '../../services/currencyService';
import styles from './styles';

const EthereumScreen = () => {
  const [value, setValue] = useState('');
  const [rates, setRates] = useState({ eth: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      const exchangeRates = await getExchangeRates();
      setRates(exchangeRates);
      setLoading(false);
    };
    
    fetchRates();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <CurrencyInput value={value} onChange={setValue} />
        <ConversionResult
          currency="ETH"
          value={value || 0}
          rate={rates.eth}
        />
      </View>
    </View>
  );
};

export default EthereumScreen;