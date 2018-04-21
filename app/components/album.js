import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Image } from 'react-native';
import { Container, Header, Title, 
    Content, Footer, FooterTab,
     Button, Left, Right, Body, 
     Icon,Text,Card,CardItem,Thumbnail} from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'; //Import your actions


class Album extends Component {

    constructor(props) {
        super(props);
        console.log(props);
      }
     renderList(){
       console.log()
      let a=[];
      a=this.props.data
      return a.map(i=>{
        console.log(i);
        return <Card key={i.title}>   
        <CardItem>
         <Left>
         <Image source={{uri: 'https://singhpkblog.files.wordpress.com/2018/04/cropped-prabhashimage.jpg'}} style={{height: 50, width:50 }}/>
           <Body>
             <Text>Techno singh</Text>
             <Text note>{i.title}</Text>
           </Body>
         </Left>
       </CardItem>
       <CardItem cardBody>
         <Image source={{uri: 'https://singhpkblog.files.wordpress.com/2018/04/cropped-prabhashimage.jpg'}} style={{height: 200, width: null, flex: 1}}/>
       </CardItem>
       <CardItem>
         <Left>
           <Button transparent>
             <Icon active name="thumbs-up" />
             <Text>12 Likes</Text>
           </Button>
         </Left>
         <Body>
           <Button transparent>
             <Icon active name="chatbubbles" />
             <Text>4 Comments</Text>
           </Button>
         </Body>
         <Right>
           <Text>11h ago</Text>
         </Right>
       </CardItem>
       </Card>
      })


     }
      componentDidMount() {
        this.props.getData(); 
        console.log(this.props)
      }  

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>

          <Card>   
         <CardItem>
          <Left>
          <Image source={{uri: 'https://singhpkblog.files.wordpress.com/2018/04/cropped-prabhashimage.jpg'}} style={{height: 50, width:50 }}/>
            <Body>
              <Text>Techno singh</Text>
              <Text note>React</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: 'https://singhpkblog.files.wordpress.com/2018/04/cropped-prabhashimage.jpg'}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
        </Card>
         
        {this.renderList()}
       
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
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

  function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer2.loading,
        data: state.dataReducer2.data
    }
}
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Album);