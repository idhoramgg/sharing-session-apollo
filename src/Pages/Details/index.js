import React from 'react'
import { useParams, useHistory } from "react-router-dom";
import {useQuery} from '@apollo/client';
import { styles } from '../Style';

import {GET_ONE_EMPLOYEE} from '../../Queries'

export default function Details() {
    const params = useParams();
    const history = useHistory()
    let { id } = params;

    const handleBack = (event) => {
        event.preventDefault()
        history.goBack()
    }
    const {error, data, loading} = useQuery(GET_ONE_EMPLOYEE, {
        variables: { id }
    });
    
    return (
        <div style={styles.card}>
        { loading ? "Loading..." : error ? `${error.message}...` :
         
         <div style={styles.container}>
            <div style={styles.cardDetails}>
                <div style={styles.left}>
                    <img src={data.employees[0].imageurl} alt="" style={{width: '200px'}}/>
                </div>
                <div style={styles.right}>
                    <h5>Name: {data.employees[0].name} </h5>
                    <h5>Phone: {data.employees[0].phoneNumber}</h5>
                    <h5>Address: {data.employees[0].address} </h5>
                    <h5>Division: {data.employees[0].division} </h5>

                    <button onClick={(event) => handleBack(event)} style={styles.buttonGreen}>Back</button>
                </div>
            </div>
        </div>
         }
        </div>
    )
}
