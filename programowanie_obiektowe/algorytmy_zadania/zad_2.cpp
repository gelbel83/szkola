#include <iostream>
using namespace std;

int main()
{
    int suma = 0, n; //gdzie n to granica wprowadzona przez uzytkownika

    cout << "Program obliczba sume wszystkich liczba naturalnych calkowitych od 1 do n" << endl;

    cout << "Wprowadz n: ";
    cin >> n;

    for (int i = 1; i <= n; i++)
    {
        suma += i;
    }

    cout << "Suma liczb naturalnych calkowitych od 1 do " << n << " wynosi " << suma;
}