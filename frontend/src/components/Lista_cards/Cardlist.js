import React from 'react';
import produtos_json from '../lista_produtos';
import Card from '../Card/Card';

class Cardlist extends React.Component {
  render() {
    return (
      <div className="lista-produtos-grid">
        <Card />
      </div>
    );
  }
};

export default Cardlist;
