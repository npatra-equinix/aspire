#include<bits/stdc++.h>
using namespace std;

void reverse_string(string st){
    int i=0;
    string res=NULL;
    while(st[i]!=NULL){
        string temp=NULL;
        while(st[i]==' '){
           res=res+temp;
           temp=NULL; 
        }
        
    }
}
int main(){
    //array[char] st="Bangalore has good weather";
    string st="Bangalore has good weathesdfghjsdfghjkertgyjkdfghjkdfghjkdfghjkr";
    //int n=26;
    reverse_string(st);
   
    

    return 0;
}