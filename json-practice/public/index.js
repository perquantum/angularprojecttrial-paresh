var xmlhttp = new XMLHttpRequest();
var theUrl = "https://jsonplaceholder.typicode.com/users";
xmlhttp.open("POST", theUrl);
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.send(JSON.stringify({ "id":5, "first_name":"Mahesh", "last_name":"Vala", "email":"someemail" }));
console.log(JSON.stringify(theUrl));
console.log(xmlhttp.open("GET", theUrl));


fetch('E:/Week2/angularprojecttrial-paresh/json-practice/public/db.json')
  .then(response => response.json())
  .then(data => console.log(data));