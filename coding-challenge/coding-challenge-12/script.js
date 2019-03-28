'use script'


var displayResult = function (booksResult) {

    var tbody = document.getElementById("tbody")

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

var loadContent = function () {

    var language = document.getElementById("languageName").value;
    var request = new XMLHttpRequest();
    request.open("get", "books.json");
    request.send();
    request.onreadystatechange = function (data) {
        if (request.readyState == 4 && request.status == 200) {
            var books = JSON.parse(request.responseText)
            //    for(var i = 1;i<books.length;i++){
            //     console.log(books[i].author)
            //    }

            searchBooks(books, language)

        }
    };
};

var button = document.getElementById("search")
button.addEventListener("click", loadContent)