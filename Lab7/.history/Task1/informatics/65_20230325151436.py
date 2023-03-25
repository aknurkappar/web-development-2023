n = int(input())
arr = list(map(int, input().split()))
counter = 0

for i in range(n):
    if arr[i] > arr[i]:
        counter += 1
print(counter)