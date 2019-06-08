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
    const { loadMore, data } = this.props;
    const {
      projects: { rows }
    } = data;

    const projectItems = rows.map(project => (
      <ProjectListItem key={project.uuid} project={project} />
    ));

    return (
      <>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Users</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>{projectItems}</TableBody>
        </Table>
        <div>
          <button onClick={loadMore}>Next page</button>
        </div>
      </>
    );
  }
}

export default ProjectList;
