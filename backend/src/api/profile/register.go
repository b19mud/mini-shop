package profile

import "mini_app_backend/src/api"

func init() {
	api.RegisterRouteMap("/hello", DescribeUserProfile)
	api.RegisterRouteMap("/profile/update", UpdateUserProfile)
}
