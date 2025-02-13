import {Pressable, StyleSheet, Text, View} from 'react-native';
import {memo} from 'react';
import {useNavigation} from '@react-navigation/native';

const ListItem = memo(({name, item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
          navigation.navigate('ListDetail', {
            status: item.status,
            title: item.title,
            department: item.department,
            name: item.name,
            registrationDate: item.registrationDate,
            content: item.content,
          });
    }}
    hitSlop={10}
    >
      <View style={styles.container}>
        <View>
          <Text>{item.status}</Text>
          <Text>제목: {item.title}</Text>
          <Text>기안자: {item.department} {item.name}</Text>
        </View>

        <View>
          <Text>기안일자: {item.registrationDate}</Text>
        </View>
      </View>
    </Pressable>
  );
});

ListItem.displayName = 'ListItem';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: 10,
    marginVertical:5,
    borderBottomWidth: 0.5,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
});

export default ListItem;
