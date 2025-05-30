import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  resultContainer: {
    alignItems: 'center',
    marginVertical: 30,
    backgroundColor: '#fff',
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.27,
    elevation: 8,
  },
  currencyText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
    letterSpacing: 2,
  },
  valueText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#27ae60',
    marginVertical: 15,
    textAlign: 'center',
  },
  rateText: {
    fontSize: 16,
    color: '#7f8c8d',
    marginTop: 10,
    fontWeight: '500',
  }
});