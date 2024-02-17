import { ListGroup } from "react-bootstrap";

function ListSongs() {
  return (
    <>
      <h1>Songs</h1>

      {["sm", "md", "lg", "xl", "xxl"].map((breakpoint) => (
        <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
          <ListGroup.Item>Era</ListGroup.Item>
          <ListGroup.Item>Name</ListGroup.Item>
          <ListGroup.Item>Producer {breakpoint}</ListGroup.Item>
          <ListGroup.Item>Info</ListGroup.Item>
          <ListGroup.Item>Leaked Status</ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
}

export default ListSongs;
