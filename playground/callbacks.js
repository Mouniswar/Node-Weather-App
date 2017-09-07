var getUser = (id, callback) => {
  var user = {
    id:id,
    name:'Mouni'
  };

  setTimeout(()=>{
    callback(user);
  },3000);
  // callback(user);
};

getUser(31, (userObject) => {
  console.log(userObject);
});
