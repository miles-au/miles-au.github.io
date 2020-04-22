import React from 'react';
import './Tiles.scss';

class Tile extends React.Component{
  constructor(props){
    super(props);
    this.span = props.span || 1;
    this.backgroundClass= props.backgroundClass || 'brandlightgrey-bg';
    this.iconImg= props.iconImg;
    this.label= props.label || '';
    this.centerText= props.centerText;
    this.bgURL = props.bgURL || '';
  }

  render(){

    return (
      <div className={`tile span-${this.span.toString()} ${this.backgroundClass}`} style={{backgroundImage: `url(${this.bgURL})`}}>
        <p className="tile-label brandwhite-bg">{this.label}</p>
      </div>
    )
  }
}

export default Tile;