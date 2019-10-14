import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomerList = ({ customers, urlPath}) => {
    return (
        <div>
            <div className="customer-list">
                {
                    customers.map (c => 
                        <CustomerListItem
                            key={c.dni}
                            dni={c.dni}
                            name={c.name}
                            editAction={'Editar'}
                            delAction={'Eliminar'}
                            urlPath={urlPath}>
                        </CustomerListItem>
                        )
                }
                <CustomerListItem
                    name={customers.name}
                    editAction={'Editar'}
                    delAction={'Eliminar'}
                    urlPath={urlPath}
                    dni={customers.dni}>
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