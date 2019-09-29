import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import AppFrame from './../components/AppFrame';
import CustomerActions from './../components/CustomerActions';

class HomeContainer extends Component {

    handleOnClick = () => {
        console.log("handle on click");
    }

    render() {
        return (
            <div>
                <AppFrame
                    header='Home'
                    body={
                        <div>
                        Esta es la pantalla inicial
                        <CustomerActions>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>
                            </CustomerActions>
                        </div>
                    }>
                </AppFrame>
            </div>
        );

    }
}

HomeContainer.propTypes = {

};

export default HomeContainer;