#opening original file
with open("emails.txt") as file_object:
    lines = file_object.read()

#splitting file 
duplicate_emails = lines.split(",")
duplicate_free_emails = []

#looping through to remove duplicates
for email in duplicate_emails:
    email = email.strip()
    if email not in duplicate_free_emails:
        duplicate_free_emails.append(email)

#adding commas in between emails
result = ",".join(duplicate_free_emails)

#writing emails to a new .txt 
with open("duplicate_free_emails.txt","w") as file_object:
    file_object.write(result)            