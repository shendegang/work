#include <stdio.h>
#include <stdlib.h>

int main()
{
    int arr[] = {31,41,11,14,15,222,98,94,321,22,14,55};
    //插入排序
    int j,i,key;
    //获取数组长度
    int arrLength = sizeof(arr)/sizeof(arr[0]);
    printf("数组长度: %d \n", arrLength);

    for(j=1; j<arrLength; j++)
    {
        
        i = j-1;
        key = arr[j];
         
        while(i>=0 && arr[i] > key)
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

    return 0;
}
