import { Constants } from 'expo';
import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducers from './src/reducers/index';
import { setLocalNotifications } from './src/utils/api';

import AddDeck from './src/components/AddDeck';
import DeckList from './src/components/DeckList';
import NewQuestionView from './src/components/NewQuestionView';
import SingleDeckView from './src/components/SingleDeckView'
import QuizView from './src/components/QuizView';

function FlashCardStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: DeckList
  },
  AddDeck: {
    screen: AddDeck
  }
},
{
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    activeTintColor: 'rgb(98,108,118)',
    style: {
      height: 45,
      backgroundColor: '#002e61',
    }
  }
})



const Stack = StackNavigator({
  Home: {
    screen: Tabs,
  },
  SingleDeckView: {
    screen: SingleDeckView
  },
  NewQuestionView: {
    screen: NewQuestionView
  },
  QuizView: {
    screen: QuizView
  },
},
{
  headerMode: 'none'
})

export default class App extends React.Component {
  componentDidMount() {
      setLocalNotifications();
  }

  render() {
    const store = createStore(reducers, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <FlashCardStatusBar backgroundColor={'#198ea5'} barStyle={'light-content'}/>
          <Stack />
        </View>
      </Provider>
    );
  }
}