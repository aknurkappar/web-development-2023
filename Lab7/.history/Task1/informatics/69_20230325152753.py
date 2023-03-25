n = int(input())
arr = list(map(int, input().split()))
counter = 0

for i in range(n, 0):
    if (arr[i-1] == arr[i+1]) and (arr[i-1] < arr[i]):
        counter += 1

print(counter)
