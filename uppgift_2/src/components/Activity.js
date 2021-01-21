import React from "react";

const Activity = ({activity, activities, setActivities}) => {

    const deleteHandler = () => {
        setActivities(activities.filter(item => item.id !== activity.id))
    }

    return(
        <div className="activity border mb-3 p-3 rounded d-flex justify-content-between align-items-center">
            <div>
                <h1>{activity.titel}</h1>
                <p className="descriptionCSS">{activity.description}</p>
            </div>
            <div className="d-flex align-items-center">
                <p>Status: <span className={`${activity.status === 'Genomförd' ? 'green' : 'red'}`}>{activity.status}</span></p>
                <i className="fas fa-trash" onClick={deleteHandler}></i>
            </div>
        </div>
    )
}

export default Activity;