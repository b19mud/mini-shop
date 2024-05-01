package serverconfig

import (
	"github.com/spf13/viper"
)

type ServerConfig struct {
	Port int `yaml:"port"`
}

var sconfig *ServerConfig

func InitServerConfig() error {
	viper.SetConfigFile("config/server.yaml")
	viper.ReadInConfig()
	sconfig = &ServerConfig{}
	return viper.UnmarshalKey("server", &sconfig)
}

func GetServerConfig() *ServerConfig {
	return sconfig
}
