import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderCatalogItem({ item, onClick }) {
  return (
    <Card
      onClick={() => {
        onClick(item.id);
      }}
    >
      <CardImg width="100%" src={item.image} alt={item.name} />
      <CardImgOverlay>
        <CardTitle>{item.name}</CardTitle>
      </CardImgOverlay>
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
      <div className="row">{catalog}</div>
    </div>
  );
};

export default Catalog;
