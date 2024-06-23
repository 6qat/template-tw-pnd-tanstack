import { Button } from "@/components/jolly/button";
import { Switch } from "@/components/jolly/switch";
import { createFileRoute } from "@tanstack/react-router";
import { css } from "~/styled-system/css";

export const Route = createFileRoute("/")({
  component: () => <Root />,
});

function Root() {
  const abc = 1;

  return (
    <>
      <div className={css({ fontSize: "4xl", fontWeight: "bold" })}>
        Hello 🐼!
      </div>
      <p className="text-2xl font-bold">This is the home page.</p>
      <div className="mb-4">
        <Button variant="default" className="mr-2">
          Default
        </Button>
        <Button variant="outline" className="mr-2">
          Outline
        </Button>
        <Button variant="destructive" className="mr-2">
          Destructive
        </Button>
        <Button variant="ghost" className="mr-2">
          Ghost
        </Button>
        <Button variant="secondary" className="mr-2">
          Secondary
        </Button>
        <Button variant="link">Link</Button>
      </div>
      <Switch />
    </>
  );
}
