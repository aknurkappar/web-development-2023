n = int(input())
arr = list(map(int, input().split()))
counter = 0

for i in range(1, n):
    if arr[i]/arr[i] == arr[i-1]/arr[i-1]:
        counter += 1
