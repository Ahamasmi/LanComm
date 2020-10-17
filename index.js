const text='Your way to fast, seamless and secure local communication.';
let count =0;
let index =0;
let currText="";
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
async function type(){
    while(1)
    {
    letter=text.slice(0,++index);
    document.querySelector('#tag').innerHTML=letter;
    if(letter.length === currText.length){
        break;
    }
    count++;
    await sleep(70);
}
}
type();




console.log("Hello");