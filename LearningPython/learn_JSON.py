import json

users = []

#READ THE FILE
with open("users.json") as file_object:
    users = json.load(file_object) # this line will blow up if the JSON file is not valid
print(users)

while True:
    name = input("Enter name: ")
    age = int("Enter age: ")

    user = {"name": name, "age": age}
    users.append(user)

    #write the dictionary to JSON file
    with open("users.json","w") as file_object:
        #json.dump(datayouwanttowritetojson, fileobjecttouse)
        json.dump(users,file_object)

    choice = input("Continue or q to quit")
    if choice == "q":
        break

#create a simple dictionary to represent a user 
user_dictionary = {"name": "John Doe","age": 45}