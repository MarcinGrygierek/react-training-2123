fetch('https://api.ipify.org?format=json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log('BŁAD!', e);
  });
