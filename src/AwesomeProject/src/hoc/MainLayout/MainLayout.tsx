import {AppBar as AppBarOriginal} from '@components';
import {themeSelector} from '@redux';
import {useAppTheme} from '@theme';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {useSelector} from 'react-redux';

const AppBar = ({
  title,
  hasBackButton = true,
}: {
  title?: string;
  hasBackButton?: boolean;
}) => <AppBarOriginal title={title} hasBackButton={hasBackButton} />;

const MainLayout = (
  ScreenComponent: React.FC,
  {
    isScrollable = true,
    hasAppBar = true,
    title = '',
    hzPadding = 20,
    vrPadding = 20,
    hasBackButton = true,
  }: {
    isScrollable?: boolean;
    hasAppBar?: boolean;
    title?: string;
    hzPadding?: number;
    vrPadding?: number;
    hasBackButton?: boolean;
  } = {},
) => {
  const InnerMainLayout = () => {
    const appBar = hasAppBar && (
      <AppBar title={title} hasBackButton={hasBackButton} />
    );
    const colors = useAppTheme().colors;
    const theme = useSelector(themeSelector);

    // console.log('Title', title);

    if (isScrollable) {
      return (
        <SafeAreaView
          style={{
            backgroundColor: colors.appBg,
            flex: 1,
            // minHeight: '100%'
          }}>
          <StatusBar
            barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
            backgroundColor={colors.appBg}
          />
          {appBar}
          <ScrollView
            style={{
              flexGrow: 1,
              // flexShrink: 1,
              // minHeight: '100%',
              // backgroundColor: 'red'
            }}
            contentContainerStyle={{
              flexGrow: 1,
              // flexShrink: 1
              // minHeight: '100%'
            }}>
            <View
              style={{
                marginHorizontal: hzPadding,
                marginVertical: vrPadding,
                flexGrow: 1,
                alignSelf: 'stretch',
              }}>
              <ScreenComponent />
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
    return (
      <View style={{flex: 1}}>
        {appBar}
        <ScreenComponent />
      </View>
    );
  };

  return InnerMainLayout;
};

export default MainLayout;
