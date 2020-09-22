import datetime as dt

#fields (cost is 30 an hour converted to seconds)
cost = (30/3600)



#function for determining if time is seconds, minutes, or hours
def time_ending(time):
        given_time = time
        if(given_time >= 60 and given_time <= 3600):
            given_time= str(given_time) + " minutes"
        elif(given_time < 60):
            given_time = str(given_time) + " seconds"
        elif(given_time>= 3600):
            given_time = str(given_time) + " hours"
        else:
            print("ERROR")
        return given_time



#function for calculating the time diff
def time_diff(t1):
    diff = (dt.datetime.now()-t1)
    diff = diff.total_seconds()
    diff = round(diff, 2)
    return diff

    

#table (holds pool table info)
class Table: 
    #constructor
    def __init__(self, table_num, cost):
        self.table_num = table_num
        self.start_time = 0
        self.end_time = 0
        self.cost = cost
        self.status = False


    #Shows info for each table
    def display_table(self):
        if(self.status == True):
            print(f"Table {self.table_num+1}: OCCUPIED")
            #using time_diff and time_ending methods here
            print(f"Time start: {time_ending(time_diff(self.start_time))}")
        else:
            print(f"Table {self.table_num+1}: UNOCCUPIED")
    

    #writes info to a .txt file named after dt.datetime.now()
    def file_writing(self):

        #find time diff, find cost of table
        diff = time_diff(self.start_time)
        total_cost = round(self.cost*diff, 2)
        #give diff its ending (secs,mins,hrs)
        diff = time_ending(diff)
        file_name = dt.datetime.now().strftime("%Y-%m-%d")

        #writing table logs as a .txt file
        with open(f"{file_name}","a") as file_object:
            file_object.write(f"|Table Number: {self.table_num+1}\n")
            file_object.write(f"|  Start Time: {self.start_time}\n")
            file_object.write(f"|    End Time: {dt.datetime.now()}\n")
            file_object.write(f"|  Total Time: {diff}\n")
            file_object.write(f"|  Total Cost: ${total_cost}\n\n")


    #changes table status to True and gives start time 
    def open_table(self):
        self.status = True
        self.start_time = dt.datetime.now()
        time_str = dt.datetime.now().strftime("%H:%M:%S")
        print(f"Table {self.table_num+1} is now occupied")
        print(f"Start time is {time_str}")


    #changes table "status" while also finding the cost and time the table was True
    def close_table(self):
        if(self.status == False):
            print(f"TABLE {self.table_num} is already unoccupied")
        else:
            self.status = False
            #calling two helper functions
            diff = time_diff(self.start_time)
            diff = time_ending(diff)
            #print time and write to .txt file
            print(diff)
            #print cost (with some formatting)
            print(f"${round( (time_diff(self.start_time) * cost) , 2) }")
            #call file writing method
            self.file_writing()



#menu
def menu():
    print ("""
    1.Display all tables
    2.Look at an individual table
    3.Start a table
    4.Close out a table
    5.Exit
    """)
    #user input/menu controls
    choice = input("Choose an option: ") 
    if choice == "1": 
        #loops through room[] and runs display_table() on each
        for obj in room:
                obj.display_table()
    elif choice == "2":
         user_input = int(input("\nWhich table? "))
         room[user_input-1].display_table()
    elif choice == "3":
        user_input = int(input("\nWhich table? "))
        room[user_input-1].open_table()
    elif choice == "4":
        user_input = int(input("\nWhich table? "))
        room[user_input-1].close_table()
    elif choice == "5":
        print("\nSee you later!") 
        quit()
    elif choice !="":
        print("\nInvalid Input. Please enter 1-5") 
    menu()



#creating room of 12 tables  
room = []
for i in range(0,12):
    room.append(Table(i, cost))



#running program
menu()