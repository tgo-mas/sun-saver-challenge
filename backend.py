export const getExamples = async () => {
  const response = await fetch("http://localhost:8000/api/examples/");
  return response.json();
};