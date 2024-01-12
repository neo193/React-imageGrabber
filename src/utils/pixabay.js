import axios from 'axios';

export async function fetchImages(entry) {
    const imageData = []
    const response = await axios.get(`https://pixabay.com/api/?key=${import.meta.env.VITE_APIKEY}&q=${entry}&image_type=photo&min_width=384&min_height=216&orientation=horizontal&per_page=8`)
    response.data.hits.map((i) => {
        imageData.push({ id: i.id, url: i.webformatURL })
    })
    return imageData;
}