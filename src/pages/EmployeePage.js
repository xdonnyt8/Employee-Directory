import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { Row, Col, Button, Container} from 'react-bootstrap';
import EmployeeList from "../components/EmployeeList"

const EmployeePage = () => {

    const [employees, setEmployees] = useState([])
    const [sortEmployees, setSortEmployees] = useState(false)
    const [search, setSearch] = useState("")


    useEffect(() => {
        getEmployee()
    }, []);

    function getEmployee() {
        API.search()
            .then(res => setEmployees(res.data.results))
    }

    function sortLastName() {
        if (!sortEmployees) {
            setEmployees(employees.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1));
            setSortEmployees(true)
        } else {
            setEmployees(employees.sort((a, b) => (a.name.last > b.name.last) ? -1 : 1));
            setSortEmployees(false)
        }
    }
    function sortFirstName() {
        if (!sortEmployees) {
            setEmployees(employees.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1));
            setSortEmployees(true)
        } else {
            setEmployees(employees.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1));
            setSortEmployees(false)
        }
    }
    function sortAge() {
        if (!sortEmployees) {
            setEmployees(employees.sort((a, b) => (a.dob.age > b.dob.age) ? 1 : -1));
            setSortEmployees(true)
        } else {
            setEmployees(employees.sort((a, b) => (a.dob.age > b.dob.age) ? -1 : 1));
            setSortEmployees(false)
        }
    }

    function searchTerm(e) {
        setSearch(e.target.value)
    }

    const filter = employees.filter(peoples => peoples.name.last.toLowerCase().startsWith(search.toLowerCase()) || peoples.name.first.toLowerCase().startsWith(search.toLowerCase()))

    return (
        <Container fluid>
            <Row ><h1>Employee Directory</h1></Row>
            <Row>
                <Button onClick={sortLastName}>Sort Last Name</Button>
                <Button onClick={sortFirstName}>Sort First Name</Button>
                <Button onClick={sortAge}>Sort Age</Button>

        
            <form>
                <input
                    value={search}
                    onChange={searchTerm}
                    className=""
                    type="text"
                    placeholder="Search Names"

                />
            </form>
            </Row>
            <Row>
                <Col><h3>Picture</h3></Col>
                <Col><h3>Name</h3></Col>
                <Col><h3>Age</h3></Col>
                <Col><h3>Phone Number</h3></Col>
                <Col><h3>Email</h3></Col>
            </Row>
            <Col>
                <EmployeeList data={filter} />
            </Col>

        </Container>
    )

}

export default EmployeePage