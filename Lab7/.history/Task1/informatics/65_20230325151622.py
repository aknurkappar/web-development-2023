n = int(input())
arr = list(map(int, input().split()))
counter = 0

for i in range(1, n):
    if arr[i] > 0 arr[i-1]:
        counter += 1
print(counter)