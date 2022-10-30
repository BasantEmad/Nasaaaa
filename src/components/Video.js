import "./Video.css";  

const src = "https://www.youtube.com/embed/d15DP5zqnYE";

const Video = () => {
  return (
<iframe width="800" 
height="300" 
src="https://www.youtube.com/embed/J61Y5AJ-Kog" 
title="YouTube video player" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

</iframe>
  );
};

export default Video;