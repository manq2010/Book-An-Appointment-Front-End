import Class from './Class';

const ReservationsPage = () => {
  const data = [
    {
      id: 1,
      name: 'Front-End Mentor',
      description: 'Specialised support for React',
      photo: 'https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/701ee/react.jpg',
      price: '$300',
      mentor_name: 'Alex Halle',
      duration: '6 weeks',
    },
    {
      id: 1,
      name: 'Back-End Mentor',
      description: 'Specialised support for Back end developemt focused on Ruby on rails',
      photo: 'https://community-cdn-digitalocean-com.global.ssl.fastly.net/F3TGiJdSeGTcvD6QVcuWb2Mg',
      price: '$300',
      mentor_name: 'Json Mayers',
      duration: '6 weeks',
    },
    {
      id: 1,
      name: 'Data Science  Mentor',
      description: 'Specialised support for Numphy and Panda Libraries',
      photo: 'https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/hero-python-data-science-courses.jpg',
      price: '$300',
      mentor_name: 'Van Helsing',
      duration: '3 weeks',
    },
    {
      id: 1,
      name: 'Pentesting  Mentor',
      description: 'Specialised support for Ethical Hacing and pen testing',
      photo: 'https://www.shutterstock.com/image-vector/certified-ethical-hacker-ceh-icon-260nw-2157536639.jpg',
      price: '$300',
      mentor_name: 'Jim Tucker',
      duration: '2 weeks',
    },
  ];

  return (
    <div>
      <div>
        <ul>
          <li >MODELS</li>
          <li >LIFESTYLE</li>
          <li >SHOP</li>
          <li >RESERVED</li>
        </ul>
      </div>
      <div >
        <h1 >RESERVED Classes</h1>
        <h4 >Here are the classes you have reserved</h4>
        <hr />
        <div >
          <div>
            {data.map((car) => (
              <Class data={car} key={data.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationsPage;