package models

import (
	"gorm.io/gorm"
)

// Product represents a product in the store
type Product struct {
	gorm.Model          // Contains ID, CreatedAt, UpdatedAt, DeletedAt
	Name        string  `gorm:"type:varchar(100);not null"`
	Description string  `gorm:"type:text"`
	Price       float64 `gorm:"type:decimal(10,2);not null"`
	Stock       int     `gorm:"not null"`
	ImageURL    string  `gorm:"type:varchar(255)"`
}
