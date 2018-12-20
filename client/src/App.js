import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Categories from './components/Categories';

const Category = () => (
  <Fragment>
    <Container>
      <Switch>
        <Route exact path="/categories" component={Categories}/>
      </Switch>
    </Container>
  </Fragment>
);

export default Category;