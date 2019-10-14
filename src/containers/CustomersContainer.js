import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import CustomerActions from '../components/CustomerActions';
import { fetchCustomers } from './../actions/fetchCustomers';

class CustomersContainer extends Component {

    componentDidMount() {
        this.props.fetchCustomers();
    }

    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }
    renderBody = customers => (
        <div>
            <CustomerList
                customers={customers}
                urlPath={'customers/'}>
            </CustomerList>
            <CustomerActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomerActions>
        </div>
    )

    render() {
        return (
            <div>
                <AppFrame header={'Listado de clientes'}
                    body={this.renderBody(this.props.customers)}></AppFrame>
            </div>
        );
    }
}
CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
}

CustomersContainer.defaultProps = {
    customers: [
        {
            "dni": "30242306",
            "name": "Fernando Gomez de Paz.",
            "age": 35
        },
        {
            "dni": "32154789",
            "name": "Juan Perez.",
            "age": 39
        },
        {
            "dni": "30109942",
            "name": "Analía Baigorria.",
            "age": 36
        }
    ]
};

export default withRouter(connect(null, { fetchCustomers })(CustomersContainer));