package database

import (
	"gorm.io/gorm"
)

// ตัวแปรฐานข้อมูลแบบ global
var db *gorm.DB

// ฟังก์ชันตั้งค่าฐานข้อมูล
func SetDB(database *gorm.DB) {
	db = database
}

// ฟังก์ชันเรียกฐานข้อมูล
func GetDB() *gorm.DB {
	return db
}
