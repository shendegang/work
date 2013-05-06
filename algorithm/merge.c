
/*This is a merge program.
 *  Given an integer ARRAY and three numbers which indicate the begain
 *and the end of two subarrays, merge the two subarrays to a bigger
 *one. The two subarrays are alrealy sorted from small to big.
 *  For example, given an array a[10] and three numbers 0, 3 and 5. The
 *first array is from a[0] to a[2], the seconde array is from a[3] to
 *a[4]. The number 3 and 5 are the upper side. This program merge the
 *two arrays together.
 *
 *Author:    Eric
 *Time:        2011.01.08
 */
#include <stdio.h>
#include <stdlib.h>

#include "main.h"

void merge(int *a, int idxa, int idxb, int idxc)
{
    int i = idxa, j = idxb, k = 0;
    int total = idxc-idxa;
    //int temp[total] = {0};
    int *temp = (int *)malloc(sizeof(int) * total);
    if(temp == NULL)
    {
        fprintf(stderr, "malloc error in merge function\n");
        return;
    }
    while(i < idxb && j < idxc)
    {
        if(a[i] < a[j])
            temp[k++] = a[i++];
        else
            temp[k++] = a[j++];
    }
    
    if(i == idxb)
    {
        while(j < idxc)
            temp[k++] = a[j++];
    }
    else if(j == idxc)
    {
        while(i < idxb)
            temp[k++] = a[i++];
    }
    
    /*Copy the temp to the sorce array*/
    for(i = 0, k = idxa; i < total; k++, i++)
        a[k] = temp[i];
    
    free(temp);
}

#ifndef MAIN
/*For test*/
int main()
{
    int a[10];
    int i = 0;
    int idxa=1, idxb=5, idxc=8;
    
    printf("Please input 10 numbers to the array:");
    for(i = 0; i < 10; i++)
        scanf("%d", &a[i]);
    printf("Three indexes are %d, %d and %d.\nThe first subarray is:", idxa, idxb, idxc);
    for(i = idxa; i < idxb; i++)
        printf(" %d", a[i]);
    printf("\nThe second subarray is:");
    for(i = idxb; i < idxc; i++)
        printf(" %d", a[i]);
    printf("\n");
    
    merge(a, idxa, idxb, idxc);
    printf("The merged array is:");
    for(i = idxa; i < idxc; i++)
        printf(" %d", a[i]);
    printf("\n");
    
    return 0;
}
#endif