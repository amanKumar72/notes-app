import React from 'react';
import { Pressable, Text } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

const Toggle = ({
  isDark,
  setIsDark,
}: {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}) => {
  
  return (
    <Pressable hitSlop={30} onPress={() => setIsDark(!isDark)}>
      <Text style={{ fontSize: 22 }} selectable={false}>
        {isDark ? (
          <FontAwesome5 name="moon" size={22} color="#ffffffff" />
        ) : (
          <AntDesign name="sun" size={22} color="rgba(0, 0, 0, 1)" />
        )}
      </Text>
    </Pressable>
  );
};

export default Toggle;
