package controllers

import (
	"backend/database"
	"backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

// GetCartItemsHandler retrieves cart items for a user
func GetCartItemsHandler(c *gin.Context) {
	userID := c.Param("userID")
	var cartItems []models.CartItem
	// เรียกใช้ฐานข้อมูลผ่าน GetDB()
	db := database.GetDB()
	if err := db.Where("user_id = ?", userID).Find(&cartItems).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch cart items"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"cartItems": cartItems})
}

// AddToCartHandler adds an item to the cart
func AddToCartHandler(c *gin.Context) {
	var cartItem models.CartItem
	if err := c.ShouldBindJSON(&cartItem); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	// เรียกใช้ฐานข้อมูลผ่าน GetDB()
	db := database.GetDB()

	if err := db.Create(&cartItem).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to add item to cart"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Item added to cart"})
}

// RemoveFromCartHandler removes an item from the cart
func RemoveFromCartHandler(c *gin.Context) {
	id := c.Param("id")

	// เรียกใช้ฐานข้อมูลผ่าน GetDB()
	db := database.GetDB()

	if err := db.Delete(&models.CartItem{}, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Cart item not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Item removed from cart"})
}
