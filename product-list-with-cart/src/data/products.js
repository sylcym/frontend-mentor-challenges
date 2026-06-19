import waffleMobile from '../assets/images/image-waffle-mobile.jpg'
import waffleTablet from '../assets/images/image-waffle-tablet.jpg'
import waffleDesktop from '../assets/images/image-waffle-desktop.jpg'
import waffleThumbnail from '../assets/images/image-waffle-thumbnail.jpg'
import cremeBruleeImage from '../assets/images/image-creme-brulee-mobile.jpg'
import macaronImage from '../assets/images/image-macaron-mobile.jpg'

const products = [
  {
    id: 1,
    name: 'Waffle',
    category: 'Waffle',
    price: 6.5,
    image: {
      mobile: waffleMobile,
      tablet: waffleTablet,
      desktop: waffleDesktop,
      thumbnail: waffleThumbnail
    }
  },
  {
    id: 2,
    name: 'Creme Brulee',
    category: 'Creme Brulee',
    price: 7,
    image: {
      mobile: waffleMobile,
      tablet: waffleTablet,
      desktop: waffleDesktop,
      thumbnail: waffleThumbnail
    }
  },
  {
    id: 3,
    name: 'Macaron',
    category: 'Macaron',
    price: 8,
    image: {
      mobile: waffleMobile,
      tablet: waffleTablet,
      desktop: waffleDesktop,
      thumbnail: waffleThumbnail
    }
  },
]

export default products