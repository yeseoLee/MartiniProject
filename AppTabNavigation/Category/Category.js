import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

export default class ListHeaderExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem itemHeader first>
              <Text>전공</Text>
            </ListItem>
            <ListItem >
              <Text>전공 필수</Text>
            </ListItem>
            <ListItem>
              <Text>전공 선택</Text>
            </ListItem>
            <ListItem itemHeader>
              <Text>비전공</Text>
            </ListItem>
            <ListItem>
              <Text>중핵 필수</Text>
            </ListItem>
            <ListItem>
              <Text>중핵 선택</Text>
            </ListItem>
            <ListItem>
              <Text>기초 교양</Text>
            </ListItem>
            <ListItem itemHeader>
              <Text>기타</Text>
            </ListItem>
            <ListItem>
              <Text>토익 & 토플</Text>
            </ListItem>
            <ListItem>
              <Text>자격증</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}