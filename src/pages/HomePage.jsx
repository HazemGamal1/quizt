import { Link } from "react-router-dom";
import Button from "../components/Button";
import HeaderText from "../components/HeaderText";

import { useUser } from "../contexts/UserContext";

function Home() {
  const { notify } = useUser();

  return (
    <>
      <HeaderText>Hi there, Welcome to our Quiz Application</HeaderText>
      <div className="flex justify-between items-center gap-8">
        <Link to="/quiz-id">
          <Button type="primary">Join a Quiz</Button>
        </Link>
        <Link>
          <Button
            onClick={() =>
              notify("This feature is underdevelopment", "top-right", "info")
            }
            type="secondary"
          >
            Host a Quiz
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Home;
