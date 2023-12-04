# BookShop React defanse

Welcome to "BookShop" Online Book Store project! This platform provides a user-friendly online book store experience, allowing users to register, login, and create book offers that can be published for potential buyers. Additionally, users can browse through a catalog of books available for purchase or add books to their cart for future consideration. This Readme provides essential information about the project, its functionalities, and how to get started.

# Geting started

To run the BookShop project locally, follow these steps:

1.Clone the repository from 
GitHub: git clone <https://github.com/PlamenCode/BookShop-React>

2.Install the necessary dependencies in book-shop folder:

    npm install

3.Set up the database:
Run the RestService inside the repository (Rest-React): 

    1.npm install 
    2.npm start

Start the application:

    npm start

Access the application in your web browser:

    http://localhost:3000


# Features
1.User Registration: New users can sign up for an account, providing their details and creating a profile.

2.User Login: Registered users can securely log in to their profiles using their credentials.

3.User Logout: Users can log out of their accounts to end their active sessions.

4.Book Offer Creation: Authenticated users can create book offers, adding details such as book title, author, description, price, and cover image.

5.Editing and Deleting Offers: Owners of the Book Offer have the ability to edit or delete their book offers at any time.


6.Browse Catalog: Visitors and registered users can explore a catalog of available books for purchase.

7.Cart: Users can add books from the catalog to their Cart for future reference.

# Technologies Used
1.Frontend: HTML, CSS, JS, React

2.Backend: Node.js, Express.js

3.Database: MongoDB

# Project Routes
Base url - http://localhost:3000

    1.Public Routes
        1. Home Route - /
        2. User Authentication Routes
            2.1 User Login - /login
            2.2 User Register - /register
        3. Catalog - /catalog
        4. Book Details - /books/:bookId

    2.Private Routes(Only registered Users)
        1. Creating Offer - '/create'
        2. Edit Offer - '/eidt/:offerId'
        3. User Cart - '/cart'


# RestService Routes
Base url - http://localhost:4200/ReactDef

    1.Data Routes
        1.Get all available books - GET -> /data
        2.Get Details of one book - GET -> /data/:bookId

        3.Create book - POST -> /data
            -logged in user required

        4.Edit your own book - PUT -> /data/:bookId
            -logged in user required
            -the user must be the owner of the book

        5.Delete your own book - DELETE -> /data/:bookId
            -logged in user required
            -the user must be the owner of the book


    2.Cart Routes
        1.Get all books in the user Cart - GET -> /cart/:userId
        2.Add book to your cart - GET -> /cart/:userId/:bookId
        3.Remove book from your cart - DELETE -> /cart/:userId/:bookId
        4.Check if book is in cart - GET -> /cart/check/:userId/:bookId
        5.Toggle between add/remove book - GET -> /cart/toggle/:userId/:bookId
