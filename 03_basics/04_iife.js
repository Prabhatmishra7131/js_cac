(()=>{
    console.log("Database connected");
})();

(function namedIife() {
    console.log('Second Database connected');
})();

((testName)=>{
    console.log(`Hello ${testName} welcome to te server`);
})('Prabhat')