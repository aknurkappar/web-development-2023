if __name__ == '__main__':
    students = []
    scores = []
    result = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])
        scores.append(score)
    scores = list(set(scores))
    scores.sort()    
    secondMaxScore = scores[1]
    for i in range(len(students)):
        if students[i][1] == secondMaxScore:
            result.append(students[i][0])
    result.sort()
    for i in range(len(result)):
        print(result[i])