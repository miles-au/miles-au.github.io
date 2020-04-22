import React from 'react';
import './Projects.scss';
import Tile from '../Tiles/Tiles'; 


function Projects() {
  return (
    <div className="projects">

      <div className="project">
        <Tile span="2" label="Sellar" bgURL="images/sellar.png"/>
        <Tile label="Flutter" bgURL="images/flutter.png"/>
        <Tile label="App Store" bgURL="images/app_store.png"/>
        <Tile label="Play Store" bgURL="images/play_store.png"/>
        <Tile label="Firebase" bgURL="images/firebase.png"/>
        <Tile span="3" label="RevenueCat" bgURL="images/revenuecat.png"/>
        <Tile label="ARKit" bgURL="images/arkit.png"/>
        <Tile label="ARCore" bgURL="images/arcore.png"/>
      </div>

      <div className="project">
        <Tile span="1" label="JunkAR" bgURL="images/junk_ar.png"/>
        <Tile label="Flutter" bgURL="images/flutter.png"/>
        <Tile label="App Store" bgURL="images/app_store.png"/>
        <Tile span="3" label="Blender" bgURL="images/blender.png"/>
        <Tile label="ARKit" bgURL="images/arkit.png"/>
      </div>

      <div className="project">
        <Tile span="2" label="Live Price Converter" bgURL="images/live_price_converter.png"/>
        <Tile label="Swift" bgURL="images/swift.png"/>
        <Tile label="App Store" bgURL="images/app_store.png"/>
        <Tile span='2' label="Apple Text Recognition" bgURL="images/apple_ml.png"/>
      </div>

      <div className="project">
        <Tile span="1" label="Digitails" bgURL="images/digitails.png"/>
        <Tile label="App Store" bgURL="images/app_store.png"/>
        <Tile label="Play Store" bgURL="images/play_store.png"/>
        <Tile span='3' label="Ruby on Rails" bgURL="images/rails.png"/>
        <Tile label="Flutter" bgURL="images/flutter.png"/>
      </div>

      <div className="project">
        <Tile span="3" label="Show My Socials" bgURL="images/digitails.png"/>
        <Tile label="React JS" bgURL="images/reactjs.png"/>
      </div>

      <div className="project">
        <Tile label="Promo Posts" bgURL="images/promo_posts.png"/>
        <Tile label="Heroku" bgURL="images/heroku.png"/>
        <Tile label="Bootstrap" bgURL="images/bootstrap.png"/>
        <Tile span='3' label="Ruby on Rails" bgURL="images/rails.png"/>
        <Tile label="JQuery" bgURL="images/jquery.png"/>
        <Tile label="Google Cloud" bgURL="images/google_cloud.png"/>
      </div>

    </div>
  );
}

export default Projects;