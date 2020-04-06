let xRapidApiKey;

if (process.env.NODE_ENV !== 'production') {
  xRapidApiKey = process.env.REACT_APP_X_RAPID_API_KEY;
} else {
  xRapidApiKey = process.env.X_RAPID_API_KEY;
}

const config = {
  headers: {
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
    'x-rapidapi-key': xRapidApiKey,
  },
};

export default config;
