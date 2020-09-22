
class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self,item): #adding an item to the queue
        self.items.append(item)

    def dequeue(self):  #removing the item from the queue
        items = self.items[0]
        del self.items[0]
        return items    #return the item in front of the queue



test = Queue()
test.enqueue(10)
test.enqueue(5)
test.enqueue(3)

print(test.dequeue())  #10
print(test.dequeue()) #5
print(test.dequeue())  #3

