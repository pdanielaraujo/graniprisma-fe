import { Suppliers } from "@pages/Suppliers";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/suppliers")({
  component: Suppliers,
});
