var user = {
  "id": "0983752",
  "username": "morel893",
  "password": "neokcmpejijhejh89y983bceinjcniuhd7he8wgc78",
  "data": {
    "name":'rodolfo morel',
    "email":"morel893@gmail.com",
    "city":"Bronx",
    "country":"USA"
  },
  "preferencia": {
    "contact": {
      "email": true,
      "notify": true
    },
    "interest": [
      "js",
      "nodejs",
      "express"
    ]
 }

};


// object:
//user.id.username;
// JSON.stringify
// jsonSerialiazado
var jsonSerialiazado = JSON.stringify(user.preferencia); //toLowerCase //
// console.log(jsonSerialiazado);

var jsonReconstruido = JSON.parse(jsonSerialiazado);
console.log(jsonReconstruido);
// jsonReconstruido.data.city;
