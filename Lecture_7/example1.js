const p1 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve('Promise 1 Resolved')
    } , 2000)
  })
  
  const p2 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve('Promise 2 Resolved')
    } , 1000)
  })
  
  
  async function handlePromise(){
      try{
      const res1 = await p1;
      console.log(res1);
      const res2 = await p2;
      console.log(res2);
      }
      catch(err){
          console.log("Something went wrong ",err);
      }
  }

  // calling function 
  handlePromise();