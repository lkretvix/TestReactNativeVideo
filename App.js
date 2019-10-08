/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

import Video from 'react-native-video';
import ProgressBar from 'react-native-progress/Bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function secondsToTime(time) {
  return `${Math.floor(time / 60)} : ${time % 60 < 10 ? '0' : ''} ${time % 60}`;
}

export default class App extends Component {
  state = {
    paused: true,
    progress: 0,
    duration: 0,
  };

  handleMainButtonTouch = () => {
    if (this.state.progress >= 1) {
      this.player.seek(0);
    }
    this.setState(state => {
      return {paused: !state.paused};
    });
  };
  handleProgressPress = e => {
    const position = e.nativeEvent.locationX;
    const progress = (position / 250) * this.state.duration;
    this.player.seek(progress);
  };
  handleEnd = () => {
    this.setState({paused: true, progress: 1});
  };
  handleProgress = progress => {
    this.setState({
      progress: progress.currentTime / this.state.duration,
    });
  };
  handleLoad = meta => {
    this.setState({
      duration: meta.duration,
    });
  };

  render() {
    const {width} = Dimensions.get('window');
    const height = width * 0.5265;
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{height: height + 48}}>
              <Video
                source={require('./EdPowerBreak.mp4')}
                paused={this.state.paused}
                resizeMode="contain"
                onLoad={this.handleLoad}
                onProgress={this.handleProgress}
                onEnd={this.handleEnd}
                ref={ref => (this.player = ref)}
                style={{height, width: '100%'}}
              />
            </View>
            <View style={styles.controls}>
              <TouchableWithoutFeedback onPress={this.handleMainButtonTouch}>
                <Icon
                  name={!this.state.paused ? 'pause' : 'play'}
                  size={30}
                  color={'#FFF'}
                />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={this.handleProgressPress}>
                <View>
                  <ProgressBar
                    progress={this.state.progress}
                    color="#FFF"
                    unfilledColor="rgba(255,255,255,0.5)"
                    borderColor="#FFF"
                    width={250}
                    height={20}
                  />
                </View>
              </TouchableWithoutFeedback>
              <Text style={styles.duration}>
                {secondsToTime(
                  Math.floor(this.state.progress * this.state.duration),
                )}
              </Text>
            </View>
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

  body: {
    backgroundColor: Colors.white,
  },
  controls: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 48,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  mainButton: {
    marginRight: 15,
  },
  duration: {
    color: '#FFF',
    marginLeft: 15,
  },
});
