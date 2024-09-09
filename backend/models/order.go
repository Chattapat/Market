package models

import (
	"gorm.io/gorm"
)

// Order represents an order made by a user
type Order struct {
	gorm.Model          // Contains ID, CreatedAt, UpdatedAt, DeletedAt
	UserID      uint    `gorm:"not null"` // Foreign key
	TotalAmount float64 `gorm:"not null"`
	Status      string  `gorm:"not null"`
}
