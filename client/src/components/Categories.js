import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Header, Container } from 'semantic-ui-react';
import { getCats } from '../reducers/categories';
// import { Link } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getCats())
  };//end of componentDidMount

  categories = () => {
    return this.props.categories.map( category =>
      <div>
          <Card key={ category.id }>
            <Card.Content>{category.name}</Card.Content>
          </Card>
      </div>
    )
  };//end of categories

  render() {
    return (
      <Container>
          <br />
        <Header as="h1" textAlign="center">Let's Play Jeopardy!</Header>
        <Header as="h3" textAlign="center">Pick a Category:</Header>
        <br />
        <Card.Group itemsPerRow={3}>
          { this.categories()}
        </Card.Group>
      </Container>
    )
  }
};//end of categories

const mapStateToProps = (state) => {
  return { categories: state.categories };
};//end of mapStateToProps

export default connect(mapStateToProps)(App);
