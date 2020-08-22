const bookTable = document.querySelector('tbody');

class Book {
    constructor(title,author,pages,read,id){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = id;
    }
    appendBook() {
        let row = document.createElement('tr');
        row.setAttribute('id',this.id);
        let bookEntry = document.createElement('td');
        let authorEntry = document.createElement('td');
        let pageEntry = document.createElement('td');
        let readEntry = document.createElement('td');
        let removeEntry = document.createElement('td');

        bookEntry.textContent = this.title;
        authorEntry.textContent = this.author;
        pageEntry.textContent = this.pages;
        
        let rmBtn = document.createElement('button');
        rmBtn.classList.add('btn');
        rmBtn.classList.add('btn-danger');
        rmBtn.textContent = 'Remove';

        let readBtn = document.createElement('button');
        readBtn.classList.add('btn');
        readBtn.classList.add('btn-outline-success');
        readBtn.classList.add('btn-outline-danger');
        if (this.read) {
            readBtn.textContent='yes';
            readBtn.classList.remove('btn-outline-danger');
        } else {
            readBtn.textContent='no';
            readBtn.classList.remove('btn-outline-success');
        }

        readEntry.appendChild(readBtn);
        removeEntry.appendChild(rmBtn);

        row.appendChild(bookEntry);
        row.appendChild(authorEntry);
        row.appendChild(pageEntry);
        row.appendChild(readEntry);
        row.appendChild(removeEntry);

        bookTable.appendChild(row);


        readBtn.addEventListener('click',(e) => {
            if (this.read) {
                this.read = false;
                readBtn.textContent='yes';
                readBtn.classList.remove('btn-outline-danger');
                readBtn.classList.add('btn-outline-success');
            } else {
                this.read = true;
                readBtn.textContent='no';
                readBtn.classList.remove('btn-outline-success');
                readBtn.classList.add('btn-outline-danger');
            }
        })
        rmBtn.addEventListener('click',(e) => {
            row.remove();
        })

    }
}

let book1 = new Book('a','b',000,true);
let bookArray = [];

const addBtn = document.querySelector("#add-button");
addBtn.addEventListener('click', (e) => {
    let bookName = document.getElementById("book-name").value;
    let authorName = document.getElementById("author-name").value;
    let pageNum = document.getElementById("pages-num").value;
    let readBool = document.getElementById("read-check").checked;
    bookArray.push(new Book(bookName,authorName,pageNum,readBool,bookArray.length));
    bookArray[bookArray.length-1].appendBook();
})