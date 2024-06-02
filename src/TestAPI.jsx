import axios from 'axios';
import React, { useEffect, useState } from 'react'

const TestAPI = () => {

  const [videos, setVideos] = useState([]);
  const languageCategoryMap = {
    'hi': '24', // Entertainment (Hindi)
    'en': '24'  // Entertainment (English)
  };
  const apiKey = 'AIzaSyCP876fUEYpZa1zZ7QB4VVT1ULLaOTvzHo'; // Replace with your actual API key
  const query = 'thor love and thunder';
  const language = 'hi'; // Or 'en'

  const url = 'https://www.googleapis.com/youtube/v3/search/';

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url,{
        params:{

          part: 'snippet',
          chart: 'mostPopular',
            type: 'video',
            maxResults: 10,
            q: query,
            key: apiKey,
        }
      });
      console.log(response.data);
      setVideos(response.data);
    };

    fetchData();
    console.log(videos);
  }, [url]); // Re-run
  return (
    <div>
      Test API
    </div>
  )
}

export default TestAPI