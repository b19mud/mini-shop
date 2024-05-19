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
