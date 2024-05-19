package classification

import (
	"mini_app_backend/src/service/classification"
	"mini_app_backend/src/util/zaplog"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
)

type DescribeAllClassifitionsRequest struct {
}

type DescribeAllClassifitionsResponse struct {
	ClassificationList []classification.GoodsClassification
}

func DescribeAllClassifitions(ctx *gin.Context) {
	request := DescribeAllClassifitionsRequest{}
	if err := ctx.ShouldBindBodyWith(&request, binding.JSON); err != nil {
		// todo error
		zaplog.Logger.Error(err.Error())
		return
	}
	response := DescribeAllClassifitionsResponse{}
	result, err := classification.GetAllGoodsClassifications()
	if err != nil {
		zaplog.Logger.Error(err.Error())
		// todo error
		return
	}
	response.ClassificationList = result
	
	ctx.JSON(http.StatusOK, response)
}
