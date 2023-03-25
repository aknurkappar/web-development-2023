n = int(input())
arr = list(map(int, input().split()))
counter = 0

arr = arr[::-1]

for i in range(n):
    print(arr[i])