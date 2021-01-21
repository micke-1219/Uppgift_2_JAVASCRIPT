import React, { useState } from "react";

const Form = ({activities, setActivities}) => {

    const [titel, setTitel] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')
    const [submitState, setSubmitState] = useState(true)

    const titelHandler = (e) => {
        if(e.target.value.length >= 1 && document.getElementById('activityDescription').value.length >= 1 && document.getElementById('activityStatus').value.length !== 0){
            setSubmitState(false)
        }
        else{
            setSubmitState(true)
        }
        setTitel(e.target.value)
    }
    const descriptionHandler = (e) => {
        if(e.target.value.length >= 1 && document.getElementById('activityTitel').value.length >= 1 && document.getElementById('activityStatus').value.length !== 0){
            setSubmitState(false)
        }
        else{
            setSubmitState(true)
        }
        setDescription(e.target.value)
    }
    const statusHandler = (e) => {
        if(e.target.value.length !== 0 && document.getElementById('activityTitel').value.length >= 1 && document.getElementById('activityDescription').value.length >= 1){
            setSubmitState(false)
        }
        else{
            setSubmitState(true)
        }
        setStatus(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setActivities([ ...activities, {titel: titel, description: description, status: status, id: Date.now()}])
        setTitel('')
        setDescription('')
        setStatus('')
        setSubmitState(true)
    }
    return(
        <div className="mt-5 me-3">
            <form>
                <input onChange={titelHandler} value={titel} type="text" className="form-control" id="activityTitel" placeholder="Aktivitet"/>
                <textarea onChange={descriptionHandler} value={description} type="text" className="form-control mt-3" id="activityDescription" placeholder="Beskrivning av aktivitet" rows="5"/>
            </form>
            <select onChange={statusHandler} value={status} className="form-select mt-3" id="activityStatus">
                <option value="" defaultValue>Välj status</option>
                <option value="Ej genomförd">Ej genomförd</option>
                <option value="Genomförd">Genomförd</option>
            </select>
            <button onClick={submitHandler} disabled={submitState} type="submit" className="btn btn-primary mt-3">Lägg till aktivitet</button>
        </div>
    )
}

export default Form;