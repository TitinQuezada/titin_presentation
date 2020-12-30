import React, { useEffect, useState } from 'react';
import { Collections } from '../../enums/collections';
import { GetAllDocuments } from '../../helpers/CloudFireStoreHelper';
import CardComponent from '../card/CardComponent';

const BodyComponent = () => {
  const [languajes, setLanguajes] = useState([]);

  const [frameworks, setFrameworks] = useState([]);

  useEffect(() => {
    GetAllDocuments(Collections.languajes).then((documents) => {
      setLanguajes(documents);
    });

    GetAllDocuments(Collections.frameworks).then((documents) => {
      setFrameworks(documents);
    });
  }, []);

  return (
    <div className="row mt-3 mb-3 mb-sm-0">
      <div className="col">
        <div className="row justify-content-center">
          <h5>Lenguajes de programacion</h5>
        </div>

        <div className="row">
          {languajes.map((languaje) => (
            <div
              className="col-6 col-md-5 col-lg-4 col-xl-3 mt-3"
              key={languaje.id}
            >
              <CardComponent
                title={languaje.name}
                imageBase64={languaje.image}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="col-0 col-sm-1 border-left border-right"></div>

      <div className="col mt-5 mt-sm-0">
        <div className="row justify-content-center">
          <h5>Frameworks</h5>
        </div>

        <div className="row">
          {frameworks.map((framework) => (
            <div
              className="col-6 col-md-5 col-lg-4 col-xl-3 mt-3"
              key={framework.id}
            >
              <CardComponent
                title={framework.name}
                imageBase64={framework.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
