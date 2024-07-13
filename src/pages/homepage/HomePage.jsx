import React from 'react';
import CoverImage from './components/CoverImage/CoverImage';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import homeImage from '../../assets/charcoal.jpg';
import ContactNavigation from './components/ContactNavigation/ContactNavigation';
// import AlbumSection from './components/AlbumSection/AlbumSection';
import IntroductionSection from './components/IntroductionSection/IntroductionSection';
import GeneralInfo from './components/GeneralInfo/GeneralInfo';
import OurServices from './components/OurServices/OurServices';


export default function HomePage() {
  return (
    <div className="container">
      <CoverImage image={homeImage} />
      <NavigationMenu />
      <ContactNavigation />
      <IntroductionSection />
      <GeneralInfo />
      <OurServices />
      {/* <AlbumSection /> */}
    </div>
  );
}
