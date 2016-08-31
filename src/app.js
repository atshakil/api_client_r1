//var json_data = [{"id":1,"name":"Student 1","gpa":5.0,"level":6,"address":"Dhaka","created_at":"2016-08-23T15:47:34.673Z","updated_at":"2016-08-23T15:47:34.673Z"},{"id":2,"name":"Student 2","gpa":5.0,"level":6,"address":"Dhaka","created_at":"2016-08-23T15:48:16.509Z","updated_at":"2016-08-23T15:48:16.509Z"},{"id":3,"name":"Student 3","gpa":5.0,"level":6,"address":"Dhaka","created_at":"2016-08-23T15:48:23.469Z","updated_at":"2016-08-23T15:48:23.469Z"},{"id":4,"name":"Student 4","gpa":5.0,"level":6,"address":"Dhaka","created_at":"2016-08-23T15:48:27.484Z","updated_at":"2016-08-23T15:48:27.484Z"},{"id":5,"name":"Student 5","gpa":4.0,"level":6,"address":"Dhaka","created_at":"2016-08-23T15:48:37.621Z","updated_at":"2016-08-23T15:48:37.621Z"}]
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, Link } from 'react-router'
import Students from './components/Students'
import StudentInfo from './components/StudentInfo'
import StudentEdit from './components/StudentEdit'
import StudentCreate from './components/StudentCreate'

var base_url = "http://0.0.0.0:9000/"

var pages = {
  STUDENTS: "STUDENTS",
  STUDENT_INFO: "STUDENT_INFO",
  STUDENT_CREATE: "STUDENT_CREATE",
  STUDENT_EDIT: "STUDENT_EDIT"
}

var Helper = {
  switchPageTo: function (page) {
    alert(page);
  }
}

var App = React.createClass({
  fetchStudents: function () {
    var students = [];

    $.ajax({async: false, url: base_url+"products", type: 'GET', success: function (data) {students = data;} });
    return students;
  },

  getInitialState: function () {
    return {
      currentPage: pages.STUDENTS,
      studentsClass: "",
      studentInfoClass: "hide",
      studentCreateClass: "hide",
      studentEditClass: "hide",
      students: this.fetchStudents(),
      student: {id: -1, name: ""}
    }
  },

  switchPageTo: function (page) {
    switch (page) {
      case pages.STUDENTS:
        this.setState({
          studentsClass: "",
          studentInfoClass: "hide",
          studentCreateClass: "hide",
          studentEditClass: "hide"
        });
        break;
        case pages.STUDENT_INFO:
          this.setState({
            studentsClass: "hide",
            studentInfoClass: "",
            studentCreateClass: "hide",
            studentEditClass: "hide"
          });
          break;
        case pages.STUDENT_CREATE:
          this.setState({
            studentsClass: "hide",
            studentInfoClass: "hide",
            studentCreateClass: "",
            studentEditClass: "hide"
          });
          break;
        case pages.STUDENT_EDIT:
          this.setState({
            studentsClass: "hide",
            studentInfoClass: "hide",
            studentCreateClass: "hide",
            studentEditClass: ""
          });
          break;
      default:
        console.log("Unknown page!");
    }
  },

  handleStudentLink: function (id) {
    var student = $.grep(this.state.students, function(student){return student.id == id;})[0];
    this.setState({student: student});
    this.switchPageTo(pages.STUDENT_INFO);
  },
  handleEditLink: function (id) {
    this.switchPageTo(pages.STUDENT_EDIT);
  },
  handleDeleteLink: function (id) {
    this.setState({students: this.fetchStudents()});
    this.switchPageTo(pages.STUDENTS);
  },
  handleSaveLink: function (id) {
    this.setState({students: this.fetchStudents()});
    this.switchPageTo(pages.STUDENTS);
  },
  handleNewLink: function () {
    this.switchPageTo(pages.STUDENT_CREATE);
  },
  handleIndexLink: function () {
    this.switchPageTo(pages.STUDENTS);
  },

  render: function () {
    return (
      <div>
        <ul role="nav">
          <li><Link to="/">Home</Link></li>
        </ul>
        LAYOUT#LAYOUT#LAYOUT#LAYOUT#
        ~~~~~~~~~~~~~~~~~~~~~
        {this.props.children}
        ~~~~~~~~~~~~~~~~~~~~~
        LAYOUT#LAYOUT#LAYOUT#LAYOUT#
      </div>
    );
    // return (
    //   <div>
    //     <Students onClickStudentLink={this.handleStudentLink} onClickNewLink={this.handleNewLink} className={"students " + this.state.studentsClass} students={this.state.students} ref={(ref) => this._students = ref} />
    //     <StudentInfo onClickIndexLink={this.handleIndexLink} onClickEditLink={this.handleEditLink} onClickDeleteLink={this.handleDeleteLink} className={"student-info " + this.state.studentInfoClass} student={this.state.student} />
    //     <StudentCreate onClickIndexLink={this.handleIndexLink} className={"student-create " + this.state.studentCreateClass} student={this.state.student} />
    //     <StudentEdit onClickIndexLink={this.handleIndexLink} onClickSaveLink={this.handleSaveLink} className={"student-edit " + this.state.studentEditClass} student={this.state.student} ref={(ref) => this._student_edit = ref} />
    //   </div>
    // );
  }
});

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/students" component={Students} />
      <Route path="/students/:id" component={StudentInfo} />
      <Route path="/students/new" component={StudentCreate} />
    </Route>
  </Router>
), document.getElementById("app"));
