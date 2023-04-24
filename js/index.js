const numInput = prompt('Enter a series of numbers with space in beetwewn each');
console.log(numInput, 'user numbers');
const numArray = numInput.split(' ');
console.log(numArray, 'Split array');
const sortNumArray = numArray.sort((a,b) => {
    return a - b 
})
console.log(sortNumArray, 'Sorted array')
console.log(sortNumArray.length, 'length of the array')
if(sortNumArray.length > 4){
    const newArray = sortNumArray.splice(1,3);
console.log(newArray,'Deleted elemets')
console.log(sortNumArray, 'Array after deleted 2-4 elements')


}