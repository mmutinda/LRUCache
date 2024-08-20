import { MRUCache } from './MRUCache'; 

const limit = 1000;

function benchmarkShift(arraySize:number) {
    console.log(`benchmarkShift() with size ${arraySize}`);
    const array = [];
    console.time(`shift()`);

    for(var i=0; i < arraySize; i++) {
        if(array.length >= limit) {
            array.shift();
        }
        array.push(i); 
    }
    console.timeEnd(`shift()`);
    console.log('Function shift() ended with list of items ', array.length);
}


// Function to benchmark splice() performance
function benchmarkMRUCache(arraySize: number) {
  console.log(`benchmarkMRUCache() with size ${arraySize}`);
    const cache = new MRUCache(limit);

    console.time(`MRU cache()`);

    for(var i=1; i < arraySize + 1; i++) {
        cache.add(`${i}`, i);
    }
    
    console.timeEnd(`MRU cache()`);
    // console.log('Function MRU cache() ended with list of items ', cache.getItems().length);
}

// Run benchmarks with different array sizes
const sizes = [10000, 200000];

sizes.forEach(size => {
    console.log(`==================================================================================`);
    benchmarkShift(size);
    benchmarkMRUCache(size)
    console.log('==================================================================================');
});



