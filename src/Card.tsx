import React from 'react';


export type CardProps = {
    description: string
}


export function Card(props: CardProps) {
    return <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div className="card-body">
                <p className="card-text">{props.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                </div>
            </div>
        </div>
    </div>
}