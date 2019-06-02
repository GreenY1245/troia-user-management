import React from 'react'
import './notFound.css'

export default () =>
    <div className="NotFound">
        <div className="NotFound-Text">
            <h3>Sorry, Page <b>{window.location.pathname}</b> doesn't exist!</h3>
            <h4><b>404</b> Page not found</h4>
        </div>
    </div>