import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '51836821-8fdc0340557da62641869e110',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
});

export async function getImagesByQuery(query, page, per_page = 15) {
  const response = await axios.get('', {
    params: {
      q: query,
      page: page,
      per_page: per_page,
    },
  });
  return response.data;
}
