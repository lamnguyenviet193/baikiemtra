function kiemTraScp(n){
   
    let flag = 0;

    let i = 0;
    while(i <= n){
        if( Math.pow( i, 2) == n ) {   
            flag = 1;
            break; 
        }
        i++;
    }

    return flag;
}
const inCacScp = function () {
    const a = Number.parseInt(prompt('Nhập vào số a: '));
    const b = Number.parseInt(prompt('Nhập vào số b: '));
    if (a < b) {
        for (let i = a + 1; i < b; i++) {
            if (kiemTraScp(i)) {
                console.log(i + ' ');
            }
        }
    }
    else {
        for (let i = b + 1; i < a; i++) {
            if (kiemTraScp(i)) {
                console.log(i + ' ');
            }
        }
    }
};

inCacScp();
