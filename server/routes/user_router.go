package routes

import (
    "kelaskita-restful/controllers"
    "github.com/gin-gonic/gin"
)

func UserRoute(router *gin.Engine)  {
    router.POST("/user", controllers.CreateUser())
	router.GET("/user/:userId", controllers.GetAUser())
}