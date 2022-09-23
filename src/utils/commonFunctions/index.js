export const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const removeExtension = (str) => str.split(".").slice(0, -1).join(".");

export const dateAndTime = (date) =>
  date.toLocaleDateString("us-EN", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

export const timeString = (date) => {
  if (!date) return "";
  if (typeof date === "string") date = new Date(date);
  const options = { hour: "2-digit", minute: "2-digit" };
  return date.toLocaleTimeString("en-US", options);
};
