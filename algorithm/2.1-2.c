#include <stdio.h>
#include <stdlib.h>
#define arraySize(ARR) (sizeof(ARR)/sizeof(ARR[0]))

int main()
{
    //插入排序
    int arr[] = {31,41,11,14,15,222,98,94,321,22,14,55};
    int i = 0;

    // inserSortArray(arr,arraySize(arr));
   
    //归并排序
   // mergerSort(arr,0,arraySize(arr));
   
    maopao(arr, arraySize(arr));
    /**
    for(i = 0; i < 10; i++)
        printf(" %d", arr[i]);

    printf("\n");
    **/
    return 0;
}

/**
 * 插入排序
 */
void inserSortArray(int arr[],int arrLength)
{   
    
    //int arr[] = {31,41,11,14,15,222,98,94,321,22,14,55};
    //插入排序
    int j,i,key;
    printf("数组长度: %d \n", arrLength);

    for(j=1; j<arrLength; j++)
    {
        
        i = j-1;
        key = arr[j];
         
        while(i>=0 && arr[i] < key)
        {
            
            arr[i+1] = arr[i];
            i = i-1;
        }

        arr[i+1] = key;
        
    }
    
    int t;
    for(t=0; t<arrLength; t++)
    {
        printf(" %d \n ", arr[t]);
    }

}

/**
 * 归并排序
 */
void mergerSort(int *a, int first, int last)
{
    int n = last - first;
    int idxa = first,
    idxb = ((first+last)%2 == 0) ? (first+last)/2 : (first+last+1)/2,
    idxc = last;

    if(n<2)
        return;
    else if(n == 2)
        mergerArray(a, idxa, idxb, idxc);
    else
    {
        if(idxb-idxa > 1)
            mergerSort(a, idxa, idxb);
        if(idxc-idxb > 1)
            mergerSort(a, idxb, idxc);
        mergerArray(a, idxa, idxb, idxc);
    }

}

/**
 * 将a[first..mid]与a[mid...last] 合并
 * idxa 开始 idxb 中间 idxc最后数
 */
void mergerArray(int *a, int idxa, int idxb, int idxc)
{
    int i = idxa, j = idxb, k = 0;
    int total = idxc-idxa;
    int *temp = (int *)malloc(sizeof(int) * total);

    if(temp == NULL)
        return;
    while(i < idxb && j <idxc)
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

    for(i = 0, k = idxa; i < total; k++, i++)
    {
        a[k] = temp[i];
    }

    free(temp);
}

/**
 * 冒泡排序
 */
void maopao(int a[], int b)
{
    int i,j, temp;

    for(i=0; i<b; i++)
    {
        for(j=0; j<b-i; j++)
        {
            if(a[j] > a[j+1])
            {
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }

    for(i=0; i<b; i++)
        printf("%d \t", a[i]);
}
