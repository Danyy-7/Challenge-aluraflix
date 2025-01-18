import { useContext } from "react";
import VideoCard from "../videoCard"
import styles from "./videoList.module.css";
import { GlobalContextVideos } from "../../../../context/GlobalContextVideos";

const VideoList = ({videos}) => {
   const { handleDeleteVideo,openEditModal} = useContext(GlobalContextVideos)
  
  
  return (
    <div className={styles.contenedor_videoList}>
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          onEdit={() => openEditModal(video)}
          onDelete={() => handleDeleteVideo(video.id)}
        />
      ))}
    </div>
  );
};

export default VideoList;
