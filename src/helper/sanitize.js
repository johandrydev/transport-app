export const sanitize = (str) => {
  return str.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ ]/g, "").toLowerCase();
};