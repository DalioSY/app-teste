export function formatDate(date) {
  return new Date(date)
    .toLocaleDateString("pt-Br", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "/")
    .replace(/\./g, "/");
}
