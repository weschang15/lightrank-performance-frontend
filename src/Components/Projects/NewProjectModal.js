import React from "react";
import NewProject from "./NewProject";
import { Modal } from "Elements";

const NewProjectModal = ({ on, toggle }) => (
  <Modal on={on} toggle={toggle}>
    <NewProject />
  </Modal>
);

export default NewProjectModal;
