package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func AuthRequired() gin.HandlerFunc {
	return func(c *gin.Context) {
		// ตรวจสอบว่ามี JWT token หรือไม่
		token := c.Request.Header.Get("Authorization")
		if token == "" {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
			c.Abort()
			return
		}

		// ตรวจสอบว่า token ถูกต้องหรือไม่ (เพิ่มฟังก์ชัน validate token ที่นี่)
		// ... validation logic ...

		c.Next()
	}
}
