import React from 'react'
import "./BackButton.scss"

const BackButton = (props) => {

    const { linkTo } = props;

    return (
        <div className='back'>
            <button to={linkTo} className='back__button'><svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.43464 0.488391C8.55626 0.376298 8.71606 0.316754 8.88016 0.322388C9.04426 0.328022 9.19974 0.398391 9.31363 0.518569C9.42752 0.638748 9.49086 0.799282 9.49021 0.966121C9.48956 1.13296 9.42498 1.29298 9.31015 1.41224L2.34396 8.22134H18.1309C18.2984 8.22134 18.459 8.28893 18.5774 8.40925C18.6958 8.52957 18.7623 8.69275 18.7623 8.8629C18.7623 9.03305 18.6958 9.19624 18.5774 9.31655C18.459 9.43687 18.2984 9.50446 18.1309 9.50446H2.3448L9.31015 16.3127C9.42498 16.432 9.48956 16.592 9.49021 16.7588C9.49086 16.9257 9.42752 17.0862 9.31363 17.2064C9.19974 17.3266 9.04426 17.3969 8.88016 17.4026C8.71606 17.4082 8.55626 17.3486 8.43464 17.2366L0.497807 9.4788C0.416202 9.39899 0.351285 9.30327 0.306943 9.19737C0.262601 9.09147 0.239746 8.97756 0.239746 8.86247C0.239746 8.74739 0.262601 8.63348 0.306943 8.52758C0.351285 8.42168 0.416202 8.32596 0.497807 8.24615L8.43464 0.487536V0.488391Z" fill="#6BA99D" />
            </svg>
            </button>
        </div>
    )
}

export default BackButton