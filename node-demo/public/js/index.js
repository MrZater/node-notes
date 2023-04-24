// fetch("http://localhost:5008/api/student").then(res=>res.json()).then(resp=>{
//   console.log(resp)
// })
fetch("http://localhost:5008/api/student", {
  method: "POST",
  headers: {
    "content-type": "application/json",
    a: "1",
  },
  credentials:'include'
})
  .then((res) => res.json())
  .then((resp) => {
    console.log(resp);
  });
