import React from "react";
import Activity from "./Activity"

const List = ({activities, setActivities}) => {

    if(activities.length === 0){
        return(
            <div className="mt-5 mb-5 ms-3 text-center">
                Inga aktiviteter i listan.
            </div>
        )
    }

    return(
        <div className="mt-5 mb-5 ms-3">
            {
                activities.map(activity => (
                    <Activity key={activity.id} activity={activity} activities={activities} setActivities={setActivities}></Activity>
                ))
            }
        </div>
    )
}

export default List;