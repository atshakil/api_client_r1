import React from 'react'
import Student from './Student'

export default React.createClass({
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
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        <button className={"btn btn-default pull-right"} onClick={this.handleNew}>Create Student</button>
      </div>
    );
  }
});
