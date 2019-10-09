import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import TextCategories from './components/TextCategories';

import {MAIN_CATEGORIES} from './premade_data/categories.js';
export default class App extends Component {
  render() {
    return (
      <View>
        <SafeAreaView style={styles.container}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.mainContent}>
              <TextCategories title="Home" categories={MAIN_CATEGORIES} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {width: '100%'},
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  mainContent: {width: '100%', alignItems: 'center', justifyContent: 'center'},
});
