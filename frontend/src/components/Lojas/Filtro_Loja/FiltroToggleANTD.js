/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Checkbox, Collapse } from 'antd';
import filtroCategoria from '../../../Dados/Filtro_toggle_loja/lista_filtro_categoria';
import './filtrotoggleANTD.css';

const { Panel } = Collapse;

function FiltroToggleANTD({ handleFilters }) {
  const [Checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    handleFilters(newChecked);
  };

  return (
    <>
      <Collapse defaultActiveKey={[0]} className="filtro-antd">
        <Panel header={filtroCategoria[0].nomeFiltro} key="1">
          {filtroCategoria[0].opcoesFiltro.map((value) => (
            <React.Fragment key={value.id}>
              <Checkbox
                onChange={() => handleToggle(value.name)}
                type="checkbox"
                checked={Checked.indexOf(value.name) !== -1}
              />
              <span className="filtro-antd-opcao">{value.name}</span>
            </React.Fragment>
          ))}
        </Panel>
      </Collapse>
    </>
  );
}

export default FiltroToggleANTD;
