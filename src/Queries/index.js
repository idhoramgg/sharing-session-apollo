import { gql } from "@apollo/client";

// naming query
export const GET_ALL_EMPLOYEES = gql`
query GetAllEmployee {
    employees {
      id,
      name,
      address,
      phoneNumber,
      imageurl
    }
  }
`;
export const GET_ONE_EMPLOYEE = gql`
query GetOne($id: ID!) {
  employees(where: {id: $id}){
  	id
    name
    address
    division
    phoneNumber
    imageurl
  }
}
`;
export const ADD_ONE_EMPLOYEE = gql`
mutation createEmployee($name: String!, $address: String!, $division: String!, $phoneNumber: String!, $imageurl: String!) {
  createEmployee(data: {
    name: $name, 
    address: $address, 
    division: $division, 
    phoneNumber: $phoneNumber, 
    imageurl: $imageurl,
  }) {
    address
    division
    imageurl
    name
    phoneNumber
  }
}
`;
