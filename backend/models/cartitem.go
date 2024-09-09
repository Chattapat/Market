package models

import (
	"gorm.io/gorm"
)

// CartItem represents an item in the user's cart
type CartItem struct {
	gorm.Model      // Contains ID, CreatedAt, UpdatedAt, DeletedAt
	UserID     uint `gorm:"not null"` // Foreign key
	ProductID  uint `gorm:"not null"` // Foreign key
	Quantity   int  `gorm:"not null"`
}
