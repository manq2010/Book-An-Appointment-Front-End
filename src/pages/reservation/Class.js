import PropTypes from 'prop-types';
import {
  Container, Row, Col,
} from 'react-bootstrap';

const Class = ({ data }) => {
  const removeBtn = 'https://img.icons8.com/ios/50/null/delete-forever--v1.png';

  return (
    <Container>
      <Row>
        <Col>
          <div className="card bg-FFB400 rounded-xl">
            <div className="row g-0">
              <div className="col-md-5">
                <div className="card-img w-100 h-100 position-relative rounded-start">
                  <div className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                    <img
                      src={data.photo}
                      alt={`${data.name}`}
                      className="rounded-full img-fluid max-width-100 max-height-100"
                    />
                  </div>
                  <div className="overlay w-100 h-100 bg-black opacity-40 rounded-start" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="card-body text-gray-700 mx-2 my-4">
                  <h1 className="card-title text-xl font-semibold mb-2">
                    {data.name}
                  </h1>
                  <hr className="w-24 border-t-white mb-3" />
                  <p className="card-text mb-1">
                    Mentor:
                    {' '}
                    {data.mentor_name}
                  </p>
                  <p className="card-text mb-1">
                    Duration:
                    {' '}
                    {data.duration}
                  </p>
                  <p className="card-text mb-1">
                    Price:
                    {' '}
                    {data.price}
                  </p>
                  <p className="card-text">
                    Info:
                    {' '}
                    {data.description}
                  </p>
                </div>
                <div className="social position-absolute bottom-0 end-0 m-3">
                  <img src={removeBtn} alt="remove" className="text-danger delete-reservation" />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

Class.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    mentor_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default Class;
