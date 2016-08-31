import React from 'react'

export default React.createClass({
  handleEdit: function () {
    this.props.onClickEditLink(this.props.student.id);
  },
  handleDelete: function () {
    var post_path = base_url + "products/" + this.props.student.id;
    //$.ajax({async: false, url: post_path, type: "DELETE", success: function(){}});
    this.props.onClickDeleteLink();
  },
  render: function () {
    return (
      <div className={"frame-level-0 " + this.props.className}>
        <h3>Student Info.</h3>
        <p><strong>Name:</strong>{this.props.student.name}</p>
        <button className={"btn btn-default"} onClick={this.props.onClickIndexLink} >Back to Index</button>
        <button className={"btn btn-default"} onClick={this.handleEdit}>Edit</button>
        <button className={"btn btn-danger"} onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
});
