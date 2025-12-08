import { createFileRoute } from "@tanstack/react-router";

// ROUTE -----------------------------------------------------------------------------------------------------------------------------------
export const Route = createFileRoute("/")({
  component: IndexPage,
});

// MAIN ------------------------------------------------------------------------------------------------------------------------------------
function IndexPage() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
