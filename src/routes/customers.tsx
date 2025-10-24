import { Customers } from "@pages/Customers";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/customers")({
  component: Customers,
});
