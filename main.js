let currentPage = 1;
let lastPage = 3;


const beforeBtn = document.querySelector('#before-btn');
const afterBtn = document.querySelector('#after-btn');
const book = document.querySelector('#book');
const page1 = document.querySelector('#p1')


beforeBtn.addEventListener('click', goPrevious);
afterBtn.addEventListener('click', goNext);


function openBook() {
    book.classList.add("opened");
    afterBtn.style.transform = "translateX(180px)";
    beforeBtn.style.transform = "translateX(-180px)";
}

function closeBook() {
    book.classList.remove("opened");
    afterBtn.style.transform = "translateX(0px)";
    beforeBtn.style.transform = "translateX(0px)";
}

function goNext() {
    
    if(currentPage < lastPage) {
        if(currentPage === 1) {
            openBook();
        }
        
        console.log("Next: current page is " + currentPage);

        switch(currentPage) {
            case 1:
                page1.classList.add("flipped")
                break;
        }
    
        currentPage++;
    }
}

function goPrevious() {
    
    if(currentPage > 1) {
        
        if(currentPage === 2 | currentPage ===  lastPage) {
            closeBook();
        }
    

        console.log("Previous: current page is " + currentPage);
        switch(currentPage) {
            case 2:
                page1.classList.remove("flipped")
                break;
        }

    }
    currentPage--;
}
