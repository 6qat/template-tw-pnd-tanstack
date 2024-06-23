import { useRouter } from "@tanstack/react-router";
import { RouterProvider } from "react-aria-components";

function LinkRouter({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <RouterProvider
      navigate={(to) => router.navigate({ to })}
      useHref={(to) => router.buildLocation({ to }).href}
    >
      {children}
    </RouterProvider>
  );
}

export { LinkRouter };
