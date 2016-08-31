import React from 'react'

export default React.createClass({
  getInitialState: function () {
    return {student: this.props.student}
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState({student: nextProps.student});
  },
  handleInputName: function (event) {
    this.setState({student: {id: this.state.student.id, name: event.target.value}});
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
            </tbody>
          </table>
          <button className={"btn btn-default"} onClick={this.props.onClickIndexLink} >Back to Index</button>
          <button className={"btn btn-default"} type="submit" onClick={this.handleSubmit}>Save</button>
        </form>
      </div>
    );
  }
});
