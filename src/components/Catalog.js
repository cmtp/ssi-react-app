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
  var catalog = props.items.map(item => {
    return (
      <div key={item.id} className="col-12 col-md-5 m-1">
        <RenderCatalogItem item={item} onClick={props.onClick} />
      </div>
    );
  });
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
};

export default Catalog;
