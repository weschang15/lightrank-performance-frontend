import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectListItem from "./ProjectListItem";
import { Table, TableHead, TableBody, TableRow, TableCell } from "Elements";

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

    const projectItems = projects.map(project => (
      <ProjectListItem key={project.uuid} project={project} />
    ));

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Avg. Scores</TableCell>
            <TableCell>Users</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>{projectItems}</TableBody>
      </Table>
    );
  }
}

export default ProjectList;
