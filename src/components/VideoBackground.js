import videoBg from "../videoBg/video-bg.mp4";

export const VideoBackground = () => {
  return (
    <div>
      <video
        src={videoBg}
        loop
        muted
        autoPlay
        className="fixed top-0 right-0 object-cover w-full h-full m-auto "
      ></video>
      {/* overlay */}
      <div className=" fixed top-0 left-0 h-full w-full bg-black/80 "></div>
    </div>
  );
};
