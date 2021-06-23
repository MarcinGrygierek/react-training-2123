try {
  const response = await fetch('https://api.ipify.org?format=json');
  const data = await response.json();
  console.log(data);
} catch (e) {
  console.log('ERROR', e);
}
