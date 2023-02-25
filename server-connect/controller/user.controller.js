let users = [
  {
    id: 1,
    gender: "male",
    name: "David",
    contact: "01683338523",
    address: "Narsingdi",
    photoUrl: "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/275715237_4949305155184344_833798656798632055_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGBT9mU6WP2G3G8PQLyoqO6FvIZuWeMO8wW8hm5Z4w7zHoo8uGc8j6m6BtEMMVOtBYBIBBU2gR-J260SLI-1hYR&_nc_ohc=7Pzjszuhu_sAX-TkmDd&_nc_ht=scontent.fdac24-1.fna&oh=00_AT-zO2RDRuVYjknJ7S05MAJr_DpTFX7cohZzDkOdhRar4w&oe=6318FD9B",
  },
  {
    id: 2,
    gender: "male",
    name: "Parvez",
    contact: "01723726665",
    address: "Narsingdi",
    photoUrl: "https://scontent.fdac24-2.fna.fbcdn.net/v/t1.6435-9/154368297_3774950732619798_6682339353723604282_n.jpg?stp=dst-jpg_p843x403&_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGjbILQZ_SVSO0kQYOHCwXbswEDRKPvVmKzAQNEo-9WYsokzAqETCFtRKYZQPWXiZvNwbRogeo6kmMWuBNSFLvY&_nc_ohc=dGYFOpKkngkAX-pdkLU&_nc_ht=scontent.fdac24-2.fna&oh=00_AT_VCBgs3yRFUy07notxgkVeeFI0fIX3j4wMUd2hoeQHzA&oe=6337109D",
  },
  {
    id: 3,
    gender: "female",
    name: "Mitisha",
    contact: "01861818986",
    address: "Narsingdi",
    photoUrl: "https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/89196142_1229793380546952_3259142581455421440_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeE5iwwl3QPdR1G1DXU9MsuemzpXCFeu6aibOlcIV67pqNfmiSqNRT7Vwg5SxYl0WGxFyD18RIwj5RDVS_jutEuG&_nc_ohc=AwSAcriw3kUAX_dOU9Q&_nc_oc=AQngLHLpNcf4qU6JqMKir76a9tf8qpP-wsOuJPdJK36rXzj-rb1NoKGQsUpzQR1rXAw&_nc_ht=scontent.fdac24-1.fna&oh=00_AT-gq18rbgfztLtrmTuP7QCORWurPoyslfp4-JpeCQYXbA&oe=63397157",
  },
];

/* Get all the users */
module.exports.getAllUsers = (req, res) => {
  const { limit } = req.query;
  res.json(users.slice(0, limit));
};

/* Save a user */
module.exports.postAUser = (req, res) => {
  const { id, gender, name, contact, address, photoUrl } = req.body;
  // console.log(req.body);
  if ((gender, name, contact, address, photoUrl)) {
    const newData = {
      id: req.body.id || users.length + 1,
      gender: req.body.gender,
      name: req.body.name,
      contact: req.body.contact,
      address: req.body.address,
      photoUrl: req.body.photoUrl,
    };
    users.push(newData);
    res.send(users);
  } else {
    res.send(
      "Give all the properties like : gender, name, contact, address, photoUrl"
    );
  }
};

/* Get a random user */
module.exports.getAUser = (req, res) => {
  function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  let value = generateRandomInteger(3);
  const foundUser = users.find((u) => u.id === value);
  res.send(foundUser);
};

/* Update a user's information */
module.exports.updateAUser = (req, res) => {
  const { id } = req.params;
  let newData = users.find((u) => u.id === Number(id));
  if (newData) {
    newData = {
      id: req.body.id || id,
      gender: req.body.gender || newData.gender,
      name: req.body.name || newData.name,
      contact: req.body.contact || newData.contact,
      address: req.body.address || newData.address,
      photoUrl: req.body.photoUrl || newData.photoUrl,
    };
    res.send(newData);
  } else {
    res.send("user id doesn't exist");
  }
};

//Update multiple user's information
module.exports.updateMultiUser = (req, res) => {
  const { id } = req.query;
  console.log([id], [id].length);
  let newData = users.find((u) => u.id === Number(id));
};

/* Delete a User Api */
module.exports.deleteAUser = (req, res) => {
  const { id } = req.params;
  const numberId = Number(id);
  const userId = users.find((u) => u.id === numberId);
  if (numberId && userId) {
    users = users.filter((u) => u.id !== numberId);
    res.send(users);
  } else {
    res.send("put valid id number for deleting a user");
  }
};
