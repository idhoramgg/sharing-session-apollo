import React from 'react'
import {useQuery} from '@apollo/client';
import { styles } from '../Style';
import {useHistory} from 'react-router-dom';

// query
import { GET_ALL_EMPLOYEES } from '../../Queries';


export default function Home() {
    const history = useHistory();
    const {data, loading, error } = useQuery(GET_ALL_EMPLOYEES);
    
    const handleDetails = (id) => {
        history.push(`/details/${id}`)
    }
  
    return (
        <div style={styles.card}>
            <div style={styles.container}>
            { loading ? "Loading...": error ? `${error.message}` : data && data.employees.map(emp => {
                return(
                    <div key={emp.id} style={styles.cardEmployee} onClick={() => handleDetails(emp.id)}>
                        <img src={emp.imageurl} alt="imageurlll" style={{height: '200px', width: '200px'}}/>
                        <h3 style={{marginTop: '20px'}}> { emp.name } </h3>
                    </div>
                ) 
            })}
            </div>
        </div>
    )
}
