import React from 'react'

export default React.createClass({
  handleLink: function () {
    //this.props.onClickStudentLink(this.props.id);
  },
  render: function () {
    return (
      <tr>
        <td><a href="#" onClick={this.handleLink}>{this.props.name}</a></td>
      </tr>
    );
  }
});
