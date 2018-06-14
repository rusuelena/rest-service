# rest-service

GET /students - intoarce o lista cu toti studentii din baza de date in format JSON;
GET /students/:id - intoarce un student din baza de date dupa id-ul specificatin format JSON;
POST /students - creaza un student pe care il adauga la baza de date, pe care il primeste ca JSON in corpul request-ului;
PUT /students/:id - modifica studentul cu id-ul specificat, inlocuindu-l cu obiectul primit ca JSON in corpul request-ului;
DELETE /students/:id - sterge studentul cu id-ul specificat din baza de date;

GET /curs - intoarce o lista cu toate cursurile din baza de date in format JSON;
GET /curs/:id - intoarce un curs din baza de date dupa id-ul specificatin format JSON;
POST /curs - creaza un curs pe care il adauga la baza de date, pe care il primeste ca JSON in corpul request-ului;
PUT /curs/:id - modifica cursul cu id-ul specificat, inlocuindu-l cu obiectul primit ca JSON in corpul request-ului;
DELETE /curs/:id - sterge cursul cu id-ul specificat din baza de date;


Structura Student : 
    {
        "nume":"Gigel"
    }
    
Structura Curs :
    {
        "denumire":"Algebra"
    }