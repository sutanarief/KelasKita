package main

import "github.com/gin-gonic/gin"

func main() {
	router := gin.Default()

	router.GET("/", func(c *gin.Context){
		c.JSON(200, gin.H{
			"data": "Surprise Madafaka, the king is back!",
		})
	})
	router.Run("localhost:3000")
}