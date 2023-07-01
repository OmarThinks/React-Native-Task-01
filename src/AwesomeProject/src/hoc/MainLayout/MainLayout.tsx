import { AppBar as AppBarOriginal } from '@components';
import React from 'react';
import { View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { useAppTheme } from '@theme';
import { useSelector } from 'react-redux';
import { themeSelector } from '@redux';
import { NavigationNameType } from '@navigation';

const AppBar = ({ title }: {title?: string}) => <AppBarOriginal title={title} />;

const MainLayout = (
  ScreenComponent: React.FC,
  {
    isScrollable = true,
    hasAppBar = true,
    title = '',
    hzPadding = 15,
    vrPadding = 15,
    prevScreen
  }: {
    isScrollable?: boolean;
    hasAppBar?: boolean;
    title?: string;
    hzPadding?: number;
    vrPadding?: number;
    prevScreen?: NavigationNameType;
  } = {}
) => {
  const InnerMainLayout = () => {
    const appBar = hasAppBar && <AppBar title={title} />;
    const colors = useAppTheme().colors;
    const theme = useSelector(themeSelector);

    // console.log('Title', title);

    if (isScrollable) {
      return (
        <SafeAreaView
          style={{
            backgroundColor: colors.appBg,
            flex: 1
            // minHeight: '100%'
          }}>
          <StatusBar
            barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
            backgroundColor={colors.appBg}
          />
          {appBar}
          <ScrollView
            style={{
              flexGrow: 1
              // flexShrink: 1,
              // minHeight: '100%',
              // backgroundColor: 'red'
            }}
            contentContainerStyle={{
              flexGrow: 1
              // flexShrink: 1
              // minHeight: '100%'
            }}>
            <View
              style={{
                marginHorizontal: hzPadding,
                marginVertical: vrPadding,
                flexGrow: 1,
                alignSelf: 'stretch'
              }}>
              <ScreenComponent />
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        {appBar}
        <ScreenComponent />
      </View>
    );
  };

  return InnerMainLayout;
};

export default MainLayout;
