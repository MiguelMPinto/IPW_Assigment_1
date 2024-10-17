function memoize(funct) {
    const cache = {}; 

    return function(...args) {
      const key = JSON.stringify(args); 
  
      if (cache[key]) {
        console.log('Cached result:', cache[key]); 
        
        return cache[key];

      } 
      
      else {

        const result = funct(...args);
        cache[key] = result; 

        return result;
      }
    };
  }
  


function add(a, b) {
    console.log('Computing...');
    return a + b;
  }
  
  const memoizedAdd = memoize(add);
  
  console.log(memoizedAdd(2, 3)); // Computing... 5
  console.log(memoizedAdd(2, 3)); // Cached result: 5
  console.log(memoizedAdd(4, 1)); // Computing... 5
  console.log(memoizedAdd(4, 1)); // Cached result: 5