import React from 'react';
import { Image } from 'react-native';

export const QRCode: React.FC = React.memo(() => {
  return (
    <Image
      source={{
        uri: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/160349730/original/104b061841d937ac90e3fc2882d26aa8a1ceea9e/do-excellent-work-and-create-world-class-quick-response-code.png',
        width: 50,
        height: 50,
      }}
    />
  );
});
