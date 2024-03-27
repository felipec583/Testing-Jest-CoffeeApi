//Funcion que crea ID que no existe en una base de datos

function generateRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

function createNonExistentId(data) {
  let nonExistentId;
  const dataIds = getDataIds(data);

  do {
    nonExistentId = generateRandomNumber();
  } while (dataIds.includes(nonExistentId));
  return nonExistentId;
}

function getDataIds(data) {
  const dataIds = [...data].map((values) => values.id);
  return dataIds;
}

export { createNonExistentId };
