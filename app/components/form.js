import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text, Form, Item, Input, Label } from 'native-base';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions

class MyForm extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    //  this.props.getData(); //call our action

  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent title="ABC">
              <Text>Absbsbsb</Text>
            </Button>
          </Left>
          <Body>
            <Segment>
              <Button title="" first><Text>Puppies</Text></Button>
              <Button title="" last active><Text>Cubs</Text></Button>
            </Segment>
          </Body>
          <Right>
            <Button title="BBB" transparent>
              <Text>A sk as </Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})



function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(null, mapDispatchToProps)(MyForm);