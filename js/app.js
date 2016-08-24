var json_data = [{"id":1,"name":"Student 1","gpa":5.0,"level":6,"address":"Dhaka","created_at":"2016-08-23T15:47:34.673Z","updated_at":"2016-08-23T15:47:34.673Z"},{"id":2,"name":"Student 2","gpa":5.0,"level":6,"address":"Dhaka","created_at":"2016-08-23T15:48:16.509Z","updated_at":"2016-08-23T15:48:16.509Z"},{"id":3,"name":"Student 3","gpa":5.0,"level":6,"address":"Dhaka","created_at":"2016-08-23T15:48:23.469Z","updated_at":"2016-08-23T15:48:23.469Z"},{"id":4,"name":"Student 4","gpa":5.0,"level":6,"address":"Dhaka","created_at":"2016-08-23T15:48:27.484Z","updated_at":"2016-08-23T15:48:27.484Z"},{"id":5,"name":"Student 5","gpa":4.0,"level":6,"address":"Dhaka","created_at":"2016-08-23T15:48:37.621Z","updated_at":"2016-08-23T15:48:37.621Z"}]
var base_url = "http://0.0.0.0:5598/"

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

var Students = React.createClass({
  handleNew: function () {
    this.props.onClickNewLink();
  },

  render: function () {
    var rows = [];
    var onClickStudentLink = this.props.onClickStudentLink;
    this.props.students.forEach(function (student) {
      rows.push(<Student {...student} key={student.id} onClickStudentLink={onClickStudentLink} />);
    });
    return (
      <div className={"frame-level-0 " + this.props.className}>
        <h3>Students</h3>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Level</th>
              <th>GPA</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        <button className={"btn btn-default pull-right"} onClick={this.handleNew}>Create Student</button>
      </div>
    );
  }
});

var Student = React.createClass({
  handleLink: function () {
    this.props.onClickStudentLink(this.props.id);
  },
  render: function () {
    return (
      <tr>
        <td><a href="#" onClick={this.handleLink}>{this.props.name}</a></td>
        <td>{this.props.level}</td>
        <td>{this.props.gpa}</td>
        <td>{this.props.address}</td>
      </tr>
    );
  }
});

