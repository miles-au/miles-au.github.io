import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal'

import './Projects.scss';
import Tile from '../Tiles/Tiles'; 


function Projects() {
  return (
    <div className="projects">
    <h2>projects</h2>
      <HorizontalScroll
        reverseScroll = {true}
      >
         <div className="project">
          <Tile span="2" label="Sellar" bgURL="images/sellar.png" link="https://sellarapp.web.app"/>
          <Tile span="2" backgroundClass="brandwhite-bg"/>
          <Tile label="Flutter" bgURL="images/flutter.png" link="https://flutter.dev/"/>
          <Tile label="App Store" bgURL="images/app_store.png" link="https://apps.apple.com/us/app/sellar-listing-tool/id1505149522?ls=1"/>
          <Tile label="Play Store" bgURL="images/play_store.png" link="https://play.google.com/store/apps/details?id=com.milesau.sellar"/>
          <Tile label="Firebase" bgURL="images/firebase.png" link="https://firebase.google.com/"/>
          <Tile span="3" label="RevenueCat" bgURL="images/revenuecat.png" link="https://www.revenuecat.com/"/>
          <Tile label="ARKit" bgURL="images/arkit.png" link="https://developer.apple.com/augmented-reality/arkit/"/>
          <Tile label="ARCore" bgURL="images/arcore.png" link="https://developers.google.com/ar"/>
        </div>

        <div className="project">
          <Tile span="1" label="JunkAR" bgURL="images/junk_ar.png"/>
          <Tile span="3" backgroundClass="brandwhite-bg"/>
          <Tile label="Flutter" bgURL="images/flutter.png" link="https://flutter.dev/"/>
          <Tile span="3" label="Blender" bgURL="images/blender.png" link="https://www.blender.org/"/>
          <Tile label="App Store" bgURL="images/app_store.png"/>
          <Tile label="ARKit" bgURL="images/arkit.png" link="https://developer.apple.com/augmented-reality/arkit/"/>
        </div>

        <div className="project">
          <Tile span="2" label="Live Price Converter" bgURL="images/live_price_converter.png" link="https://www.producthunt.com/posts/live-price-converter"/>
          <Tile span="2" backgroundClass="brandwhite-bg"/>
          <Tile label="Swift" bgURL="images/swift.png" link="https://developer.apple.com/swift/"/>
          <Tile label="App Store" bgURL="images/app_store.png" link="https://apps.apple.com/us/app/live-price-converter/id1494835186"/>
          <Tile span='2' label="Apple Text Recognition" bgURL="images/apple_ml.png" link="https://developer.apple.com/videos/play/wwdc2019/234/"/>
        </div>

        <div className="project">
          <Tile span="1" label="Digitails" bgURL="images/digitails.png" link="https://www.producthunt.com/posts/digitails"/>
          <Tile span="3" backgroundClass="brandwhite-bg"/>
          <Tile label="Flutter" bgURL="images/flutter.png" link="https://flutter.dev/"/>
          <Tile span='3' label="Ruby on Rails" bgURL="images/rails.png" link="https://rubyonrails.org"/>
          <Tile label="App Store" bgURL="images/app_store.png" link="https://apps.apple.com/us/app/digitails/id1494513448"/>
          <Tile label="Play Store" bgURL="images/play_store.png" link="https://play.google.com/store/apps/details?id=com.milesau.digitails"/>
        </div>

        <div className="project">
          <Tile span="4" label="Show My Socials" bgURL="images/show_my_socials.png" link="https://milesau.com/show_my_socials/"/>
          <Tile label="React JS" bgURL="images/reactjs.png" link="https://reactjs.org"/>
        </div>

        <div className="project">
          <Tile label="Promo Posts" bgURL="images/promo_posts.png" link="https://github.com/miles-au/promoposts"/>
          <Tile span="3" backgroundClass="brandwhite-bg"/>
          <Tile span='3' label="Ruby on Rails" bgURL="images/rails.png" link="https://rubyonrails.org"/>
          <Tile label="JQuery" bgURL="images/jquery.png" link="https://jquery.com"/>
          <Tile label="Heroku" bgURL="images/heroku.png" link="https://www.heroku.com"/>
          <Tile label="Bootstrap" bgURL="images/bootstrap.png" link="https://getbootstrap.com"/>
          <Tile label="Google Cloud" bgURL="images/google_cloud.png" link="https://cloud.google.com"/>
        </div>

        <div style={{width: "200px"}}>
        </div>

        <div className="project">
          <Tile label="Contact Me" backgroundClass="brandwhite-bg"/>
          <Tile span="3" backgroundClass="brandwhite-bg"/>
          <Tile label="Email" bgURL="images/Email.png" link="mailto:miles.d.au@gmail.com"/>
          <Tile label="LinkedIn" bgURL="images/LinkedIn.png" link="https://www.linkedin.com/in/milesau"/>
          <Tile label="GitHub" bgURL="images/GitHub.png" link="https://github.com/miles-au"/>
        </div>
      </HorizontalScroll>
    </div>
  );
}

export default Projects;