import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { ComponentRender } from "shared/lib/tests/componentRender/componentRender";

describe("Button", () => {
    test("Test render", () => {
        ComponentRender(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("Test toggle", () => {
        ComponentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
