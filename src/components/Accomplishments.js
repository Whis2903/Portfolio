import React from 'react';
import techtrek from '../assets/img/events/techtrek.png';
import Innofusion from '../assets/img/events/Innofusion.jpg'; 
import Aicte from '../assets/img/events/aicte.png';
import ML from '../assets/img/events/aws1.png';

export const Accomplishments = () => {
  return (
    <section style={{ backgroundColor: '#000', padding: '50px 0' }}>
      <div className="container">
        <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: '50px' }}>Certifications</h2>
        <div className="row">
          <AccomplishmentCard
            imgUrl={techtrek}
          />
          <AccomplishmentCard
            imgUrl={Innofusion}
          />
          <AccomplishmentCard
            imgUrl={Aicte}
          />
          <AccomplishmentCard
            imgUrl={ML}
          />
          <AccomplishmentCard
            imgUrl={techtrek}
          />
          {/* Add more cards for other accomplishments */}
        </div>
      </div>
      {/* White line */}
      <hr style={{ borderTop: '1px solid #fff', margin: '50px 0', width: '50%', marginLeft: 'auto', marginRight: 'auto' }} />
    </section>
  );
};

const AccomplishmentCard = ({ imgUrl }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 bg-dark text-white rounded">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <div className="card-img-top" style={{ backgroundColor: '#000', borderTopLeftRadius: '15px', borderTopRightRadius: '15px', overflow: 'hidden' }}>
            <img src={imgUrl} alt="Accomplishment" style={{ width: '100%' }} />
          </div>
        </a>
      </div>
    </div>
  );
};
