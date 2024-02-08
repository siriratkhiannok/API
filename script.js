const table = document.getElementById("Table");

async function getData() {
  const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    let row = document.createElement('tr');
    let name = document.createElement('td');
    let detail = document.createElement('td');
    name.appendChild(document.createTextNode(data[i]['name']));
    detail.appendChild(document.createTextNode(data[i]['description']));
    row.appendChild(name);
    row.appendChild(detail);
    table.appendChild(row);
  }
}