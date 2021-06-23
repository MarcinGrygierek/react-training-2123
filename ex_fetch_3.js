try {
  const response = await fetch('https://api.ipify.org?format=json', {
    method: 'GET',
    withCredentials: true, // dołącza ciastko z danej strony do zapytania
    headers: {
      'Content-Type': 'application/json',
    }, // szczególnie potrzebnep przy wysyłaniu danych
    //   body: JSON.stringify(), // przy przesyłaniu danych należy zmienić je najpierw w JSONa
  });
  const data = await response.json();
  console.log(data);
} catch (e) {
  console.log('ERROR', e);
}
