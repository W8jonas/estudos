import React from 'react'

import './styles.css'

const ProgressBar = ({ maxValue = 100, actualValue = 50 }) => {

    const value = (actualValue > maxValue) ? maxValue : actualValue
    const progress = value / maxValue
    const progressInPercentage = progress * 100

    return (
        <div className="content-container">

            <div>
                <div style={{ width: `${progressInPercentage}%`, height: 15, backgroundColor: '#774192' }} />
            </div>

            <p>
                {progressInPercentage.toFixed(0)}%
            </p>

        </div>
    )
}

export default ProgressBar