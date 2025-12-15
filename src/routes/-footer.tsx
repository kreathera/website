import { Link } from "@tanstack/react-router";
import { cva } from "class-variance-authority";

// STYLES ----------------------------------------------------------------------------------------------------------------------------------
const FOOTER = {
  base: cva("flex w-full items-center bg-secondary px-8 py-4 text-secondary-foreground"),
};

// MAIN ------------------------------------------------------------------------------------------------------------------------------------
export function Footer() {
  return (
    <div className={FOOTER.base()}>
      <Link to="/mentions-legales">Mentions légales</Link>
    </div>
  );
}
