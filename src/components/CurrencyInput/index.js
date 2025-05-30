import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const CurrencyInput = ({ value, onChange }) => (
  <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChange}
    placeholder="Digite o valor em R$"
    keyboardType="numeric"
    placeholderTextColor="#999"
  />
);

export default CurrencyInput;