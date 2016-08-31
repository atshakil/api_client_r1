import React from 'react'

export default React.createClass({
  handleSubmit: function () {

  },
  handleIndexLink: function () {

  },
  render: function () {
    return (
      <div className="frame-level-0">
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
          <button className={"btn btn-default"} onClick={this.handleIndexLink} >Back to Index</button>
          <button className={"btn btn-success"} type="submit">Create</button>
        </form>
      </div>
    );
  }
});
