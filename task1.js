// Task 1: getServerURL()
export function getServerURL() {
  const protocol = process.env.PROTOCOL || 'http';
  const host = process.env.HOST || 'localhost';
  const port = process.env.PORT || 3000;
  
  return `${protocol}://${host}:${port}`;
}
