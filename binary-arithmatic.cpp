#include<bits/stdc++.h>
using namespace std;

void add_binary()
{

}
void sub_binary()
{

}
void mul_binary()
{

}
void div_binary()
{
   
}
void pow_binary()
{
   
}
void mod_binary()
{
   
}
void factorial_binary()
{
   
}
 int main()
 {
   int a;
   cout<<"enter the operation your want to perform:"<<endl;
   cout<<"1 for addition"<<endl<<"2 for substration"<<endl<<"3 for multiplication"<<endl<<"4 for division"<<endl;
   cout<<"5 for power "<<endl<<"6 for modulo"<<endl<<"7 for factorial"<<endl;
   cin>>a;
   switch(a)
   {
      case 1: add_binary();break;
      case 2: sub_binary();break;
      case 3: mul_binary();break;
      case 4: div_binary();break;
      case 5: pow_binary();break;
      case 6: mod_binary();break;
      case 7: factorial_binary();break;
      default: break;
   }
    return 0;
 }