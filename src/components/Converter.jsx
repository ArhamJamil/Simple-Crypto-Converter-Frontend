import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField, Button, Typography, Box } from '@mui/material';
import { ConvertCoins } from '../app/slices/globalSlice.js';
import { useSelector, useDispatch } from 'react-redux'


const Converter = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.global.isLoading);
  const convertedData = useSelector((state) => state.global.convertedCoin)
  const [sourceCurrency, setSourceCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('USD');
  const [amount, setAmount] = useState(0);




  const handleConvert = async () => {
    console.log(sourceCurrency, amount, targetCurrency)
    dispatch(ConvertCoins({ sourceCurrency, amount, targetCurrency }))

  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Cryptocurrency Conversion
      </Typography>
      <FormControl sx={{ minWidth: 200, mt: 2 }}>
        <TextField
          id="CryptoCurrency"
          label="Crypto Currency"
          type="text"
          placeholder='Enter ID of Crypto Currency'
          value={sourceCurrency}
          onChange={(e) => setSourceCurrency(e.target.value)}
          sx={{ mt: 2, }}
        />
      </FormControl>
      <TextField
        id="amount"
        label="Unit"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        sx={{ mt: 2, }}
      />
      <FormControl sx={{ minWidth: 200, mt: 2 }}>
        <InputLabel id="target-currency-label">Target Currency</InputLabel>
        <Select
          labelId="target-currency-label"
          id="target-currency"
          value={targetCurrency}
          label="Target Currency"
          onChange={(e) => setTargetCurrency(e.target.value)}
        >
          <MenuItem value="USD">US Dollar</MenuItem>
          <MenuItem value="EUR">Euro</MenuItem>
          <MenuItem value="JPY">Japense Yen</MenuItem>
        </Select>
      </FormControl>

      <Button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-6 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" variant="contained" onClick={handleConvert}>
        Convert
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </Button>
      {convertedData !== null && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          Converted Amount: {convertedData.ConvertedRate} {targetCurrency}
        </Typography>
      )}
    </Box>
  );
};

export default Converter;
