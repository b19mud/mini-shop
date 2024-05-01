package api

import (
	"github.com/gin-gonic/gin"
)

var RouteMap = map[string]func(*gin.Context){}

func RegisterRouteMap(route string, routeFucntion func(*gin.Context)) {
	RouteMap[route] = routeFucntion
}

func GetAllApiRoute() map[string]func(*gin.Context) {
	return RouteMap
}
