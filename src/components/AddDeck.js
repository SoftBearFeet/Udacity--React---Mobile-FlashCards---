import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appStartFetchDecks, appSaveTitle } from '../actions/deck-actions'

class DeckList extends Component {
  componentDidMount() {
    this.props.appStartFetchDecks();
  };

  state = {
    deckTitle: '',
  };

  saveDeckTitle = () => {
    const { deckTitle } = this.state;
    this.props.appSaveTitle(deckTitle);
    return this.setState({
      deckTitle: '',
    })
  }

  render() {
    const { deckTitle } = this.state;
    console.log(this.props);
    return (
      <View>
        <Text>Enter a Deck Title for a New Deck</Text>
        <KeyboardAvoidingView>
          <TextInput 
          value={deckTitle} 
          onChangeText={deckTitle => this.setState({ deckTitle })} placeholder={'Enter Deck Title'} 
          returnKeyType={'done'} 
          keyboardType={'email-address'} 
          autoFocus={true} 
          keyboardAppearance='light'/>
          <TouchableOpacity onPress={this.saveDeckTitle}>
            <Text>Submitt</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    state,
  }
}

export default connect(mapStateToProps, { appStartFetchDecks, appSaveTitle })(DeckList)