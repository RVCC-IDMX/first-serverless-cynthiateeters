const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

/*
https://github.com/node-fetch/node-fetch/blob/HEAD/docs/v3-UPGRADE-GUIDE.md#converted-to-es-module

*/

exports.handler = async function () {
  console.log(`in pokedex`)
  const POKE_API = 'https://pokeapi.co/api/v2/pokedex/kanto';
  const response = await fetch(POKE_API);
  const data = await response.json();

  console.log(data);

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}

