package models

import (
	"gorm.io/gorm"
)

// OrderItem represents an item within an order
type OrderItem struct {
	gorm.Model         // Contains ID, CreatedAt, UpdatedAt, DeletedAt
	OrderID    uint    `gorm:"not null"` // Foreign key
	ProductID  uint    `gorm:"not null"` // Foreign key
	Quantity   int     `gorm:"not null"`
	Price      float64 `gorm:"not null"`
}
