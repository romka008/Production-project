import { ComponentRender } from "@/shared/lib/tests/componentRender/componentRender";
import AppRouter from "./AppRouter";
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from "@/shared/const/router";
import { screen } from "@testing-library/react";
import { UserRole } from "@/entities/User";

describe("app/router/AppRouter", () => {
    test("Страница AboutPage должна отрендериться", async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId("AboutPage");
        expect(page).toBeInTheDocument();
    });
    test("Страница не найдена", async () => {
        ComponentRender(<AppRouter />, {
            route: "/qwertyqwerty",
        });

        const page = await screen.findByTestId("NotFoundPage");
        expect(page).toBeInTheDocument();
    });
    test("Страница ProfilePage должна отрендериться", async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteProfile("1"),
            initialState: {
                user: {
                    _inited: true,
                    authData: { username: "User", id: "1", roles: [UserRole.MANAGER] },
                },
            },
        });

        const page = await screen.findByTestId("ProfilePage");
        expect(page).toBeInTheDocument();
    });
    test("Редирект неавторизвованного пользователя на главную", async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteProfile("1"),
        });

        const page = await screen.findByTestId("MainPage");
        expect(page).toBeInTheDocument();
    });
    test("Доступ к закрытой странице для авторизованного пользователя", async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteProfile("1"),
            initialState: {
                user: {
                    _inited: true,
                    authData: { username: "User", id: "1", roles: [UserRole.MANAGER] },
                },
            },
        });

        const page = await screen.findByTestId("ProfilePage");
        expect(page).toBeInTheDocument();
    });
    test("Доступ запрещён, отсутствует роль", async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    _inited: true,
                    authData: { username: "User", id: "1", roles: [UserRole.USER] },
                },
            },
        });

        const page = await screen.findByTestId("ForbiddenPage");
        expect(page).toBeInTheDocument();
    });
    test("Доступ разрешен (присутствует роль)", async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    _inited: true,
                    authData: { username: "User", id: "1", roles: [UserRole.ADMIN] },
                },
            },
        });

        const page = await screen.findByTestId("AdminPanelPage");
        expect(page).toBeInTheDocument();
    });
});
