
tast = []



class Stack():
    
    def __init__(self):
        self.arr = []


    def push(self,value):
        self.arr.append(value)

        
    
    def pop(self):
        items = self.arr[-1]
        del self.arr[-1]
        return items

#Then you can use the Stack like this: 

stack = Stack() 

stack.push(3) 
stack.push(10)
stack.push(2) 

print(stack.pop()) #returns 2 
print(stack.pop()) #returns 10 
print(stack.pop()) #returns 3 
#print(stack.pop() )#what should happen when there are no items in the stack

 

# https://www.geeksforgeeks.org/stack-data-structure/