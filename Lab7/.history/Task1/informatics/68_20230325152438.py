n = int(input())
arr = list(map(int, input().split()))
counter = 0

for i in range(2, n):
    if (arr[i-2] == arr[i]) or (arr[i] > 0 and arr[i-1] > 0) or (arr[i] < 0 and arr[i-1] < 0):
        counter += 1

if counter > 0:
    print("YES")
else:
    print("NO") 