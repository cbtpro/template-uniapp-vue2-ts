const compress_images = require('compress-images');

// We will be compressing images [jpg] with two algorithms, [webp] and [jpg];

//[jpg] ---to---> [webp]
compress_images(
  'src/**/*.{jpg,JPG,jpeg,JPEG}',
  'cdn/',
  { compress_force: false, statistic: true, autoupdate: true },
  false,
  { jpg: { engine: 'webp', command: false } },
  { png: { engine: false, command: false } },
  { svg: { engine: false, command: false } },
  { gif: { engine: false, command: false } },
  function (err) {
    if (err === null) {
      //[jpg] ---to---> [jpg(jpegtran)] WARNING!!! autoupdate  - recommended to turn this off, it's not needed here - autoupdate: false
      compress_images(
        'src/**/*.{jpg,JPG,jpeg,JPEG}',
        'dist/assets/',
        { compress_force: false, statistic: true, autoupdate: false },
        false,
        { jpg: { engine: 'jpegtran', command: false } },
        { png: { engine: false, command: false } },
        { svg: { engine: false, command: false } },
        { gif: { engine: false, command: false } },
        () => {
          console.debug('执行成功后回调');
        }
      );
    } else {
      console.error(err);
    }
  }
);
