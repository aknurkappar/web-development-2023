def front_times(str, n):
  front = 3
  if len(str) < front:
    front = len(str)
  answer = str[:front] * n
  return answer

