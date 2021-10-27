#**********DAY 1 ********#
# Read a full line of input from stdin and save it to our dynamically typed variable, input_string.
input_string = input()

# Print a string literal saying "Hello, World." to stdout.
print('Hello, World.')
print(input_string)


#**********DAY 2 ********#
import math
import os
import random
import re
import sys

#
# Complete the 'solve' function below.
#
# The function accepts following parameters:
#  1. DOUBLE meal_cost
#  2. INTEGER tip_percent
#  3. INTEGER tax_percent
#
def solve(meal_cost, tip_percent, tax_percent):
    # Write your code here
    tip = (tip_percent/100)* meal_cost
    tax = (tax_percent/100)* meal_cost
    
    total_cost = meal_cost + tip + tax
    
    actual_cost = round(total_cost)
    print(actual_cost)



#**********DAY 3 ********#
i = 4
d = 4.0
s = 'HackerRank '
# Declare second integer, double, and String variables.
num_int = int(input())
num_double = float(input())
strg = input()
# Read and save an integer, double, and String to your variables.

# Print the sum of both integer variables on a new line.
print(i + num_int)
# Print the sum of the double variables on a new line.
print(d + num_double)
# Concatenate and print the String variables on a new line
# The 's' variable above should be printed first.
print(s + strg)

#Day 3: Intro to Conditional Statements

N = int(input().strip())
if N%2 != 0:
    print('Weird')
else:
    if(N>=2 and N<=5):
        print('Not Weird')
    elif (N>=6 and N<=20):
        print('Weird')
    elif N>=20:
        print('Not Weird')
    
#DAY 4: Classes and Instances
class Person:
    def __init__(self,initialAge):
        # Add some more code to run some checks on initialAge
        if initialAge>0:
            self.age = initialAge
        else:
            self.age = 0
            print('Age is not valid, setting age to 0.')
            
    def amIOld(self):
        # Do some computations in here and print out the correct statement to the console
        if self.age<13:
            print('You are young.')
        elif self.age>=13 and self.age<18:
            print('You are a teenager.')
        else:
            print('You are old.')
        
    def yearPasses(self):
        # Increment the age of the person in here
        self.age = self.age + 1 
#DAY 5: LOOPS
if __name__ == '__main__':
    n = int(input().strip())
    for i in range(1,11):
        print(f"{n} x {i} = {n*i}")

#DAY 6: Review
# Enter your code here. Read input from STDIN. Print output to STDOUT
S_length = int(input())
for i in range(0, S_length):
    S=input()
    print(S[0::2] + ' '+ S[1::2])

#DAY 7: ARRAYS
if __name__ == '__main__':
    n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))
    ele = map(str, arr[::-1])
    print(" ".join(ele))

#DAY 8: DICTIONARIES
x = int(input())

myDict = {}

for i in range(x):
    text = input().split()
    myDict[text[0]] = text[1]

while True:
    try:
        inpt = input()
        if inpt in myDict:
            print(inpt+"="+myDict[inpt])
        else:
            print("Not found")
    except EOFError:
        break
#DAY 9:Recursion
def factorial(n):
    # Write your code here
    if n==0:
        return 1
    else:
        return factorial (n-1)*n
