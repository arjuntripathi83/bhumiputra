import { Badge, IconButton } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const BadgeIconButton = ({ icon, badgeContent, onPress, size }) => {
  return (
    <View>
      <IconButton size={size} icon={icon} onPress={onPress} />
      {badgeContent > 0 && <Badge style={styles.badge}>{badgeContent}</Badge>}
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: -2,
    right: -2
  }
});

export default BadgeIconButton;
