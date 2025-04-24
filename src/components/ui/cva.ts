import { cva } from "class-variance-authority";

// Card/Section wrappers
export const container = cva("flex justify-center items-center min-h-screen bg-muted");
export const card = cva("w-full max-w-md shadow-xl border-0");
export const cardHeader = cva("flex flex-col items-center gap-2 pb-2");
export const cardAvatar = cva("w-16 h-16 mb-2");
export const cardTitle = cva("text-2xl font-bold tracking-tight text-center");
export const cardDesc = cva("text-muted-foreground text-sm text-center");
export const cardContent = cva("flex flex-col gap-6 pt-2");
export const cardActions = cva("flex flex-col gap-4");

// Button
export const actionButton = cva(
  "w-full flex items-center gap-2 justify-center font-semibold text-base border"
);

// Terms, note, etc
export const smallText = cva("text-xs text-center text-muted-foreground");

// Section wrapper (dùng cho page khác)
export const section = cva("w-full max-w-2xl mx-auto p-6 bg-background rounded-xl shadow");

// Avatar chung
export const avatar = cva("w-16 h-16 mb-2");
