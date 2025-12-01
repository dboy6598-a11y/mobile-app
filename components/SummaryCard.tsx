import React from 'react';
import PropTypes from 'prop-types';

const SummaryCard = ({ title, amount, date }) => {
    return (
        <div className="summary-card">
            <h3>{title}</h3>
            <p>Amount: ${amount}</p>
            <p>Date: {date}</p>
        </div>
    );
};

SummaryCard.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
};

export default SummaryCard;