import React from 'react';
import { View, Image } from 'react-native';
import batLogo from '../../../assets/batman-logo.png'
import { styles } from './BatLogoStyles';

export function BatLogo() {
  return (
        <Image
        source={batLogo}
        style={styles.logo}
        />
      );
}