import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {StyleSheet, Text, View} from 'react-native';
import VideoWithControls from './VideoWithControls';

export default class TextCategories extends Component {
  state = {
    title: this.props.title,
    categories: this.props.categories,
    video: null,
  };

  render() {
    const {categories, title, video} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{title}</Text>
        </View>
        {video ? (
          <VideoWithControls video={video} />
        ) : (
          Object.keys(categories).map(category => (
            <Text
              style={styles.categories}
              onPress={() => {
                const hasCategories = !!categories[category].content;
                const hasVideo = !!categories[category].video;

                this.setState({
                  categories: hasCategories
                    ? categories[category].content
                    : categories,
                  video: hasVideo ? categories[category].video : null,
                  title:
                    hasCategories || hasVideo
                      ? categories[category].title
                      : this.state.title,
                });
              }}>
              {categories[category].title}
            </Text>
          ))
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {width: '100%', alignItems: 'center', justifyContent: 'center'},
  headerContainer: {
    backgroundColor: 'rgba(255,0,0,1)',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 72,
    paddingBottom: 24,
  },
  categories: {
    fontSize: 48,
  },
});

TextCategories.PropTypes = {
  categories: PropTypes.object.isRequired,
};
