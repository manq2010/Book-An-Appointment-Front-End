import { Link } from 'react-router-dom';
import {
  Container, Row, Col, ListGroup,
} from 'react-bootstrap';

import Class from './Class';

const ReservationsPage = () => {
  const data = [
    {
      id: 1,
      name: 'Front-End',
      description: 'Specialised support for React',
      photo:
        'https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/701ee/react.jpg',
      price: '$300',
      mentor_name: 'Alex Halle',
      duration: '6 weeks',
    },
    {
      id: 1,
      name: 'Back-End',
      description:
        'Specialised support for Back end developemt focused on Ruby on rails',
      photo:
        'https://community-cdn-digitalocean-com.global.ssl.fastly.net/F3TGiJdSeGTcvD6QVcuWb2Mg',
      price: '$300',
      mentor_name: 'Json Mayers',
      duration: '6 weeks',
    },
    {
      id: 1,
      name: 'Data Science',
      description: 'Specialised support for Numphy and Panda Libraries',
      photo:
        'https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/hero-python-data-science-courses.jpg',
      price: '$300',
      mentor_name: 'Van Helsing',
      duration: '3 weeks',
    },
    {
      id: 1,
      name: 'Ethical Hacking ',
      description: 'Specialised support for Ethical Hacing and pen testing',
      photo:
        'https://www.shutterstock.com/image-vector/certified-ethical-hacker-ceh-icon-260nw-2157536639.jpg',
      price: '$300',
      mentor_name: 'Jim Tucker',
      duration: '2 weeks',
    },
  ];

  return (
    <Container className="m-0 p-1">
      <Row>
        <Col>
          <div className="container-fluid ">
            <div className="row">
              <div className="col-lg-3 bg-slate-100 d-none d-lg-block border-end border-gray-300 text-left">
                <Link to="/" className="text-decoration-none">
                  <p className="fs-5 fw-bold">LOGO</p>
                </Link>
                <ListGroup className="mt-4 list-unstyled no-list-style">
                  <li className="p-2 fs-4 fw-semibold pl-5">CLASSES</li>
                  <li className="p-2 fs-4 fw-semibold pl-5">NEW RESERVATION</li>
                  <li className="p-2 fs-4 fw-semibold pl-5  bg-success text-white">
                    MY RESERVATION
                  </li>
                  <li className="p-2 fs-4 fw-semibold pl-5">ADD CLASSES</li>
                </ListGroup>
              </div>
              <div className="col-lg-9 bg-light">
                <div className="container py-4">
                  <h1 className="text-center fs-3 fs-lg-5 fw-bold text-gray-800 mb-4">
                    RESERVED CLASSES
                  </h1>
                  <h4 className="text-center fs-6 fs-lg-4 fw-light text-gray-700 mb-4">
                    Here are the classes you have reserved
                  </h4>
                  <hr className="w-25 mx-auto my-4 border-2 border-dark" />
                  <div className="row justify-content-center">
                    {data.map((classes) => (
                      <Class data={classes} key={classes.id} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReservationsPage;
