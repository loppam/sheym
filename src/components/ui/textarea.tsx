import * as React from "react";

import { cn } from "./utils";
import "./textarea.css";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn("textarea", className)}
      {...props}
    />
  );
}

export { Textarea };
