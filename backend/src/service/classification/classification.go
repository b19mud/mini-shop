package classification

import "mini_app_backend/src/model"

type GoodsClassification struct {
	Id                      int
	GoodsClassificationName string
}

func GetAllGoodsClassifications() ([]GoodsClassification, error) {
	classifications, err := model.GetAllGoodsClassifications()
	if err != nil {
		return []GoodsClassification{}, err
	}
	result := []GoodsClassification{}
	for _, classi := range classifications {
		result = append(result, GoodsClassification{
			Id:                      classi.Id,
			GoodsClassificationName: classi.ClassificationName,
		})
	}
	return result, nil
}

type GoodsCategory struct {
	GoodsCategoryId int
	GoodsCategoryImage string
	GoodsCategoryName string
}

func GetAllGoodsCategorysWithId(classificationId int) ([]GoodsCategory, error) {
	queryResult, err := model.GetAllGoodsCategorysWithClassificationId(classificationId)
	if err != nil {
		return []GoodsCategory{}, nil
	}
	result := []GoodsCategory{}
	for _, query := range queryResult {
		result = append(result, GoodsCategory{
			GoodsCategoryId: query.Id,
			GoodsCategoryImage: query.CategoryImage,
			GoodsCategoryName: query.CategoryName,
		})
	}

	return result, nil
}
