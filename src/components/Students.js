import React from 'react'
import Student from './Student'

var base_url = "http://0.0.0.0:9000/"
// onClickStudentLink={this.handleStudentLink}
// onClickNewLink={this.handleNewLink}
// students={this.state.students}
// ref={(ref) => this._students = ref}

export default React.createClass({
  fetchStudents() {
    var students = [];

    $.ajax({async: false, url: base_url+"products", type: 'GET', success: function (data) {students = data;} });
    return students;
  },

  getInitialState() {
    return {
      students: this.fetchStudents()
    }
  },

  handleNewLink() {},

  render: function () {
    var rows = [];
    this.state.students.forEach(function (student) {
      rows.push(<Student {...student} key={student.id} />);
    });
    return (
      <div className="frame-level-0">
        <h3>Students</h3>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        <button className={"btn btn-default pull-right"} onClick={this.handleNewLink}>Create Student</button>
      </div>
    );
  }
});
