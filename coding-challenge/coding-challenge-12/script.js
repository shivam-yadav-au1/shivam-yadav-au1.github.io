'use script'

var Books = [];
var displayResult = function (booksResult) {

    var tbody = document.getElementById("tbody")
    tbody.innerHTML = ""

    for (var i = 0; i < booksResult.length; i++) {
        var tr = document.createElement("tr")
        var author = document.createElement("td")
        var country = document.createElement("td")
        var imageLink = document.createElement("td")
        var language = document.createElement("td")
        var link = document.createElement("td")
        var pages = document.createElement("td")
        var title = document.createElement("td")
        var year = document.createElement("td")
        author.innerText = booksResult[i].author
        country.innerText = booksResult[i].country
        imageLink.innerText = booksResult[i].imageLink
        language.innerText = booksResult[i].language
        link.innerText = booksResult[i].link
        pages.innerText = booksResult[i].pages
        title.innerText = booksResult[i].title
        year.innerText = booksResult[i].year

        tr.appendChild(author)
        tr.appendChild(country)
        tr.appendChild(imageLink)
        tr.appendChild(language)
        tr.appendChild(link)
        tr.appendChild(pages)
        tr.appendChild(title)
        tr.appendChild(year)
        tbody.appendChild(tr)
    }

}

var searchBooks = function (books, language) {
    booksResult = []
    for (var i = 1; i < books.length; i++) {
        if (books[i].language == language) {

            booksResult.push(books[i])

        }
    }
    displayResult(booksResult)

}

var populateSelect = function () {
   console.log("Select called")
   
    var selectLanguage = document.getElementById("selectLanguage")
    var languageVisted = []
    for (var i = 0; i < Books.length; i++) {

        var language = Books[i].language
        if (languageVisted.indexOf(language) != -1) {
            continue
        }
        languageVisted.push(language)
        var option = document.createElement("option")
        option.innerText = language
        option.value = language

        selectLanguage.appendChild(option)
    }

}

var loadContent = function () {

    
    console.log("loadContent called")
    var request = new XMLHttpRequest();
    request.open("get", "books.json");
    request.send();
    request.onreadystatechange = function (data) {
        if (request.readyState == 4 && request.status == 200) {
            
            Books = JSON.parse(request.responseText)
            console.log("Books length :"+Books.length)
            populateSelect()
            return Books
        }
    };
};

var button = document.getElementById("search")
button.addEventListener("click", function(){
    var language = document.getElementById("selectLanguage").value
    searchBooks(Books,language)
})