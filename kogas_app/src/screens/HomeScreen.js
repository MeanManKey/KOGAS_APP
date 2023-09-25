import { Pressable, StyleSheet, Text, View } from 'react-native';
import { BLACK, GRAY } from '../color';
import {useNavigation} from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../components/ListItem';

const HomeScreen = () => {
  const navigation = useNavigation();
  const mydocs = {
    all: 3,
    clear: 2,
  }
  const newdocs = {
    all: 4,
    clear: 2,
  }
  const myperc = Math.floor(mydocs.clear / mydocs.all * 100);
  const newperc = Math.floor(mydocs.clear / mydocs.all * 100);

  const List = [
    {
      id: 1,
      status: '서명진행중', //상태
      title: '모바일 구축사업 인수인계 협의2',
      department: '수요공급처',
      name: 'aaa',
      registrationDate: '2023-09-25', //등록 날짜
      content: [{
        department: '계약운용부',
        name: 'aaa',
        status: '서명완료',
        date: '2023/09/25 15:00'
      }, {
        department: '발전영업부',
        name: 'bbb',
        status: '서명완료',
        date: '2023/09/25 15:00'
        }]
    },
    {
      id: 2,
      status: '서명완료', //상태
      title: '모바일 구축사업 인수인계 협의1',
      department: '수요공급처',
      name: 'bbb',
      registrationDate: '2023-09-25', //등록 날짜
      content: [{department: '발전영업부', name: 'bbb', status: '서명완료', date: '2023/09/25 15:00'}]
    },
  ];

  return (
    <View>
    <View>
      <Text>내 진행 상황</Text>
      <Pressable
            onPress={() => {
              navigation.navigate('SignatureList');
            }}
        hitSlop={10}
        style={styles.mydocs}
      >
        <View>
          <Text>{myperc}%</Text><Text>내 문서 진행률</Text>
          <Text>서명 대상자 {mydocs.all}명 중 {mydocs.clear}명이 서명을 완료하였습니다.</Text>
        </View>
      </Pressable>
      <Pressable
            // onPress={() => {
            //   navigation.navigate('SignatureList');
            // }}
        hitSlop={10}
        style={styles.mydocs}
      >
        <View>
          <Text>{newperc}%</Text><Text>최근 문서 진행률</Text>
          <Text>서명 대상자 {newdocs.all}명 중 {newdocs.clear}명이 서명을 완료하였습니다.</Text>
        </View>
      </Pressable>
    </View>
    <View>
        <Text style={styles.v}>서명 이력</Text>
        <View>
        <FlatList
        data={List}
        renderItem={({item}) => (
          <ListItem name="SignatureListScreen" item={item} />
        )}
        // windowSize={5}
        ListHeaderComponent={View}
        // ListHeaderComponentStyle={{height: 10}}
      />
        </View>
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mydocs: {
    backgroundColor: GRAY,
    marginTop:10,
  },
  v: {
    marginTop: 10,
    fontWeight: 'bold',
  }
});
export default HomeScreen;
