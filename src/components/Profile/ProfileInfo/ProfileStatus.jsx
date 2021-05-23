import React from "react";
import c from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {

    state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState( {
      editMode: true
    })
  };

  deActivateEditMode = () => {
    this.setState( {
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChahge = (e) => {
    this.setState({
      status: e.currentTarget.value
    });
  }


  render () {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode} >{this.props.status || "No status"}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChahge}
                   autoFocus={true}
                   onBlur={this.deActivateEditMode}
                   value={this.state.status} />
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;
