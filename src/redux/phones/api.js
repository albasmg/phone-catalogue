export const getDataFromApi = () => {
  return fetch('http://localhost:5000/phones').then((response) =>
    response.json()
  );
};
