package model

import "mini_app_backend/src/config/mysqlconfig"

type TbGoodsClassification struct {
	Id                 int
	ClassificationName string
}

func (table *TbGoodsClassification) TableName() string {
	return "tb_goods_classification"
}

func GetAllGoodsClassifications() ([]TbGoodsClassification, error) {
	db_connect := "minishop"
	result := []TbGoodsClassification{}
	err := mysqlconfig.MySQLDB(db_connect).Table((&TbGoodsClassification{}).TableName()).Find(&result).Error
	if err != nil {
		return result, err
	}
	return result, nil
}
