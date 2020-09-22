#FILES

#file modes
#w - writing to file
#r - reading from a file
#a - appanding to an existing file
#w+ - openning writing and reading
#other + modes


#by default, if you dont pass the mode the default is (r)
#file_obj = open("todo.txt") #returns obj of type File
#file_obj = open("todo.txt","w")
#file_obj.close() #DONT FORGET TO CLOSE FILES WHEN USING THIS METHOD

#writing file using open approach
#with open("todo.txt","w") as file_object:
#   file_object.write("Feed the dog")


#appending to an existing file
#with open("todo.txt","a") as file_object:
#    file_object.write("Mow the lawn \n")
#   file_object.write("Feed the dog \n")

#ACTIVITY 1
for i in range(0,3):
    dish = input("Enter your favorite dish: ")
    with open("FavFood.txt","a") as file_object:
        file_object.write(f"{i+1}. {dish}\n")

#READING A FILE

#read all and return as string
#with open("hello.txt") as file_object:
#    content = file_object.read()
#print(content)

#read lines from a file and returns them as an array of strings
#with open("hello.txt") as file_object:
#    lines = file_object.readlines()

#print(lines)
    
#ACTIVITY 2 READ DISHES AND DISPLAY ON SCREEN
with open("FavFood.txt") as file_object:
    lines = file_object.read()
print(lines)