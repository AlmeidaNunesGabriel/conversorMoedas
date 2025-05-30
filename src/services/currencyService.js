// src/services/currencyService.js
import axios from 'axios';

const API_URL = 'https://economia.awesomeapi.com.br/json/last/';

export const getExchangeRates = async () => {
  try {
    const responses = await Promise.all([
      axios.get(`${API_URL}USD-BRL`),
      axios.get(`${API_URL}EUR-BRL`),
      axios.get(`${API_URL}BTC-BRL`)
    ]);
    
    return {
      usd: parseFloat(responses[0].data.USDBRL.bid),
      eur: parseFloat(responses[1].data.EURBRL.bid),
      btc: parseFloat(responses[2].data.BTCBRL.bid)
    };
  } catch (error) {
    console.error("Erro ao buscar cotações:", error);
    return {
      usd: 5.0,
      eur: 6.0,
      btc: 0.000005
    }; // Valores padrão em caso de erro
  }
};