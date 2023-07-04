// Remova os comentários a medida que for implementando as funções
const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const url = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`;

  if (!term) {
    window.alert('Nenhuma cidade encontrada');
    return [];
  }
  const response = await fetch(url);
  const data = await response.json();

  if (data.length === 0) {
    window.alert('Nenhuma cidade encontrada');
    return [];
  }
  return data;
};

export const getWeatherByCity = async (cityURL) => {
  const url = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`;

  const response = await fetch(url);
  const { location: { name, country },
    current: { temp_c: temp, condition: { icon, text } } } = await response.json();

  return { name, country, temp, icon, condition: text };
};
