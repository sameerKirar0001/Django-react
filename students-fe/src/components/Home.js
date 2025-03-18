import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import StudentList from "./StudentList";
import NewStudentModal from "./NewStudentModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    students: [],
     searchQuery: ""
  };

  componentDidMount() {
    this.resetState();
  }

  getStudents = () => {
    const { searchQuery } = this.state;
    const url = searchQuery
      ? `${API_URL}search/?search=${searchQuery}`
      : API_URL; // Get all students if no search query
  
    axios.get(url).then((res) => this.setState({ students: res.data }));
  };

  resetState = () => {
    // this.getStudents();
    this.setState({ searchQuery: "" }, this.getStudents); // Clear search and reload all students
  };
  
  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value }, () => {
      this.getStudents(); // Trigger search on every keystroke
    });
  };


  render() {
    
    return (
      <Container style={{ marginTop: "20px" }}>
        <div className="searching">
          <h4>Search here</h4>
          <input
            type="text"
            placeholder="Search by name or email"
            value={this.state.searchQuery}
            onChange={this.handleSearchChange}
          />
        </div>
         {Array.isArray(this.state.students) ? (
      <>

        <Row>
          <Col>
            <StudentList
              students={this.state.students}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewStudentModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </>
    ) : (
      <p>Loading students...</p>
    )}
      </Container>
    );
  }
}

export default Home;