/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';

import React, { useState } from 'react';
// import { Checkbox, Collapse } from 'antd';
import './filtrotoggleANTD.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

// const { Panel } = Collapse;

function FiltroToggleANTD({
  handleFilters1,
  handleFilters2,
  handleFilters3,
  handleFilters4,
  handleFilters5,
  filtros,
}) {
  const [Checked1, setChecked1] = useState([]);
  const [Checked2, setChecked2] = useState([]);
  const [Checked3, setChecked3] = useState([]);
  const [Checked4, setChecked4] = useState([]);
  const [Checked5, setChecked5] = useState([]);

  const ajusteChecked1 = (value) => {
    const currentIndex = Checked1.indexOf(value);
    const newChecked1 = [...Checked1];

    if (currentIndex === -1) {
      newChecked1.push(value);
    } else {
      newChecked1.splice(currentIndex, 1);
    }

    setChecked1(newChecked1);
    return newChecked1;
  };

  const ajusteChecked2 = (value) => {
    const currentIndex = Checked2.indexOf(value);
    const newChecked2 = [...Checked2];

    if (currentIndex === -1) {
      newChecked2.push(value);
    } else {
      newChecked2.splice(currentIndex, 1);
    }

    setChecked2(newChecked2);
    return newChecked2;
  };

  const ajusteChecked3 = (value) => {
    const currentIndex = Checked3.indexOf(value);
    const newChecked3 = [...Checked3];

    if (currentIndex === -1) {
      newChecked3.push(value);
    } else {
      newChecked3.splice(currentIndex, 1);
    }

    setChecked3(newChecked3);
    return newChecked3;
  };

  const ajusteChecked4 = (value) => {
    const currentIndex = Checked4.indexOf(value);
    const newChecked4 = [...Checked4];

    if (currentIndex === -1) {
      newChecked4.push(value);
    } else {
      newChecked4.splice(currentIndex, 1);
    }

    setChecked4(newChecked4);
    return newChecked4;
  };

  const ajusteChecked5 = (value) => {
    const currentIndex = Checked5.indexOf(value);
    const newChecked5 = [...Checked5];

    if (currentIndex === -1) {
      newChecked5.push(value);
    } else {
      newChecked5.splice(currentIndex, 1);
    }

    setChecked5(newChecked5);
    return newChecked5;
  };
  const handleToggle = (value, i) => {
    switch (i) {
      case 1:
        handleFilters1(ajusteChecked1(value));
        break;
      case 2:
        handleFilters2(ajusteChecked2(value));
        break;
      case 3:
        handleFilters3(ajusteChecked3(value));
        break;
      case 4:
        handleFilters4(ajusteChecked4(value));
        break;
      case 5:
        handleFilters5(ajusteChecked5(value));
        break;
      default:
    }
  };

  /* const handleToggle = (value, i) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);

    handleFilters1(newChecked);
  }; */

  const selecionado = (value, i) => {
    if (i === 1) {
      return Checked1.indexOf(value.name) !== -1;
    }
    if (i === 2) {
      return Checked2.indexOf(value.name) !== -1;
    }
    if (i === 3) {
      return Checked3.indexOf(value.name) !== -1;
    }
    if (i === 4) {
      return Checked4.indexOf(value.name) !== -1;
    }
    if (i === 5) {
      return Checked5.indexOf(value.name) !== -1;
    }
    return false;
  };

  /* const filtroToggle = (cat, i) => (
    <Collapse defaultActiveKey={[0]} className="filtro-antd">
      <Panel header={`${cat.nomeFiltro}`} key="1">
        {cat.opcoesFiltro.map((value) => (
          <div className="opcao-filtro-ANTD">
            <React.Fragment key={value.id}>
              <Checkbox
                onChange={() => handleToggle(value.name, i)}
                type="checkbox"
                checked={selecionado(value, i)}
              />
              <span className="filtro-antd-opcao"> {value.name}</span>
            </React.Fragment>
          </div>
        ))}
      </Panel>
    </Collapse>
  ); */

  function SimpleAccordion(cat, i) {
    const classes = useStyles();

    return (
      <div className={classes.root} style={{ marginTop: '10px' }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              {`${cat.nomeFiltro}`}
            </Typography>
          </AccordionSummary>
          {cat.opcoesFiltro.map((value) => (
            <AccordionDetails
              key={value.id}
              style={{ margin: '0px', padding: '0px' }}
            >
              <React.Fragment key={`${value.id}b`}>
                <Checkbox
                  onChange={() => handleToggle(value.name, i)}
                  type="checkbox"
                  checked={selecionado(value, i)}
                  key={`${value.id}a`}
                />
                <span className="filtro-antd-opcao"> {value.name}</span>
              </React.Fragment>
            </AccordionDetails>
          ))}
        </Accordion>
      </div>
    );
  }

  return (
    <>
      <div className="container-filtro-antd">
        {filtros.map((cat, i) => {
          const x = cat;
          return SimpleAccordion(x, i + 1);
        })}
      </div>
      {/* <div className="linha-personalizavel-toggle" id="linha-secundaria" /> */}
    </>
  );
}

export default FiltroToggleANTD;
