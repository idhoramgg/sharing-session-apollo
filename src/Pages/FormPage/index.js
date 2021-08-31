import React, {useState} from 'react'
import { styles } from '../Style';
import {useHistory} from 'react-router-dom';
import { ADD_ONE_EMPLOYEE } from '../../Queries';
import { useMutation } from '@apollo/client';

export default function FormPage() {
    const history = useHistory()

    const [values, setValues] = useState({
        name: '',
        address: '',
        division: '',
        phoneNumber: '',
        imageurl: ''
    });

    const [addUser, {loading, data, error}] = useMutation(ADD_ONE_EMPLOYEE, {
        variables: values
    })
    if(loading) console.log(loading);
    if(error) console.log(error.message);
    if(data) history.push('/home');

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addUser();
    }


    return (
          <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group row" style={styles.marginTop}>
                    <label for="name" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                id="name"
                                value={values.name}
                                placeholder="Your name.."
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row" style={styles.marginTop}>
                    <label for="address" className="col-sm-2 col-form-label">Address</label>
                        <div class="col-sm-10"> 
                            <input
                                className="form-control"
                                type="text"
                                id="address"
                                name="address"
                                value={values.address}
                                placeholder="Your address.."
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row" style={styles.marginTop}>
                    <label for="division" className="col-sm-2 col-form-label">Division</label>
                        <div class="col-sm-10"> 
                            <input
                                className="form-control"
                                id="division"
                                type="text"
                                name="division"
                                value={values.division}
                                placeholder="Your division.."
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row" style={styles.marginTop}>
                    <label for="phoneNumber" className="col-sm-2 col-form-label">Phone Number</label>
                        <div class="col-sm-10">
                            <input
                                className="form-control"
                                id="phoneNumber"
                                type="text"
                                name="phoneNumber"
                                value={values.phoneNumber}
                                placeholder="Your phone.."
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row" style={styles.marginTop}>
                    <label for="imageurl" className="col-sm-2 col-form-label">Image URL</label>
                        <div class="col-sm-10">
                            <input
                                id="imageurl"
                                className="form-control"
                                type="text"
                                name="imageurl"
                                value={values.imageurl}
                                placeholder="Your Image Link.."
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mb-2" style={styles.marginTop}>Confirm identity</button>
                </form>
            </div>
           
    )
}
