import React from 'react'

export default React.createClass({
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
            </tbody>
          </table>
          <button className={"btn btn-default"} onClick={this.props.onClickIndexLink} >Back to Index</button>
          <button className={"btn btn-success"} type="submit">Create</button>
        </form>
      </div>
    );
  }
});
