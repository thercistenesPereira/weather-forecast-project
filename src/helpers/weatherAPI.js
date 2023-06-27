// Remova os comentários a medida que for implementando as funções
// import { VITE_TOKEN } 'import.meta.env';
const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const url = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${encodeURIComponent(term)}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.length === 0) {
      window.alert('Nenhuma cidade encontrada');
      return [];
    }

    return data;
  } catch (error) {
    console.error('Erro ao pesquisar cidades:', error);
    return [];
  }
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
