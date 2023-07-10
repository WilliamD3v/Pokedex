import axios from "./../axio";

/* Generation name */

const getApiGeneration = async () => {
  const response = await axios.get("/generation");
  return response.data.results
}

export default getApiGeneration;

/* Gemerations 1 */
export const getApiGenerationID1 = async (): Promise<any> => {
  const response = await axios.get("/generation/1")
  console.log(response.data.pokemon_species)
}

/* Gemerations 2 */

export const getApiGenerationID2 = async (): Promise<any> => {
  const response = await axios.get("/generation/2")
  return response;
}
getApiGenerationID2()

/* Gemerations 3 */

/* const getApiGenerationID3 = async () => {
  const response = await axios.get("/generation/3")
  console.log(response);
}
getApiGenerationID3() */

/* Gemerations 4 */

/* const getApiGenerationID4 = async () => {
  const response = await axios.get("/generation/4")
  console.log(response);
}
getApiGenerationID4() */

/* Gemerations 5 */

/* const getApiGenerationID5 = async () => {
  const response = await axios.get("/generation/5")
  console.log(response);
}
getApiGenerationID5() */

/* Gemerations 6 */


/* const getApiGenerationID6 = async () => {
  const response = await axios.get("/generation/6")
  console.log(response);
}
getApiGenerationID6() */

/* Gemerations 7 */

/* const getApiGenerationID7 = async () => {
  const response = await axios.get("/generation/7")
  console.log(response);
}
getApiGenerationID7() */

/* Gemerations 8 */

/* const getApiGenerationID8 = async () => {
  const response = await axios.get("/generation/8")
  console.log(response);
}
getApiGenerationID8() */

/* Gemerations 9 */

/* const getApiGenerationID9 = async () => {
  const response = await axios.get("/generation/9")
  console.log(response);
}
getApiGenerationID9() */