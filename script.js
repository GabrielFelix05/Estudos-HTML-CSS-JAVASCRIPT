var array = []
var array1 = [1, 2, 3, 4, 5, 6, 7, 8]
var array2 = [9, 10, 11, 12, 13, 14, 15]

array[0] = array1
array[1] = array2

for(i = 0; i < array.length; i++) {
    for(x = 0; x < array[i].length; x++) {
        console.log(array[i][x])
    }
}