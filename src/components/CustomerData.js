import React from 'react';
import PropTypes from 'prop-types';
import CustomerActions from './CustomerActions';

const CustomerData = ({ name, dni, age, onBack, isDeleteAllow, onDelete}) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Datos del Cliente</h2>
                <div><strong>Nombre</strong><i>{name}</i></div>
                <div><strong>DNI</strong><i>{dni}</i></div>
                <div><strong>Edad</strong><i>{age}</i></div>
            </div>
            <CustomerActions>
                <button onClick={onBack}>Volver</button>
                {isDeleteAllow && <button onClick={onDelete}>Eliminar</button>}
            </CustomerActions>
        </div>

    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllow: PropTypes.bool,
    onDelete: PropTypes.func,
};

export default CustomerData;