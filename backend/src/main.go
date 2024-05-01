package main

import (
	"fmt"
	"mini_app_backend/src/api"
	_ "mini_app_backend/src/api/install"
	"mini_app_backend/src/config/mysqlconfig"
	"mini_app_backend/src/config/serverconfig"
	"mini_app_backend/src/util/zaplog"
	"strconv"

	"github.com/gin-gonic/gin"
)

func main() {

	// 初始化日志
	fmt.Println("start to init log")
	err := zaplog.InitZapLog()
	if err != nil {
		return
	}

	// 初始化数据库
	fmt.Println("start to init mysql")
	err = mysqlconfig.InitMySQLDB()
	if err != nil {
		zaplog.Logger.Error(err.Error())
		return
	}

	// 初始化server
	fmt.Println("start to init server")
	err = serverconfig.InitServerConfig()
	if err != nil {
		zaplog.Logger.Error(err.Error())
		return
	}

	server := gin.Default()

	for route, function := range api.GetAllApiRoute() {
		server.POST(route, function)
	}

	sconfig := serverconfig.GetServerConfig()
	if sconfig == nil {
		zaplog.Logger.Error("server config is nil")
		return
	}
	zaplog.Logger.Info("start server")
	server.Run(":" + strconv.FormatInt(int64(sconfig.Port), 10))
}
