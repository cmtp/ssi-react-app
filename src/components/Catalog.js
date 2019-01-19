import React from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle
} from 'reactstrap';

const Catalog = props => {
  const catalog = props.items.map(item => (
    <div key={item.id} className="col-12 col-md-5 m-1">
      <Card
        onClick={() => {
          props.onClick(item.id);
        }}
      >
        <CardImg width="100%" object="true" src={item.image} alt={item.name} />
        <CardImgOverlay>
          <CardTitle>{item.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  ));
  return <div className="row">{catalog}</div>;
};

Catalog.propTypes = {
  items: Array,
  onClick: Function,
};

export default Catalog;
