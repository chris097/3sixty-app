import React from 'react';
import PropTypes from 'prop-types';
import DashboardHeader from '../components/Header/DashboardHeader';

const InternalLayout = ({ Component, ...otherProps }) => {
    return (
        <>
            <DashboardHeader />
            <main>
                <Component {...otherProps} />
            </main>
        </>
    )
};

InternalLayout.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]),
  otherProps: PropTypes.objectOf(PropTypes.object),
};

InternalLayout.defaultProps = {
  otherProps: {},
};
export default InternalLayout;