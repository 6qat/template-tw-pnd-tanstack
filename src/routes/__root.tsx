import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { Link } from "@/components/link";
import { LinkRouter } from "@/components/link-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <LinkRouter>
          <Link
            href="/"
            className={({ isCurrent }) => (isCurrent ? "font-bold" : "")}
          >
            Home
          </Link>{" "}
          <Link href="/about" className="data-[active=true]:font-bold">
            About
          </Link>
        </LinkRouter>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
