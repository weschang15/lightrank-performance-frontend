import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectListItem from "./ProjectListItem";

class ProjectList extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    subscribeToMore: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
  };

  static defaultProps = {
    isLoading: false,
    subscribeToMore: () => null
  };

  componentDidMount = () => {
    const { subscribeToMore } = this.props;
    subscribeToMore();
  };

  render() {
    const {
      data: { projects },
      isLoading
    } = this.props;

    if (isLoading) {
      return <h4>Loading...</h4>;
    }

    console.log(isLoading, projects);

    return projects.map(project => (
      <ProjectListItem key={project.id} project={project} />
    ));
  }
}

export default ProjectList;
