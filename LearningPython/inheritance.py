class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model
        self.fuel_level = 50
    
    def drive(self):
        print("Car is driving")

    def fill_up(self):
        print("Fill up car with gasoline")
        self.fuel_level = 100
        print(f"Fuel Level is now {self.fuel_level}")


class ElectricCar(Car):
    def __init__(self,make,model):
        #super is parent class
        super().__init__(make,model)
        self.range = 500
    
    def perform_service(self):
        print("Rotating tires.... changing oil")

    def fill_up(self):
        print("Charge the car")



car = Car("Honda", "Accord")
car.drive()
car.fill_up()

electric_car = ElectricCar("Tesla", "Model 3")
electric_car.drive()
electric_car.fill_up()
electric_car.perform_service()



