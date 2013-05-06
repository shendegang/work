/*This is a function for sorting an array useing merge.c
 *
 *Author:    Eric
 *Time:        2011.01.08
 */
#include <stdio.h>

#include "main.h"
#include "merge.h"

/*Sort array a, from a[begin] to a[upend-1]*/
void sort(int *a, int begin, int upend)
{
    int n = upend - begin; /*the number to be sorted*/
    /*The first array is a[idxa] to a[idxb-1]. The second is a[idxb] to a[idxc-1]*/
    int idxa = begin,
    idxb = ((begin+upend)%2 == 0) ? (begin+upend)/2 : (begin+upend+1)/2,
    idxc = upend;
    
    if(n < 2)
    {
        printf("The array elements are less than two. No need to sort\n");
        return;
    }
    else if(n == 2)
        merge(a, idxa, idxb, idxc);
    else
    {
        if(idxb-idxa > 1)
            sort(a, idxa, idxb);
        if(idxc-idxb > 1)
            sort(a, idxb, idxc);
        merge(a, idxa, idxb, idxc);
    }
}

#ifndef MAIN
#define MAIN
/*For test*/
int main()
{
    int a[10] = {1, 4, 8, 5, 10, 25, 54, 15, 12, 2};
    int i = 0;
    
    sort(a, 0, 10);
    
    printf("The sorted array is:");
    for(i = 0; i < 10; i++)
        printf(" %d", a[i]);
    printf("\n");
    
    return 0;
}
#endif