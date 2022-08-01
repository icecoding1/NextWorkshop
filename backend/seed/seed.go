package main

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"example/go-gin-api/model"
)


func main() {
	dsn := "root:@tcp(127.0.0.1:3306)/gorm?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	db.AutoMigrate(&model.User{})

	// Create
	db.Create(&model.User{Fname: "pong", Lname: "kkk", Username: "hhh@gmail.com", Avatar: "https://www.mecallapi.com/users/1.png"})
	db.Create(&model.User{Fname: "Test", Lname: "Test", Username: "Test@gmail.com", Avatar: "https://www.mecallapi.com/users/1.png"})

	// // Read
	// var product User
	// db.First(&product, 1)                 // find product with integer primary key
	// db.First(&product, "code = ?", "D42") // find product with code D42

	// // Update - update product's price to 200
	// db.Model(&product).Update("Price", 200)
	// // Update - update multiple fields
	// db.Model(&product).Updates(User{Price: 200, Code: "F42"}) // non-zero fields
	// db.Model(&product).Updates(map[string]interface{}{"Price": 200, "Code": "F42"})

	// // Delete - delete product
	// db.Delete(&product, 1)
}