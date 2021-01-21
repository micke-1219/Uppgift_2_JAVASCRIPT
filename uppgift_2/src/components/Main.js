import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

const Main = () => {

    const [activities, setActivities] = useState([])

    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Form activities={activities} setActivities={setActivities}></Form>
                </div>
                <div className="col-6">
                    <List activities={activities} setActivities={setActivities}></List>
                </div>
            </div>
        </div>
    )
}

export default Main;