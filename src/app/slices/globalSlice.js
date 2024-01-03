import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"


const fetchCoins = createAsyncThunk(
  'Coins/fetchCoinsByCurrency',
  async (currency) => {
    try {
      const response = await axios.get(`https://simple-crypto-converter-backend.vercel.app/api/v_1/Coins/${currency}`)
      return response.data
    } catch (error) {
      throw new Error("Internal Server Error, Try again Later")
    }
  }
)

const ConvertCoins = createAsyncThunk(
  'Convert/ConvertCoinsByTargetCurrency',
  async ({ sourceCurrency, amount, targetCurrency }) => {
    try {
      console.log(sourceCurrency)
      console.log(amount)
      console.log(targetCurrency)
      const response = await axios.get(
        `https://simple-crypto-converter-backend.vercel.app/api/v_1/Convert/${sourceCurrency}/${amount}/${targetCurrency}`
      );
      console.log(response.data)
      return response.data
    } catch (error) {
      throw new Error("Internal Server Error, Try again Later")
    }
  }
)

const initialState = {
  isLoading: false,
  coins: [],
  convertedCoin: null
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchCoins.fulfilled, (state, action) => {
      state.isLoading = false;

      if (action.payload.data.length === 0) {
        // Handle the case where the data array is empty
        console.log('No data available');
      } else {
        // Update the state with the array of coins
        state.coins = action.payload.data;
      }
    })
    builder.addCase(fetchCoins.rejected, (state, action) => {
      state.isLoading = false
      state.coins = []
    })

    builder.addCase(ConvertCoins.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(ConvertCoins.fulfilled, (state, action) => {
      state.isLoading = false;

      if (action.payload.data) {
        state.convertedCoin = action.payload.data;
      }
    })
    builder.addCase(ConvertCoins.rejected, (state, action) => {
      state.isLoading = false
      state.coins = [];
      state.convertedCoin = null
    })
  }
})



export { fetchCoins, ConvertCoins }

export default globalSlice.reducer