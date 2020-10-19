import React from "react";
import EmployeeCard from "./EmployeeCard"

function EmployeeList({ data }) {
    

    return(
        
        data.map( employee => (
            <EmployeeCard
                image={employee.picture.thumbnail}
                firstName={employee.name.first} 
                lastName={employee.name.last}
                age={employee.dob.age}
                phone={employee.phone}
                email={employee.email}
            />
        ))
        


    )


}

export default EmployeeList;