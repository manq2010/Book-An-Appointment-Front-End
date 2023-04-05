import PropTypes from 'prop-types';

const Class = ({ data }) => {
  const removeBtn = 'https://img.icons8.com/ios/50/null/delete-forever--v1.png';

  return (
    <article>
      <div >
        <img src={data.photo} alt={`${data.name}`} />
        <div  />
      </div>
      <div >
        <p >{data.name}</p>
        <p >
          {data.mentor_name}
        </p>
        <p>
          {data.duration}
        </p>
                <p>
          {data.price}
        </p>
        <p>
          {data.description}
        </p>
      </div>
      <div >
        <a>
          <img src={removeBtn} alt="Remove Button" />
        </a>
      </div>
    </article>
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