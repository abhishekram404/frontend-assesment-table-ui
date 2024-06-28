import Button from "./components/Button/Button";
import { Icon } from "@iconify/react";

function App() {
  return (
    <>
      <Button leftIcon={<Icon icon={"bi:filter"} fontSize={20} />}>
        Add filters
      </Button>
      <Button
        leftIcon={<Icon icon={"basil:eye-closed-outline"} fontSize={20} />}
      >
        Show metadata{" "}
      </Button>
      <Button variant="primary">Operations</Button>
      <Button variant="secondary">Operations</Button>
    </>
  );
}

export default App;
