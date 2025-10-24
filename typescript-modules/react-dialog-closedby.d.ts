import "react";

declare module "react" {
  interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
    /** HTML <dialog> attribute (lowercase in HTML, camelCase property is `closedBy`) */
    closedby?: "any" | "closerequest" | "none";
  }
}
