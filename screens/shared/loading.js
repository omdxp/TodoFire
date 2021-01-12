import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const LoadingIcon = ({isIconAnimating}) => (
  <ActivityIndicator size="large" color="#FF6699" animating={isIconAnimating} />
);

export default LoadingIcon;
