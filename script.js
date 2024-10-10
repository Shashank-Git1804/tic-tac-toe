let items=document.querySelectorAll(".items");
// console.dir(items);
let button=document.querySelector("button");
// console.dir(button);
let h1=document.querySelector("h1");
console.dir(h1);
let control='p1';
let winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,4,6],
    [2,5,8],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],   
];
let container=document.querySelector(".container");
let count=1;
let start=document.querySelector(".start");
let addDiv=document.createElement("div");
console.log(addDiv)
h1.after(addDiv);
addDiv.style.backgroundColor="white";
addDiv.style.width="100%";
addDiv.style.height="4rem";
let h3=document.createElement("h3");
addDiv.prepend(h3);
h3.style.textAlign="center";
h3.innerText="Start...!!"

items.forEach((item)=>{
    item.addEventListener("click",()=>{
        // console.log("clicked");
        let className=item.getAttribute("class");
        console.log(className);
        if(control==='p1'){
            player1(items,item);
        }
        else{
           player2(items,item);
        }
        item.disabled=true;
    });
});

let player1=(items,item)=>{
    control='p2';
    // let useritem=item.classList.add("clicked");
    // console.log(useritem);  
    let font=item.classList.add("p1"); 
    console.log(font);
    item.innerText="X";
    item.classList.remove("p2");
    // item.disabled=true;
    h3.innerText="Player-2";
    h3.style.color="blue";
    setWinner(items,item);
}

let player2=(items,item)=>{
    control='p1';
    let compitem=item.classList.add("p2");
    item.innerText="O";
    console.log(compitem);
    item.classList.remove("p1"); 
    // item.disabled=true; 
    h3.innerText="Player-1";
    h3.style.color="red";
    setWinner(items,item);
}

let setWinner=(items)=>{
    // console.log(items);
    count++;
    for(let pattrens of winpatterns){
        let x=items[pattrens[0]].innerText;
        let y=items[pattrens[1]].innerText;
        let z=items[pattrens[2]].innerText;
        if(x!=="" && y!=="" && z!==""){
            if(x==y && y==z && z==x){
                
                if(x==='X'){
                    h3.innerText=`Congratulation! Player-1 won`;
                    h3.style.color="white";
                    h3.style.fontSize="x-large"
                    addDiv.style.backgroundColor="black";
                    // h3.style.textTransform="uppercase";
                    // resetdiv.classList.remove("hide");
                    addDiv.style.position="absolute";
                    addDiv.style.top="43%";
                    addDiv.style.zIndex="2";
                    // start.classList.add("hide");
                    start.innerText='START NEW GAME';
                    start.style.color='white';
                    start.style.fontSize="x-large"
                    disbleItems();
                }
                else if(x==='O'){
                    h3.innerText=`Congratulation! Player-2 won`;
                    h3.style.color="white";
                    h3.style.fontSize="x-large"
                    addDiv.style.backgroundColor="black";
                    // h3.style.textTransform="capitalize";
                    // resetdiv.classList.remove("hide");
                    addDiv.style.position="absolute";
                    addDiv.style.top="43%";
                    addDiv.style.zIndex="2";
                    // start.classList.add("hide");
                    start.innerText='START NEW GAME';
                    start.style.color='white';
                    start.style.fontSize="x-large"
                    disbleItems();
                    
                } 
            }
            if(count===10)
                if(x!==y || y!==z || z!==x){
                h3.innerText=`Its a Draw, Try Again!!`;
                h3.style.color="white";
                h3.style.fontSize="x-large";
                addDiv.style.backgroundColor="black";
                // h3.style.textTransform="uppercase";
                // resetdiv.classList.remove("hide");
                addDiv.style.position="absolute";
                addDiv.style.top="43%";
                addDiv.style.zIndex="2";
                // start.classList.add("hide");
                start.innerText='START NEW GAME';
                start.style.color='white';
                start.style.fontSize="x-large"
            // container.classList.add("hide");
                disbleItems();  
            }  
        }
    }    
}
let disbleItems=()=>{
    for(let i of items){
        i.disabled=true;
    }
}

let enableItems=()=>{
    for(let i of items){
        i.disabled=false;
        addDiv.style.backgroundColor="white";
        addDiv.style.width="100%";
        addDiv.style.height="4rem";
        h3.innerText="Start...!!"
        h3.style.color="black";
        h3.style.fontSize="300%"
        addDiv.style.position="relative";
        addDiv.style.bottom="43%";
        addDiv.style.zIndex="1";
        i.innerText="";
        start.innerText='reset game';
        start.style.fontSize="x-large"
        start.style.textTransform="uppercase";
        // resetdiv.classList.add("hide")
        // start.classList.remove("hide");
    }
}


// resetdiv.addEventListener("click",enableItems);
start.addEventListener("click",enableItems);