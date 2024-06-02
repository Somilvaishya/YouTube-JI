import React, { useContext, useEffect } from 'react';
import Suggestions from './Suggestions';
import VideoCard from './VideoCard';
import useYouTubeVideos from '../../API/youtube';
import SkeletonLoader from '../SkeletonLoader';
import ErrorLoader from '../../ErrorLoader';
const Main = () => {
  const API_URL = 'https://www.googleapis.com/youtube/v3/videos';
  const { videos, loading, error } = useYouTubeVideos(API_URL);

  return (
    <div className='w-full p-4 pt-0 overflow-x-hidden overflow-y-scroll custom-scrollbar h-[calc(100dvh-70px)]'>
      {/* videos */}
      <div className='my-4 grid-auto-fit'>
        {error ? (
          <ErrorLoader
            errorMsg={error.message}
            statusCode={error.response.status}
          />
        ) : loading ? (
          <SkeletonLoader />
        ) : (
          videos.map((item) => {
            return (
              <VideoCard
                key={item.snippet.title}
                title={item.snippet.title}
                thumbnail={item.snippet.thumbnails.standard.url}
                viewCount={item.statistics.viewCount}
                pubDate={item.snippet.publishedAt}
                channelTitle={item.snippet.channelTitle}
                videoId={item.id}
                categoryId={item.snippet.categoryId}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Main;
