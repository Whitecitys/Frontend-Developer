arr = ['adam','wanda','john','sean','danny','jean']

arrs = [];
for(i=0;i<arr.length;i++){
    var lastword = arr[i].split("").pop();
    if(lastword=="n"){
        arrs.push(arr[i]);
    }
}
console.log(arrs);

