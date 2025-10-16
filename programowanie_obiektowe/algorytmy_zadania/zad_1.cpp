#include <iostream>
using namespace std;

int main()
{
    int a, b, c;

    cout << "Wprowadz a: ";
    cin >> a;

    cout << "Wprowadz b: ";
    cin >> b;

    cout << "Wprowadz c: ";
    cin >> c;

    if (a > b) 
    {
        if (a > c) cout << "Najwieksza liczba to " << a;
        else cout << "Najwieksza liczba to " << c;
    }
    else 
    {
        if (b > c) cout << "Najwieksza liczba to " << b;
        else cout << "Najwieksza liczba to " << c;
    }
    
    // Alternatywny sposob z dwoma komparatorami
    /*
    int m;

    if (a > b) m = a;
    else m = b;

    if (c > m) m = c;

    cout << "Najwieksza liczba to " << m;
    */
}
