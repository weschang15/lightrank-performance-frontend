import React from "react";
import NewReport from "./NewReport";
import { Modal } from "Elements";

const NewReportModal = ({ on, toggle }) => (
  <Modal on={on} toggle={toggle}>
    <NewReport />
  </Modal>
);

export default NewReportModal;
