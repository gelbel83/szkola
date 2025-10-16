#include <iostream>
using namespace std;

int main()
{
	const int N = 8; // gdzie N to ilosc lekcji
	string lekcje[N] = {"Obiektowe", "Obiektowe", "WF", "WF", "Internetowe", "Niemiecki", "Matematyka", "Geografia"};

	int wybrana_lekcja;

	cout << "Plan lekcji na dzis: " << endl;
	for (int i = 0; i < N; i++)
	{
		cout << i + 1 << ". " << lekcje[i] << endl;
	}

	do 
	{
		cout << "Wybierz numer lekcji(1 - " << N << "): ";
		cin >> wybrana_lekcja;

		if (wybrana_lekcja < 1 || wybrana_lekcja > N) cout << "Nieprawidlowy numer lekcji!" << endl << endl;
	} while (wybrana_lekcja < 1 || wybrana_lekcja > N);

	cout << "Wybrano lekcje: " << lekcje[wybrana_lekcja - 1];
}