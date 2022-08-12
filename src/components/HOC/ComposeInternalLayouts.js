/* eslint-disable react/display-name */
import React from 'react';
import InternalLayout from '../../layout/InternalLayout';

const ComposeInternalLayouts = (Component) => (passThroughProps) => (
    <>
        <InternalLayout {...passThroughProps} Component={Component} />
    </>
);

export default ComposeInternalLayouts;