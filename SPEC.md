Students
  - All props including hyperlink to select student
Student
  - Includes edit and delete button
StudentEdit
  - Includes save button

<App>
  <Students />
  <Student />
  <StudentEdit />
</App>

States
  - students

  - studentsVisible
  - studentsVisible
  - studentEditVisible



  <form onSubmit={this.handleSubmit} className="create-form">
    <table className="table">
      <tbody>
        <tr>
          <td><strong>Name:</strong></td>
          <td><input onChange={this.handleChange} value={this.props.student.name} /></td>
        </tr>
        <tr>
          <td><strong>Level:</strong></td>
          <td><input onChange={this.handleChange} value={this.props.student.level} /></td>
        </tr>
        <tr>
          <td><strong>GPA:</strong></td>
          <td><input onChange={this.handleChange} value={this.props.student.gpa} /></td>
        </tr>
        <tr>
          <td><strong>Address:</strong></td>
          <td><input onChange={this.handleChange} value={this.props.student.address} /></td>
        </tr>
        // <p><strong>Level:</strong><input onChange={this.handleChange} value={this.props.student.level} /></p>
        // // <p><strong>GPA:</strong><input onChange={this.handleChange} value={this.props.student.gpa} /></p>
        // <p><strong>Address:</strong><input onChange={this.handleChange} value={this.props.student.address} /></p>
      </tbody>
    </table>
    <button className={"btn btn-success"} type="submit">Create</button>
  </form>
