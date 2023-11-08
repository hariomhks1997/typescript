const num1element1=document.getElementById('num1') as HTMLInputElement;
const num1element2=document.getElementById('num2') as HTMLInputElement;
const buttonelement=document.querySelector('button')!;
const numresult:Array<number>=[];
const textresult:string[]=[];

type NumOrString=number | string;
type Result={val:number;timestamp:Date };
interface ResultObj{
   val:number;
   timestamp:Date; 
}
function add(num1:number | string, num2:number |string){
    if(typeof num1==='number' && typeof num2==='number'){
      return num1 +num2  
    }else if (typeof num1==='string' && typeof num2==='string'){
        return num1+' ' +num2  
    }
    return +num1+ +num2;
}
//console.log(add(1, 6));
//console.log(add('1', '6'));
function printresult(resultobj:ResultObj){
    console.log(resultobj.val)
}
    buttonelement.addEventListener('click',()=>{
        const num1=num1element1.value;
        const num2=num1element2.value;
        const result=add(+num1,  +num2);
        numresult.push(result as number)
       const stringresult=add(num1,num2)
        textresult.push(stringresult as string);
       
        
        printresult({val:result as number,timestamp:new Date()})
        console.log(numresult,"244",textresult)
        
        });

const myPromise=new Promise<string>((resolve,reject)=>{
    setTimeout(() => {
        resolve("it worked!  ")
    }, 1000);
});
myPromise.then((result)=>{
    console.log(result.split("w")); 
})