//Funcion que crea ID que no existe en una base de datos

function generateRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

function createNonExistentId(data) {
  let nonExistentId;
  const dataIds = new Set(getDataIds(data));

  do {
    nonExistentId = generateRandomNumber();
  } while (dataIds.has(nonExistentId));
  return nonExistentId;
}

function getDataIds(data) {
  return data.map((values) => values.id);
}

export { createNonExistentId };
