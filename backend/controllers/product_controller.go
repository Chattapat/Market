package controllers

import (
	"backend/database"
	"backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

// GetProductsHandler retrieves a list of products
func GetProductsHandler(c *gin.Context) {
	var products []models.Product
	// เรียกใช้ฐานข้อมูลผ่าน GetDB()
	db := database.GetDB()

	if err := db.Find(&products).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch products"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"products": products})
}

// CreateProductHandler creates a new product
func CreateProductHandler(c *gin.Context) {
	var newProduct models.Product
	if err := c.ShouldBindJSON(&newProduct); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}
	// เรียกใช้ฐานข้อมูลผ่าน GetDB()
	db := database.GetDB()

	if err := db.Create(&newProduct).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create product"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Product created", "product": newProduct})
}

// GetProductHandler retrieves a single product by ID
func GetProductHandler(c *gin.Context) {
	id := c.Param("id")
	var product models.Product
	// เรียกใช้ฐานข้อมูลผ่าน GetDB()
	db := database.GetDB()

	if err := db.First(&product, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Product not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"product": product})
}

// UpdateProductHandler updates an existing product by ID
func UpdateProductHandler(c *gin.Context) {
	id := c.Param("id")
	var updatedProduct models.Product
	if err := c.ShouldBindJSON(&updatedProduct); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}
	// เรียกใช้ฐานข้อมูลผ่าน GetDB()
	db := database.GetDB()

	var product models.Product
	if err := db.First(&product, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Product not found"})
		return
	}

	db.Model(&product).Updates(updatedProduct)
	c.JSON(http.StatusOK, gin.H{"message": "Product updated", "product": product})
}

// DeleteProductHandler deletes a product by ID
func DeleteProductHandler(c *gin.Context) {
	id := c.Param("id")
	// เรียกใช้ฐานข้อมูลผ่าน GetDB()
	db := database.GetDB()
	if err := db.Delete(&models.Product{}, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Product not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Product deleted"})
}
