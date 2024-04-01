import Button from "../components/Button";
import { GoBell, GoCloud, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleCLick = () => {
    console.log("click");
  };
  return (
    <div>
      <div>
        <Button
          secondary
          outline
          rounded
          className="mb-5"
          onClick={handleCLick}
        >
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleCLick}>
          <GoCloud />
          Buy now
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deal
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
