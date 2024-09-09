package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

// SetupRouter sets up the router and defines the API routes
func SetupRouter() *gin.Engine {
	r := gin.Default()
	//login/register
	r.POST("/register", controllers.Register)

	// User routes
	r.POST("/api/login", controllers.LoginHandler)
	r.POST("/api/register", controllers.RegisterHandler)

	// Product routes
	r.GET("/api/products", controllers.GetProductsHandler)
	r.POST("/api/products", controllers.CreateProductHandler)
	r.GET("/api/products/:id", controllers.GetProductHandler)
	r.PUT("/api/products/:id", controllers.UpdateProductHandler)
	r.DELETE("/api/products/:id", controllers.DeleteProductHandler)

	// Cart routes
	r.GET("/api/cart/:userID", controllers.GetCartItemsHandler)
	r.POST("/api/cart", controllers.AddToCartHandler)
	r.DELETE("/api/cart/:id", controllers.RemoveFromCartHandler)

	// Order routes
	r.POST("/api/orders", controllers.CreateOrderHandler)
	r.GET("/api/orders/:userID", controllers.GetUserOrdersHandler)

	return r
}
