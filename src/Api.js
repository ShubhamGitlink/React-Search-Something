import axios from 'axios';
const SearchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID EXITH4h0DFmH1QGFeij2kHCXffzqUoSylPWtpbYcn-w'
    },
    params: {
      query: term
    }
  });

  console.log(response)
  return response.data.results;
};

export default SearchImages;

