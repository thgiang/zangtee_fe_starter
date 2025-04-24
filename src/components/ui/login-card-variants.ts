import { cva } from "class-variance-authority";

export const loginCardWrapper = cva(
  "flex justify-center items-center min-h-screen bg-muted"
);

export const loginCard = cva(
  "w-full max-w-md shadow-xl border-0"
);

export const loginCardHeader = cva(
  "flex flex-col items-center gap-2 pb-2"
);

export const loginCardAvatar = cva(
  "w-16 h-16 mb-2"
);

export const loginCardTitle = cva(
  "text-2xl font-bold tracking-tight text-center"
);

export const loginCardDesc = cva(
  "text-muted-foreground text-sm text-center"
);

export const loginCardContent = cva(
  "flex flex-col gap-6 pt-2"
);

export const loginCardButton = cva(
  "w-full flex items-center gap-2 justify-center font-semibold text-base border"
);

export const loginCardTerms = cva(
  "text-xs text-center text-muted-foreground"
);
