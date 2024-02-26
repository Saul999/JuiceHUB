import { Table } from "react-bootstrap";

function SongAttributes() {
  return (
    <>
      <Table striped bordered hover size="sm" responsive="lg">
        <thead>
          <tr className="list-header">
            <th>#</th>
            <th>Era</th>
            <th>Title</th>
            <th>Info</th>
            <th>Date Leaked</th>
            <th>Type</th>
            <th>Circulating</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </>
  );
}

export default SongAttributes;
