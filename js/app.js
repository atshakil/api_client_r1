var json_data = [{"id":1,"name":"Student 1","gpa":5.0,"level":6,"address":"Dhaka","created_at":"2016-08-23T15:47:34.673Z","updated_at":"2016-08-23T15:47:34.673Z"},{"id":2,"name":"Student 2","gpa":5.0,"level":6,"address":"Dhaka","created_at":"2016-08-23T15:48:16.509Z","updated_at":"2016-08-23T15:48:16.509Z"},{"id":3,"name":"Student 3","gpa":5.0,"level":6,"address":"Dhaka","created_at":"2016-08-23T15:48:23.469Z","updated_at":"2016-08-23T15:48:23.469Z"},{"id":4,"name":"Student 4","gpa":5.0,"level":6,"address":"Dhaka","created_at":"2016-08-23T15:48:27.484Z","updated_at":"2016-08-23T15:48:27.484Z"},{"id":5,"name":"Student 5","gpa":4.0,"level":6,"address":"Dhaka","created_at":"2016-08-23T15:48:37.621Z","updated_at":"2016-08-23T15:48:37.621Z"}]


var Students = React.createClass({
  render: function () {
    var rows = [];
    this.props.students.forEach(function (student) {
      rows.push(<Student {...student} key={student.id} />);
    });
    return (
      <table className={this.props.className}>
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
    );
  }
});

var Student = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.level}</td>
        <td>{this.props.gpa}</td>
        <td>{this.props.address}</td>
      </tr>
    );
  }
});

var StudentInfo = React.createClass({
  render: function () {
    return (
      <div className={this.props.className}>
      </div>
    );
  }
});

var StudentEdit = React.createClass({
  render: function () {
    return (
      <div className={this.props.className}>
      </div>
    );
  }
});


var App = React.createClass({
  getInitialState: function () {
    return {
      students: json_data
    }
  },

  render: function () {
    return (
      <div>
        <Students className="students" students={this.state.students} />
        <StudentInfo className="student-info" />
        <StudentEdit className="student-edit" />
      </div>
    );
  }
});



ReactDOM.render(<App />, document.getElementById("app"));
