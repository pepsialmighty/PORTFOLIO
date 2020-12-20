import React, { forwardRef } from 'react';
import coffe from '../../assets/video/coffe.mp4';

const VideoPlay = (props, ref) => (
  <video
    // ref={(el) => {
    //   ref = el;
    // }}
    ref={ref}
    src={coffe}
    type='video/mp4'
  />
);

export default forwardRef(VideoPlay);
