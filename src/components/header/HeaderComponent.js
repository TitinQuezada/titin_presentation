import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Collections } from '../../enums/collections';
import { GetAllDocuments } from '../../helpers/CloudFireStoreHelper';
import { navigateToUrl } from '../../helpers/navigationHelper';
import './HeaderComponent.css';

const HeaderComponent = () => {
  const history = useHistory();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    GetAllDocuments(Collections.profiles).then((profiles) => {
      const profile = profiles.find((profile) => profile.isSelected === true);
      setProfile(profile);
    });
  }, []);

  return (
    <div className="row pb-3 pt-3 pl-3 pl-sm-0 pr-3 pr-sm-5 bg-primary">
      <div className="col align-self-center d-flex justify-content-center">
        <img
          onClick={() => history.push('/login')}
          className="rounded-circle"
          height="100vh"
          alt="Foto de Titin"
          src={profile.photo}
        />
      </div>

      <div className="col-12 col-sm-4 align-self-center text-white mt-3 mt-sm-0 mb-3 mb-sm-3">
        <div className="row">
          <h3 className="pb-0 mb-0">{profile.names}</h3>
        </div>

        <div className="row">
          <h4>{profile.lastNames}</h4>
        </div>

        <div className="row">
          <small>{profile.profession}</small>
        </div>
      </div>

      <div className="col mt-5 mt-sm-0 align-self-center text-white">
        <div className="row justify-content-end align-items-center">
          <div className="pointer">
            <span className="mr-3">Telefonos</span>
            <i className="fas fa-phone-alt"></i>
          </div>
        </div>

        <div className="row justify-content-end align-items-center">
          <div
            onClick={() => navigateToUrl(`mailto:${profile.email}`)}
            className="pointer"
          >
            <span className="mr-3">Correo Electronico</span>
            <i className="fas fa-envelope"></i>
          </div>
        </div>

        <div className="row justify-content-end align-items-center">
          <div
            onClick={() => navigateToUrl(profile.linkedin)}
            className="pointer"
          >
            <span className="mr-3">Perfil de Linkedin</span>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
