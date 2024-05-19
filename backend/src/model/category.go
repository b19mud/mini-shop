package model

import "mini_app_backend/src/config/mysqlconfig"

type TbGoodsCategorys struct {
	Id               int
	ClassificationId int
	CategoryName     string
	CategoryImage    string
}

func (table *TbGoodsCategorys) TableName() string {
	return "tb_goods_category"
}

func GetAllGoodsCategorysWithClassificationId(classificationId int) ([]TbGoodsCategorys, error) {
	db_connect := "minishop"
	result := []TbGoodsCategorys{}
	err := mysqlconfig.MySQLDB(db_connect).Table((&TbGoodsCategorys{}).TableName()).
		Where("classification_id = ?", classificationId).Find(&result).Error
	if err != nil {
		return result, err
	}
	return result, nil
}
