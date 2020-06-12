import React, { useState } from 'react'
import { Grid, Card, Button, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import './PatientInfo.css'

export default function PatientInfo(props) {
    const patient = props.currentPatient;
    var statusColor = {}
    if (patient.erStatus === 'Resuscitation') {
        statusColor = { color: '#630808' }
    } else if(patient.erStatus === 'Emergency') {
        statusColor = { color: '#e01616' }
    } else if (patient.erStatus === 'Urgent') {
        statusColor = { color: '#e3870e' }
    } else if (patient.erStatus === 'Non-Urgent') {
        statusColor = { color: '#c9cf25' }
    } else if (patient.erStatus === 'Referred') {
        statusColor = { color: '#1aed21' }
    }
    const [info, setInfo] = useState(false);
    function toggleInfo() {
        setInfo(!info);
    }
    return(
        <Grid className="container">
            { patient !== null && <Card className="card">
                <Grid className="grid">
                    <Typography className="text">
                        <b>{patient.name}</b>
                    </Typography>
                    <Button onClick={() => {
                        toggleInfo();
                    }}>
                        <InfoIcon></InfoIcon>
                    </Button>
                </Grid>
                {info && <Card className="info-card">
                    {Object.keys(patient).map((key) => {
                        return (
                            <div>
                                {key !== 'erStatus' && <Typography className="patient-info"><b>{key}</b>: {patient[key]}</Typography>}
                            </div>
                        )
                    })}
                </Card>}
                <p style={statusColor}><b>Status: {patient.erStatus}</b></p>
                </Card> }
        </Grid>
    )
}