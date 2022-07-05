import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CourseOverviewListItem from "./CourseOverviewListItem";


it('renders on the page', () => {
    render(<CourseOverviewListItem />)
    const list = screen.getByTestId("course-list-item");
    expect(list).toBeInTheDocument();
})