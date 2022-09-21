import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <>
        <Title headline="Missões" />
        <div data-testid="missions">
          {missions.map((element, index) => (
            <MissionCard
              key={ index }
              name={ element.name }
              year={ element.year }
              country={ element.country }
              destination={ element.destination }
            />
          ))}
        </div>
      </>
    );
  }
}

export default Missions;
