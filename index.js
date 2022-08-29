// first javascript

// build 2x2 array of buttons
const listButton = [];
for (let i=1; i<=8; i++) {
    const firstArray = [];
    for (let j=1; j<=8; j++) {
        myItem = 'but'+i.toString()+j.toString();
        firstArray.push(myItem);
    };
    listButton.push(firstArray);
};

// random recom to start
function recomPick(id) {        
    let pick = Math.floor(Math.random()*(8-1+1)+1)-1;
    const p = document.getElementById(listButton[0][pick]);
    p.className = 'btn btn-primary';
    // add onclick to the next col                 
    for (let i=1; i<=8; i++) {
        myElement = 'but1' + i;
        const element = document.getElementById(myElement);
        element.setAttribute('onclick', 'selectPick(this)'); 
    }
}

let alreadyClicked = [];
let availableProd = [1,2,3,4,5,6,7,8];               // keep tracks of available recommendations 
// track selection against recommendation
function selectPick(id) {
    const x = document.getElementById(id.id);
    const thiscol = parseInt(x.id.substr(3,1));
    const nextcol = thiscol + 1;
    
    alreadyClicked.push(parseInt(x.id.substr(4,1)));   // keep track of already clicked
    console.log('already clicked: ' + alreadyClicked);
    
    if (x.className == 'btn btn-primary') {
         x.className = 'btn btn-success';
    } else {
        
        x.className = 'btn btn-danger';
    }
    //console.log(parseInt(x.id.substr(4,1)));
    
    //remove all onclick from current col
    for (let i=1; i<=8; i++) {
        myElement = 'but'+ thiscol + i;
        const element = document.getElementById(myElement);
        element.removeAttribute('onclick');
    }
    
    // simulate recom using random integer
    poollen = availableProd.length - 1;
    // console.log('poollen: ' + poollen);
    for (let i=0; i<=poollen; i++) {
        if (alreadyClicked.includes(availableProd[i])) {
            availableProd.splice(i, 1);
        }
    }
    console.log('available pool:  ' + availableProd);
    
    let pick = Math.floor(Math.random()*availableProd.length);
    if (thiscol <= 7) {
        
        console.log('rec pick:' + availableProd[pick]);
        const p = document.getElementById(listButton[thiscol][availableProd[pick]-1]);
        
        p.className = 'btn btn-primary';
    }
    // add onclick to the next col only it hasn't already been clicked   
    // console.log('nextcol = ' + nextcol);
    for (let i=1; i<=8; i++) {
        myElement = 'but'+ nextcol + i;
        //console.log(parseInt(myElement.substr(4,1)));
        if (nextcol <= 8 && !alreadyClicked.includes(i)  ) {
            const element = document.getElementById(myElement);
            element.setAttribute('onclick', 'selectPick(this)');
        }
        //console.log(element);  
    } 
}

// onclick='selectPick(this)'
// build html cards
prodSet = ['mob','ml','cust','edu1','edu2','prd1','prd2','trad'];
for (let i=1; i<=8; i++) {
    for (let j=1; j<=8; j++) {
        myName = 'but'+i.toString()+j.toString();
        
        myHtml =  "<div class='card' style='width: 6rem;'><div class='card-body'><h5 class='card-title'>" + prodSet[j-1] + "</h5><p class='card-text'></p><a href='#' id="+myName+"  class='btn btn-secondary'>Select</a></div></div>";
        myCol = "colxx"+i;
        let myText = document.getElementById(myCol);
        myText.innerHTML += myHtml;
    };
};

