package main

import (
	"kelaskita-restful/configs"
	"kelaskita-restful/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"data": "Surprise Madafaka, the king is back!",
		})
	})

	//run database
	configs.ConnectDB()

	//routes
	routes.UserRoute(router)

	router.Run("localhost:4000")
}
