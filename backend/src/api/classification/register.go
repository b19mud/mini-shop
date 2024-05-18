package classification

import "mini_app_backend/src/api"

func init() {
	api.RegisterRouteMap("/classification", DescribeAllClassifitions)
}