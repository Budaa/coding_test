import React from 'react';
import PermisionsList from './PermisionsList';
import AccessConstainer from './AccessContainer';
const Access = ({ appName, permisions }) => (
  <AccessConstainer>
    <b>{appName}</b> wants to access your bank data for:
    {permisions && permisions.size &&
      <PermisionsList>
        { permisions.map((permision, key) => <li key={key}>{permision}</li>) }
      </PermisionsList>
    }
  </AccessConstainer>
);

export default Access;
