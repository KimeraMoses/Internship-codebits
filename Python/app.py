#**** Prob-1 ******#
print("Hello, World!")

#**** Prob-2 ******#
import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input().strip())
    if n%2 != 0: 
        print("Weird")
    else:
        if n>=2 and n<=5:
            print("Not Weird")
        elif n>=6 and n<=20:
            print("Weird")
        elif n>20: 
            print("Not Weird")

#**** Prob-3 ******#
    a = int(input())
    b = int(input())
    
    def stub(a,b):
        print(a+b)
        print(a-b)
        print(a*b)
        
stub(a,b)

#**** Prob-4 ******#

def stub(a,b):
    print(a//b)
    print(a/b)
    
stub(a,b)

#**** Prob-5 ******#
n = int(input())
    
for i in range(n):
    print(i*i)

#**** Prob-6 ******#
def is_leap(year):
    leap = False
    
    # Write your logic here
    if year%4 ==0:
        leap = True
        if year%100 ==0:
            leap = False
            if year%400 ==0:
                leap= True
        
  
    return leap

#**** Prob-7 ******#
n = int(input())
for i in range(n + 1):
    if i>0:
        print(i, end ="")


def print_full_name(first, last):
    # Write your code here
    print("Hello "+ first + " " + last + "! You just delved into python.")


def count_substring(string, sub_string):
    count = 0
    for i in range(len(string)-len(sub_string)+1):
        if (string[i:i+len(sub_string)] == sub_string):
            count = count + 1
    return count

#*****Percentage
if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    marks=0
    for i in student_marks[query_name]:
        marks=marks+i
    avg=marks/3
    print("%.2f"%avg)

#*****LISTS
if __name__ == '__main__':
    N = int(input())
    MyList=[];
    for i in range(0,N):
        Entered_cmd=input().split();
        if Entered_cmd[0] == "insert":
            MyList.insert(int(Entered_cmd[1]),int(Entered_cmd[2]))
        elif Entered_cmd[0] == "append":
            MyList.append(int(Entered_cmd[1]))
        elif Entered_cmd[0] == "pop":
            MyList.pop();
        elif Entered_cmd[0] == "print":
            print(MyList)
        elif Entered_cmd[0] == "remove":
            MyList.remove(int(Entered_cmd[1]))
        elif Entered_cmd[0] == "sort":
            MyList.sort();
        else:
            MyList.reverse();
#****TUPLES
if __name__ == '__main__':
    n = int(input())
    integer_list = map(int, input().split())
    res = tuple(integer_list)
    result = hash(res)
    print(result)

#*****SWAP CASES
def swap_case(s):
    return s.swapcase()