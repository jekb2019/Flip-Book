let currentPage = 1;
let lastPage = 3;
let endPage = lastPage + 1;


const beforeBtn = document.querySelector('#before-btn');
const afterBtn = document.querySelector('#after-btn');
const book = document.querySelector('#book');
const page1 = document.querySelector('#p1')
const page2 = document.querySelector('#p2')
const page3 = document.querySelector('#p3')


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
    
    if(currentPage < endPage) {
        if(currentPage === 1) {
            openBook();
        }
        
        console.log("Next: current page is " + currentPage);

        switch(currentPage) {
            case 1:
                page1.classList.add("flipped");
                page1.style.zIndex = 1;
                break;
            case 2:
                page2.classList.add("flipped");
                page2.style.zIndex = 2;
                break;
            case 3:
                page3.classList.add("flipped");
                page3.style.zIndex = 3;
                break;
        }
    
        currentPage++;
    }
}

function goPrevious() {
    
    if(currentPage > 1) {
        
        if(currentPage === 2) {
            closeBook();
        }
    

        console.log("Previous: current page is " + currentPage);
        switch(currentPage) {
            case 2:
                page1.classList.remove("flipped");
                page1.style.zIndex = 3;
                break;
            case 3:
                page2.classList.remove("flipped");
                page2.style.zIndex = 2;
            case 4:
                page3.classList.remove("flipped");
                page3.style.zIndex = 1;
        }
        currentPage--;
    }
}
