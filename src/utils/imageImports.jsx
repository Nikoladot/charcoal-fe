import { useTranslation } from 'react-i18next'
import Image1 from '@/assets/gallery/image1.jpg'
import Image10 from '@/assets/gallery/image10.jpg'
import Image11 from '@/assets/gallery/image11.jpg'
import Image12 from '@/assets/gallery/image12.jpg'
import Image13 from '@/assets/gallery/image13.jpg'
import Image14 from '@/assets/gallery/image14.jpg'
import Image15 from '@/assets/gallery/image15.jpg'
import Image2 from '@/assets/gallery/image2.png'
import Image3 from '@/assets/gallery/image3.jpg'
import Image4 from '@/assets/gallery/image4.jpg'
import Image5 from '@/assets/gallery/image5.png'
import Image6 from '@/assets/gallery/image6.jpeg'
import Image7 from '@/assets/gallery/image7.jpeg'
import Image8 from '@/assets/gallery/image8.jpg'
import Image9 from '@/assets/gallery/image9.jpg'
import Image16 from '@/assets/gallery/Image16.jpg'
import Image17 from '@/assets/making_charcoal.png'

export const albumOneImages = (translations) => {
  return [
    { src: Image1, alt: translations('alt.image1') },
    { src: Image2, alt: translations('alt.image2') },
    { src: Image3, alt: translations('alt.image3') },
    { src: Image4, alt: translations('alt.image4') },
    { src: Image5, alt: translations('alt.image5') },
    { src: Image6, alt: translations('alt.image6') },
    { src: Image7, alt: translations('alt.image7') },
    { src: Image8, alt: translations('alt.image8') },
    { src: Image9, alt: translations('alt.image9') },
    { src: Image10, alt: translations('alt.image10') },
    { src: Image11, alt: translations('alt.image11') },
    { src: Image12, alt: translations('alt.image12') },
    { src: Image13, alt: translations('alt.image13') },
    { src: Image14, alt: translations('alt.image14') },
    { src: Image15, alt: translations('alt.image15') },
    { src: Image16, alt: translations('alt.image16') },
    { src: Image17, alt: translations('alt.image17') }
  ]
}

