import { View, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Color } from '@/theme/Colors';

interface Props {
  imageUrl?: string;
  iconSize?: number;
  iconColor?: string;
  iconName?: keyof typeof Ionicons.glyphMap;
}
const AvatarImage: React.FC<Props> = ({ imageUrl, iconSize, iconColor, iconName }) => {
  const iconSizes = iconSize ?? 40;
  return (
    <View>
      {imageUrl ?
        <Image source={{ uri: imageUrl }} style={{ width: iconSizes, height: iconSizes, aspectRatio: 1, borderRadius: ((iconSizes ?? 0) / 2) }} />
        : <Ionicons name={iconName || 'person-circle-sharp'} size={Number(iconSizes)} color={iconColor ?? Color.primary} />}
    </View>
  )
}

export default AvatarImage