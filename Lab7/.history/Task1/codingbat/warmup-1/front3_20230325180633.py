def front3(str):
  front = 3
  if str < 3:
    front = len(str)
  answer = str[:front] *3
  return answer
