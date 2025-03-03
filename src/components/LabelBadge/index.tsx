import {Text, View, ViewStyle} from 'react-native';
import {styles} from './style';
import {iLabelBadgeProps} from './types';

const LabelBadge = ({variant, status}: iLabelBadgeProps) => {
  return (
    <View
      style={[
        styles.badge,
        styles[variant as keyof typeof styles] as ViewStyle,
      ]}>
      <Text
        style={[
          styles.badgeText,
          styles[`${variant}_text` as keyof typeof styles],
        ]}>
        {status}
      </Text>
    </View>
  );
};

export default LabelBadge;
