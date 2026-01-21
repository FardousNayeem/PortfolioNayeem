import { Row } from "react-bootstrap";
import { GitHubCalendar } from "react-github-calendar";

export default function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      <GitHubCalendar
        username="FardousNayeem"
        blockSize={30}
        blockMargin={10}
        fontSize={20}
        theme={{
          light: ["#ebedf0", "#c084f5"],
          dark: ["#161b22", "#c084f5"],
        }}
      />
    </Row>
  );
}
