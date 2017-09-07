console.log('Starting App');

setTimeout(() => {
  console.log('Inside Of Callback');
},2000);

setTimeout(() => {
  console.log('Second Set Timeout');
},0);
 
console.log('Finishing App');
