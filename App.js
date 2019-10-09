import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import VideoWithControls from './components/VideoWithControls';

export default class App extends Component {
  render() {
    return (
      <View>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <VideoWithControls />
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});
