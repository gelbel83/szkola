#include <iostream>

int main()
{
    float a, b, c{}; // gdzie a i b to liczby wprowadzone a c to wynik
    int option; // operacja wybrana przez użytkownika

    std::cout << "Wybierz operacje " << std::endl;
    std::cout << "1) Dodawanie" << std::endl;
    std::cout << "2) Odejmowanie " << std::endl;
    std::cout << "3) Mnozenie " << std::endl;
    std::cout << "4) Dzielenie " << std::endl;
    std::cout << "5) Potegowanie(kwadrat liczby) " << std::endl;
    
    do 
    {
        std::cout << ": ";
        std::cin >> option;
    } while (option < 1 || option > 5);
    
    std::cout << std::endl << "Wprowadz a: ";
    std::cin >> a;

    if (option < 5) 
    {
        std::cout << "Wprowadz b: ";
        std::cin >> b;
    }

    switch (option) 
    {
        case 1: c = a + b; break;
        case 2: c = a - b; break;
        case 3: c = a * b; break;
        case 4: c = a / b; break;
        case 5: c = a * a; break;
    }

    std::cout << "Wynik: " << c;
}