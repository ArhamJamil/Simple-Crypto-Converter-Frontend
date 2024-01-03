
**Project Summary: Cryptocurrency Price Viewer and Converter**

**Description:**
This project is a React-based web application that allows users to view and convert cryptocurrency prices. It includes two main features:

1. **Cryptocurrency Price Viewer:**
   - Displays a table of cryptocurrency prices, including details like name, symbol, image, current price, and market rank.
   - Users can fetch the latest prices in various currencies such as USD, EUR, or JPY.
   - The table features alternating row colors for better readability.
   - Users can customize the target currency for price display.

2. **Cryptocurrency Converter:**
   - Provides a form for users to input a source cryptocurrency, amount, and select a target currency for conversion.
   - Submits the request to convert the specified amount of the source cryptocurrency to the selected target currency.
   - Displays the converted amount to the user.
   - Implements basic error handling and validation for user inputs.

**Technologies Used:**
- React: Frontend framework for building the user interface.
- Redux Toolkit: State management for handling global application state.
- Material-UI: UI components for a consistent and responsive design.
- Tailwind CSS: Utility-first CSS framework for styling.

**Key Components:**
- **DataTable Component:**
  - Displays cryptocurrency prices in a table format.
  - Supports fetching data in different currencies.
  - Implements alternating row colors for improved visual appeal.

- **Converter Component:**
  - Allows users to input source cryptocurrency, amount, and select a target currency.
  - Submits conversion requests and displays the result.
  - Performs basic validation of user inputs.

- **LoaderOverlay Component:**
  - Provides a loader overlay to indicate that data is being fetched.
  - Covers the screen and blurs the background during data loading.

**Additional Features:**
- Responsive design for optimal viewing on various devices.
- UI creativity emphasized, providing an aesthetically pleasing user experience.
  
**Project Structure:**
- **src/app/slices/globalSlice.js:**
  - Redux slice containing actions, reducers, and async thunks for fetching cryptocurrency data and performing conversions.

- **src/components/DataTable.js:**
  - React component for displaying cryptocurrency prices in a tabular format.

- **src/components/Converter.js:**
  - React component for the cryptocurrency conversion form.

- **src/components/LoaderOverlay.js:**
  - React component for the loader overlay during data fetching.

**How to Run:**
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application with `npm start`.

Feel free to customize, extend, and contribute to this project to meet your specific requirements.
