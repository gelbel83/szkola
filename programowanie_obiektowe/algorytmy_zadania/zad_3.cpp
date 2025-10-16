#include <iostream>
using namespace std;

int main()
{
	const int N = 3; // gdzie N to ilosc liczb
	int liczby[N];

	for (int i = 0; i < N; i++) 
	{
		cout << "Wprowadz liczbe nr." << i + 1 << ": ";
		cin >> liczby[i];
	}

	for (int i = 0;i < N;i++) 
	{
		cout << "Liczba nr." << i + 1 << " jest ";

		if (liczby[i] > 0) cout << "dodatnia" << endl;
		else if (liczby[i] < 0) cout << "ujemna" << endl;
		else cout << "rowna zero" << endl;
	}
}