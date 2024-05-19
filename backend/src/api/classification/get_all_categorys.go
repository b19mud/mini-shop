package classification

import (
	"mini_app_backend/src/service/classification"
	"mini_app_backend/src/util/zaplog"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
)

type DescribeAllCategorysRequest struct {
	ClassificationId int
}

type DescribeAllCategorysResponse struct {
	CategoryList []classification.GoodsCategory
}

func DescribeAllCategorys(ctx *gin.Context) {
	request := DescribeAllCategorysRequest{}
	if err := ctx.ShouldBindBodyWith(&request, binding.JSON); err != nil {
		zaplog.Logger.Error(err.Error())
		return
	}
	response := DescribeAllCategorysResponse{}
	result, err := classification.GetAllGoodsCategorysWithId(request.ClassificationId)
	if err != nil {
		zaplog.Logger.Error(err.Error())
		return
	}
	response.CategoryList = result
	ctx.JSON(http.StatusOK, response)
}
