import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

const SocialMediaIcons = () => {
  return (
   <div className="social-media-icons">
    <Icon circular size={'big'} name="twitter" />
    <Icon circular size={'big'} name="facebook square" />
    <Icon circular size={'big'} name="instagram" />
   </div>
  )
};

export default SocialMediaIcons;
