import React from 'react';

import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap';
import Loading from './Loading';

const RenderCard = ({ item, isLoading, errMess }) => {
  console.log(isLoading);
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else {
    return (
      <Card>
        <CardImg src={item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.jobPosition ? (
            <CardSubtitle>{item.jobPosition}</CardSubtitle>
          ) : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
  }
};

const Home = props => (
  <div className="container">
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.item}
            isLoading={props.itemsLoading}
            errMess={props.itemsErrMess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.employee}
            isLoading={props.itemsLoading}
            errMess={props.itemsErrMess}
          />
        </div>
      </div>
    </div>
  </div>
);
export default Home;
