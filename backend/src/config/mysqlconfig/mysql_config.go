package mysqlconfig

import (
	"mini_app_backend/src/util/zaplog"

	"github.com/spf13/viper"
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

	return nil
}
