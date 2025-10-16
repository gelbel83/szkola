#include <iostream>
// # - Dyrektywa preprocesora 

int main()
{
	double a, b, c;

	std::cout << "Wprowadz a: ";
	std::cin >> a;

	do 
	{
		std::cout << "Wprowadz b: ";
		std::cin >> b;

		if (b == 0) std::cout << "Nie mozna dzielic przez zero" << std::endl << std::endl;
	} while (b == 0);
	
	c = a / b;

	std::cout << "Wynik dzielenia: " << a << " / " << b << " = " << c;
}
