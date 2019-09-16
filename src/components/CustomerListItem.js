import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const CustomerListItem = ({name, editAction, delAction}) => {
    return (
        <div>
            <div className="customer-list-item">
                <div className="field">
                    <Link to={`${props.urlPath}${dni}`}>{name}</Link>
                </div>
                <div className="field">
                    <Link to={`${props.urlPath}${dni}/edit`}>{editAction}</Link>
                </div>
                <div className="field">
                    <Link to={`${props.urlPath}${dni}/del`}>{delAction}</Link>
                </div>
            </div>
        </div>
    );
};

CustomerListItem.propTypes = {
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerListItem;