import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import { cleanup, render } from "@testing-library/react";
import Carousel from "./Carousel";

describe("Test Carousel", () => {
  afterEach(cleanup);

  // snapshot test
  it("Carousel renders correctly", () => {
    const tree: ReactTestRendererJSON | ReactTestRendererJSON[] | null =
      renderer.create(<Carousel />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // unit tests
  it("Carousel has text content", () => {
    const { getByText } = render(<Carousel />);

    const slideTitle: HTMLElement = getByText("Explore");

    expect(slideTitle).toBeDefined();
  });
});
