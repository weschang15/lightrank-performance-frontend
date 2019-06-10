import React, { Component } from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";

import { SectionContainer } from "Elements";
import styled from "styled-components";

const ChartContainer = styled(SectionContainer)``;

class ProjectOverviewChart extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };

  ref = React.createRef();

  componentDidMount() {
    const {
      draw,
      ref: { current }
    } = this;

    const { data } = this.props;

    draw(current, data);
  }

  draw = (el, data) => {
    const groups = data.map(({ scores }) => scores);
    const flattend = [].concat.apply([], groups);

    const svg = d3
      .select(el)
      .append("svg")
      .attr("width", "100%")
      .attr("height", 480);

    // svg
    //   .selectAll("rect")
    //   .data(data)
    //   .enter()
    //   .append("rect")
    //   .attr("x", (d, i) => i * 70)
    //   .attr("y", 0)
    //   .attr("width", 25)
    //   .attr("height", (d, i) => d)
    //   .attr("fill", "green");
  };

  render() {
    return <ChartContainer ref={this.ref} />;
  }
}

export default ProjectOverviewChart;
