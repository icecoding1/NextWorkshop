package main

import (
	"example/go-gin-api/model"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func main() {
	dsn := "root:@tcp(127.0.0.1:3306)/gorm?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	r := gin.Default()
	r.GET("/users", func(c *gin.Context) {
		var users []model.User
		db.Find(&users)
		c.JSON(http.StatusOK, users)
	})

	r.GET("/users/:id", func(c *gin.Context) {
		id := c.Param("id")
		var user model.User
		db.First(&user, id)
		c.String(http.StatusOK, "Hello %s", user)
	})

	r.POST("/users", func(c *gin.Context) {
		var user model.User
		if err := c.ShouldBindJSON(&user); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		result := db.Create(&user)

		c.JSON(http.StatusOK, gin.H{"status": result.RowsAffected})
	})

	r.DELETE("/users/:id", func(c *gin.Context) {
		id := c.Param("id")
		var user model.User
		db.First(&user, id)
		db.Delete(&user)
		c.JSON(http.StatusOK, gin.H{"message": user})
	})

	r.PUT("/users", func(c *gin.Context) {
		var user model.User
		var userUpdate model.User
		if err := c.ShouldBindJSON(&user); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		db.First(&userUpdate, user.ID)
		userUpdate.Fname = user.Fname
		userUpdate.Lname = user.Lname
		userUpdate.Username = user.Username
		userUpdate.Avatar = user.Avatar
		db.Save(&userUpdate)
		c.JSON(http.StatusOK, gin.H{"message": "Updated success"})
	})

	r.Use(cors.Default())
	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}