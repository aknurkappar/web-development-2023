n = int(input())
arr = list(map(int, input().split()))
counter = 0

for i in range(n):
    if arr[i] > 0:
        counter+=1