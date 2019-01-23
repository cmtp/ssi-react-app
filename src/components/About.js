import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const RenderEmployee = props => {
  const imgStyle = {
    maxHeight: 100,
    maxWidth: 100,
  };

  return (
    <Media tag="li" className="col-12 mt-5">
      <Media left middle>
        <Media
          object
          src={props.employee.image}
          style={imgStyle}
          alt={props.employee.name}
        />
      </Media>
      <Media body>
        <Media heading>{props.employee.name}</Media>
        {props.employee.jobPosition}
      </Media>
    </Media>
  );
};

const About = props => {
  const employees = props.employees.map(employee => {
    return <RenderEmployee key={employee.id} employee={employee} />;
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <h2>Our History</h2>
          <p>
            Started in 2013, SSI quickly established itself as a safety icon par
            excellence in USA. With its unique brand of world fusion safety that
            can be found nowhere else, it enjoys patronage from the A-list
            clientele in USA. Featuring four of the best three-star Award CEO in
            the world, you never know what will arrive on your mind the next
            time you visit us.
          </p>
          <p>
            The enterprise traces its humble beginnings to{' '}
            <em>The BUILDING SEC CBA</em>, a successful chain started by our
            CEO, Msc. Valentin Laime, that featured for the first time the
            world's best enterprises in building safety.
          </p>
        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">
              Facts At a Glance
            </CardHeader>
            <CardBody>
              <dl className="row p-1">
                <dt className="col-6">Started</dt>
                <dd className="col-6">1 Jan. 2013</dd>
                <dt className="col-6">Major Stake Holder</dt>
                <dd className="col-6">Jatun SRL.</dd>
                <dt className="col-6">Last Year's Turnover</dt>
                <dd className="col-6">$2,478,220</dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6">40</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col-12">
          <Card>
            <CardBody className="bg-faded">
              <blockquote className="blockquote">
                <p className="mb-0">
                  You better cut the pizza in four pieces because I'm not hungry
                  enough to eat six.
                </p>
                <footer className="blockquote-footer">
                  Yogi Berra,
                  <cite title="Source Title">
                    The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books,
                    2014
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h2>Corporate employeeship</h2>
        </div>
        <div className="col-12">
          <Media list>{employees}</Media>
        </div>
      </div>
    </div>
  );
};

export default About;
