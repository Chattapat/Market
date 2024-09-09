package main

import (
	"backend/database"
	"backend/models"
	"backend/routes"
	"fmt"
	"log"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func main() {
	// โหลดตัวแปร environment จากไฟล์ .env
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	// กำหนดการเชื่อมต่อฐานข้อมูล
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=Asia/Bangkok",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_PORT"),
	)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Error connecting to database: %v", err)
	}

	// เรียกใช้ฟังก์ชันตั้งค่าฐานข้อมูลใน package database
	database.SetDB(db)

	// Migrate models
	err = db.AutoMigrate(
		&models.User{},     // โมเดลสำหรับผู้ใช้
		&models.Product{},  // โมเดลสำหรับสินค้า
		&models.CartItem{}, // โมเดลสำหรับตะกร้าสินค้า
		&models.Order{},    // โมเดลสำหรับคำสั่งซื้อ
	)
	if err != nil {
		log.Fatalf("Failed to migrate database: %v", err)
	}

	r := gin.Default()

	r.Use(cors.Default())

	// สร้าง router โดยเรียกใช้ฟังก์ชัน SetupRouter จาก routes
	router := routes.SetupRouter()

	// กำหนดให้แอปพลิเคชันรันบนพอร์ตที่กำหนดไว้ใน .env (หรือใช้พอร์ต 8080 หากไม่กำหนด)
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	router.Run(":" + port)
}
