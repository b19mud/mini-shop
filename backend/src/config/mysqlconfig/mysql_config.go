package mysqlconfig

import (
	"fmt"
	"mini_app_backend/src/util/zaplog"
	"time"

	"github.com/spf13/viper"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type MySQLConfig struct {
	ConnectName string `mapstructure:"connectname"`
	Address     string `mapstructure:"addr"`
	Port        int    `mapstructure:"port"`
	Username    string `mapstructure:"username"`
	Password    string `mapstructure:"password"`
	CharSet     string `mapstructure:"charset"`
	DbName      string `mapstructure:"dbname"`
}

var mySQLServiceMap = map[string]MySQLConfig{}
var mysqlDB map[string]*gorm.DB

func InitMySQLDB() error {
	viper.SetConfigFile("config/database.yaml")
	viper.ReadInConfig()
	mysqlConfigs := []MySQLConfig{}

	if err := viper.UnmarshalKey("database", &mysqlConfigs); err != nil {
		zaplog.Logger.Error(err.Error())
		return err
	}
	for _, mysqlConfig := range mysqlConfigs {
		mySQLServiceMap[mysqlConfig.ConnectName] = mysqlConfig
	}
	err := InitMySQLConnection()
	if err != nil {
		return err
	}
	return nil
}

func InitMySQLConnection() error {
	mysqlDB = map[string]*gorm.DB{}

	for _, config := range mySQLServiceMap {
		dsn := fmt.Sprintf("%v:%v@tcp(%v:%v)/%v?charset=utf8mb4&parseTime=True&loc=Local",
			config.Username, config.Password, config.Address, config.Port, config.DbName)
		db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

		if err != nil {
			zaplog.Logger.Error(err.Error())
			return err
		}
		sqlDB, _ := db.DB()
		sqlDB.SetMaxIdleConns(10)
		sqlDB.SetMaxOpenConns(100)
		sqlDB.SetConnMaxLifetime(time.Hour)

		mysqlDB[config.ConnectName] = db
	}

	return nil
}

func MySQLDB(connectName string) *gorm.DB {
	if _, ok := mysqlDB[connectName]; !ok {
		zaplog.Logger.Error("connect is not exist")
		return nil
	}
	return mysqlDB[connectName]
}
