import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectListItem from "./ProjectListItem";

class ProjectList extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    subscribeToMore: PropTypes.func.isRequired
  };

  static defaultProps = {
    subscribeToMore: () => null
  };

  componentDidMount = () => {
    const { subscribeToMore } = this.props;
    subscribeToMore();
  };

  render() {
    const { projects } = this.props.data;

    return projects.map(project => (
      <ProjectListItem key={project.id} project={project} />
    ));
  }
}

export default ProjectList;