var StudentInfo = React.createClass({
  handleEdit: function () {
    this.props.onClickEditLink(this.props.student.id);
  },
  handleDelete: function () {
    var post_path = base_url + "students/" + this.props.student.id;
    // $.ajax({async: false, url: post_path, type: "DELETE"});
    this.props.onClickDeleteLink();
  },
  render: function () {
    return (
      <div className={"frame-level-0 " + this.props.className}>
        <h3>Student Info.</h3>
        <p><strong>Name:</strong>{this.props.student.name}</p>
        <p><strong>Level:</strong>{this.props.student.level}</p>
        <p><strong>GPA:</strong>{this.props.student.gpa}</p>
        <p><strong>Address:</strong>{this.props.student.address}</p>
        <button className={"btn btn-default"} onClick={this.props.onClickIndexLink} >Back to Index</button>
        <button className={"btn btn-default"} onClick={this.handleEdit}>Edit</button>
        <button className={"btn btn-danger"} onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
});

var StudentEdit = React.createClass({
  getInitialState: function () {
    return {student: this.props.student}
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState({student: nextProps.student});
  },
  handleInputName: function (event) {
    this.setState({student: {...this.state.student, name: event.target.value}});
  },
  handleInputLevel: function (event) {
    this.setState({student: {...this.state.student, level: event.target.value}});
  },
  handleInputGpa: function (event) {
    this.setState({student: {...this.state.student, gpa: event.target.value}});
  },
  handleInputAddress: function (event) {
    this.setState({student: {...this.state.student, address: event.target.value}});
  },
  handleSubmit: function (event) {
    event.preventDefault();
    var post_path = base_url + "students/" + this.state.student.id;
    // $.ajax({async: false, url: post_path, type: "PATCH", data: {
    //   "student[name]": this.state.student.name,
    //   "student[level]": this.state.student.level,
    //   "student[gpa]": this.state.student.gpa,
    //   "student[address]": this.state.student.address
    // } });
    this.props.onClickSaveLink();
  },
  render: function () {
    return (
      <div className={"frame-level-0 " + this.props.className}>
        <h3>Edit Student</h3>
        <form onSubmit={this.handleSubmit} className="edit-form">
          <table className="table tbl-noborder">
            <tbody>
              <tr>
                <td><strong>Name:</strong></td>
                <td><input name="student[name]" onChange={this.handleInputName} value={this.state.student.name} /></td>
              </tr>
              <tr>
                <td><strong>Level:</strong></td>
                <td><input name="student[level]" onChange={this.handleInputLevel} value={this.state.student.level} /></td>
              </tr>
              <tr>
                <td><strong>GPA:</strong></td>
                <td><input name="student[gpa]" onChange={this.handleInputGpa} value={this.state.student.gpa} /></td>
              </tr>
              <tr>
                <td><strong>Address:</strong></td>
                <td><input name="student[address]" onChange={this.handleInputAddress} value={this.state.student.address} /></td>
              </tr>
            </tbody>
          </table>
          <button className={"btn btn-default"} onClick={this.props.onClickIndexLink} >Back to Index</button>
          <button className={"btn btn-default"} type="submit" onClick={this.handleSubmit}>Save</button>
        </form>
      </div>
    );
  }
});

var StudentCreate = React.createClass({
  handleChange: function () {

  },
  handleSubmit: function () {

  },
  render: function () {
    return (
      <div className={"frame-level-0 " + this.props.className}>
        <h3>Create Student</h3>
        <form onSubmit={this.handleSubmit} className="create-form">
          <table className="table tbl-noborder">
            <tbody>
              <tr>
                <td><strong>Name:</strong></td>
                <td><input name="student[name]" /></td>
              </tr>
              <tr>
                <td><strong>Level:</strong></td>
                <td><input name="student[level]" /></td>
              </tr>
              <tr>
                <td><strong>GPA:</strong></td>
                <td><input name="student[gpa]" /></td>
              </tr>
              <tr>
                <td><strong>Address:</strong></td>
                <td><input name="student[address]" /></td>
              </tr>
            </tbody>
          </table>
          <button className={"btn btn-default"} onClick={this.props.onClickIndexLink} >Back to Index</button>
          <button className={"btn btn-success"} type="submit">Create</button>
        </form>
      </div>
    );
  }
});

var App = React.createClass({
  fetchStudents: function () {
    var students = [];

    $.ajax({async: false, url: base_url+"products", type: 'GET', success: function (data) {students = data;} });
    // $.ajax({
    //   url: base_url,
    //   success: function(data){
    //     students = data;
    //   },
    //   error: function(xhr, textStatus, errorThrown){
    //     console.log("Couldn't access resource.");
    //   }
    // });
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
      student: {id: -1, name: "", level: -1, gpa: -1, address: ""}
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
        <Students onClickStudentLink={this.handleStudentLink} onClickNewLink={this.handleNewLink} className={"students " + this.state.studentsClass} students={this.state.students} ref={(ref) => this._students = ref} />
        <StudentInfo onClickIndexLink={this.handleIndexLink} onClickEditLink={this.handleEditLink} onClickDeleteLink={this.handleDeleteLink} className={"student-info " + this.state.studentInfoClass} student={this.state.student} />
        <StudentCreate onClickIndexLink={this.handleIndexLink} className={"student-create " + this.state.studentCreateClass} student={this.state.student} />
        <StudentEdit onClickIndexLink={this.handleIndexLink} onClickSaveLink={this.handleSaveLink} className={"student-edit " + this.state.studentEditClass} student={this.state.student} ref={(ref) => this._student_edit = ref} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById("app"));
