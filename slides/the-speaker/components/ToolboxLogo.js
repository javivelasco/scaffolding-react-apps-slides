import React from 'react';

const ToolboxLogo = (props) => {
  return (
    <svg viewBox="0 0 144 131" {...props}>
      <g>
        <path d="M118.954,87.235 C117.784,80.465 115.755,73.277 112.881,65.938 C115.756,58.592 117.784,51.398 118.952,44.624 C130.693,50.324 137.999,57.982 138,65.909 C138,73.901 130.708,81.552 118.954,87.235 L118.954,87.235 Z M105,123.11 C102.829,124.364 100.281,125 97.428,125 C91.361,125 84.259,122.231 76.981,117.308 C82.313,112.871 87.579,107.457 92.545,101.223 C100.313,100.042 107.527,98.206 113.955,95.844 C114.897,108.916 111.902,119.125 105,123.11 L105,123.11 Z M46.568,124.997 C43.717,124.997 41.171,124.362 39.001,123.108 C32.104,119.127 29.109,108.918 30.052,95.846 C36.472,98.205 43.677,100.037 51.435,101.218 C56.402,107.454 61.671,112.871 67.005,117.309 C59.731,122.23 52.633,124.997 46.568,124.997 L46.568,124.997 Z M6,65.909 C6,57.957 13.296,50.305 25.036,44.612 C26.204,51.397 28.236,58.604 31.117,65.963 C28.25,73.288 26.224,80.464 25.055,87.221 C13.301,81.532 6,73.877 6,65.909 L6,65.909 Z M46.881,37.496 C34.717,58.616 46.806,37.626 34.785,58.498 C32.879,52.829 31.528,47.322 30.729,42.143 C35.601,40.255 41.033,38.677 46.881,37.496 L46.881,37.496 Z M72.005,18.28 C76.117,21.584 80.221,25.531 84.168,30.008 C60.223,29.96 84.478,30.009 59.886,29.959 C63.82,25.502 67.909,21.571 72.005,18.28 L72.005,18.28 Z M109.214,58.468 C97.071,37.445 109.179,58.408 97.101,37.496 C102.949,38.678 108.383,40.259 113.26,42.152 C112.461,47.319 111.113,52.813 109.214,58.468 L109.214,58.468 Z M109.235,73.475 C111.119,79.096 112.457,84.56 113.251,89.702 C108.396,91.576 102.987,93.144 97.16,94.319 C109.053,73.79 96.994,94.605 109.235,73.475 L109.235,73.475 Z M34.764,73.5 C47.04,94.67 34.992,73.892 46.834,94.313 C41.014,93.136 35.61,91.567 30.758,89.691 C31.551,84.56 32.886,79.107 34.764,73.5 L34.764,73.5 Z M84.108,101.947 C80.175,106.402 76.088,110.332 71.993,113.623 C67.883,110.321 63.78,106.375 59.835,101.902 C83.777,101.946 59.54,101.901 84.108,101.947 L84.108,101.947 Z M86.649,95.951 L71.75,95.924 L56.853,95.896 C56.122,95.812 55.399,95.718 54.677,95.622 C54.474,95.357 54.27,95.096 54.068,94.829 L38.235,67.525 C38.011,67.004 37.8,66.484 37.584,65.963 C37.731,65.609 37.871,65.255 38.022,64.9 L53.936,37.268 C54.21,36.903 54.487,36.545 54.764,36.185 C55.365,36.105 55.965,36.024 56.572,35.953 L72.262,35.984 L87.951,36.016 C88.387,36.069 88.816,36.131 89.248,36.188 C89.475,36.483 89.702,36.775 89.927,37.073 L105.949,64.813 C106.109,65.189 106.259,65.564 106.414,65.939 C106.2,66.457 105.989,66.975 105.766,67.494 L89.983,94.737 C89.757,95.038 89.529,95.331 89.301,95.628 C88.424,95.744 87.54,95.853 86.649,95.951 L86.649,95.951 Z M144,65.909 C143.999,54.951 134.647,45.112 119.808,38.364 C121.377,22.123 117.514,9.088 108.001,3.596 C104.843,1.774 101.279,0.905 97.437,0.905 L97.438,6.905 C100.286,6.905 102.831,7.54 105.001,8.793 C111.904,12.778 114.898,22.945 113.965,35.978 C107.519,33.608 100.279,31.77 92.485,30.588 C87.54,24.392 82.299,19.008 76.992,14.593 C84.266,9.672 91.365,6.906 97.435,6.905 L97.437,0.905 L97.434,0.905 C89.71,0.906 80.873,4.42 72.008,10.742 C63.141,4.418 54.301,0.904 46.573,0.904 L46.573,6.904 C52.639,6.904 59.74,9.672 67.017,14.594 C61.711,19.009 56.47,24.391 51.525,30.586 C43.724,31.768 36.477,33.608 30.026,35.981 C29.095,22.949 32.093,12.782 39,8.794 C41.172,7.54 43.72,6.904 46.573,6.904 L46.573,0.904 C42.729,0.904 39.16,1.773 36,3.597 C26.486,9.091 22.619,22.126 24.184,38.366 C9.349,45.114 0,54.953 0,65.909 C0,76.869 9.357,86.709 24.202,93.457 C22.615,109.734 26.472,122.804 36.001,128.304 C39.16,130.128 42.725,130.997 46.568,130.997 C54.292,130.997 63.128,127.484 71.992,121.162 C80.859,127.486 89.7,131 97.428,131 C101.271,131 104.84,130.131 108,128.306 C117.53,122.803 121.391,109.73 119.804,93.451 C134.643,86.702 144,76.866 144,65.909 L144,65.909 Z"></path>
        <path d="M71.5482968,65.9688173 C69.154234,70.0775221 66.7769144,74.1965782 64.47,78.356 C63.271,80.497 62.097,82.654 60.931,84.815 C59.794,86.993 58.615,89.146 57.518,91.348 C58.905,89.316 60.21,87.237 61.558,85.183 C62.876,83.111 64.187,81.035 65.472,78.944 C67.9377029,74.9691498 70.3353266,70.9543598 72.7167607,66.929899 L99.741,65.952 L72.7137677,64.9739927 C70.3372065,60.9888441 67.9401733,57.0159615 65.476,53.083 C64.19,51.014 62.88,48.96 61.562,46.909 C60.212,44.879 58.907,42.821 57.518,40.813 C58.613,42.995 59.792,45.128 60.926,47.286 C62.093,49.426 63.268,51.561 64.466,53.682 C66.7739163,57.7980908 69.150305,61.8738486 71.5470195,65.9374346 L71.5387573,65.952 L71.5482968,65.9688173 Z M56.341,93.07 L40.684,65.952 L56.344,38.834 L87.657,38.831 L103.315,65.952 L87.659,93.073 L56.341,93.07 Z"></path>
      </g>
    </svg>
  );
};

ToolboxLogo.propTypes = {
  className: React.PropTypes.string
};

export default ToolboxLogo;
