import React, { useState } from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';

const Favorites: React.FC = () => {
  const [ favorites, setFavorites ] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(resp => {
      if (resp) {
        const favoritedTeacher = JSON.parse(resp);
       
        setFavorites(favoritedTeacher);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });
  
  return (
    <View style={styles.container}> 
      <PageHeader title="Meus Proffys favoritos"/>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {favorites.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default Favorites;