n = int(input())

answer = ""

print(str(n)[::-1])

for d in str(n)[::-1]:
    if len(answer) == 0 and d != "0":
        answer += d

print(answer)