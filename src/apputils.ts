import axios from 'axios';

export function testing() {
    axios.get('http://localhost:8000/api/sagaai/')
    .then((response) => {
      // Handle the response data
      console.log(response.data);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
}

