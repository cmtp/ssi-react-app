import React from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './Loading';

function RenderCatalogItem({ item }) {
  return (
    <Card>
      <Link to={`/catalog/${item.id}`}>
        <CardImg width="100%" src={item.image} alt={item.name} />
        <CardImgOverlay>
          <CardTitle>{item.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Catalog = props => {
  var catalog = props.items.items.map(item => {
    return (
      <div key={item.id} className="col-12 col-md-5 m-1">
        <RenderCatalogItem item={item} onClick={props.onClick} />
      </div>
    );
  });

  if (props.items.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.items.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.items.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Catalog</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Catalog</h3>
            <hr />
          </div>
        </div>
        <div className="row">{catalog}</div>
      </div>
    );
  }
};

export default Catalog;
