import AsyncStorage from "@react-native-async-storage/async-storage";

export const getItem = async (key: string) => {
  const item = await AsyncStorage.getItem(key);
  return item ? JSON.parse(item) : [];
};

export const setItem = async (key: string, value: any) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};
