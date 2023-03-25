n = int(input())
arr = list(map(int, input().split()))
counter = 0

for i in range(1, n-1):
    if (arr[i-1] == arr[i+1]) and arr[i-1] == arr[i+1]:
        counter += 1

if counter > 0:
    print("YES")
else:
    print("NO") 