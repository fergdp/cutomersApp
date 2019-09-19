import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomerList = ({ customers }) => {
    return (
        <div>
            <div className="customer-list">
                <CustomerListItem
                    key={customers.dni}
                    name={customers.name}
                    editAction={'Editar'}
                    delAction={'Eliminar'}
                    urlPath={urlPath}>
                </CustomerListItem>
            </div>
        </div>
    );
};

CustomerList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerList;